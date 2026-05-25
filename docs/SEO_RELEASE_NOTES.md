# SEO & Marketing Site Release Notes

**Date:** May 2026  
**Site:** [complycare.io](https://complycare.io)  
**Stack:** Vite + React + React Router, prerendered at build time (Puppeteer), deployed on Netlify

This document explains the technical SEO fixes, content updates, and UX improvements shipped in this release. It was written after a codebase audit that identified crawlability gaps, URL inconsistencies, placeholder content, and structured-data bugs.

---

## Executive summary

Before this release, the marketing site had several issues that did not block the app from running but **actively worked against search indexing and click-through**:

1. The blog index prerendered **zero crawlable links** to individual posts (`onClick` navigation only).
2. Sitemap and canonical URLs **did not match** Netlify’s trailing-slash URLs (extra 301 hops).
3. Three blog posts were live with **“Draft for: …” placeholder** copy.
4. FAQ structured data was **duplicated** on solution pages.
5. Blog FAQ schema code existed but **never ran** because it checked the wrong data property.

This release fixes all of the above, publishes five rewritten blog articles, and adds heading/schema improvements across key landing pages.

**Important:** These are **technical hygiene** fixes. They stop the site from sabotaging its own SEO foundation. They do not by themselves guarantee traffic—backlinks, domain authority, and Search Console visibility remain separate growth work (see [Remaining work](#remaining-work-not-in-this-release)).

---

## Problems found (audit)

### 1. Blog index: “JS link ghost”

`/blog` post cards used `<article onClick={() => navigate(...)}>` and a featured `<button>`. Prerender captured post titles but **no `<a href>`** tags. Crawlers reading `dist/blog/index.html` could not follow links to posts from the index.

Mitigations that existed but were insufficient alone: XML sitemap, JSON-LD on the blog index, and links on `/resources`.

### 2. Trailing-slash mismatch

The build writes `dist/{route}/index.html`. Netlify Pretty URLs serve pages at trailing-slash paths (e.g. `/blog/`). The sitemap and canonical tags used non-slash URLs (e.g. `/blog`), causing a **301 on every sitemap URL**.

### 3. Placeholder blog content (production)

Posts 11–13 were deployed with stub text:

> “Draft for: [title] … Content to be written.”

Source had been updated locally but **not rebuilt/redeployed**, so live HTML was stale.

### 4. Broken template literals (local WIP)

While rewriting posts 9–13, five files accidentally closed with `\`;` instead of `` `; ``, which **broke `npm run build`** until fixed.

### 5. Duplicate FAQ schema

Three solution pages passed `faqs` into `PageMeta` (head JSON-LD) **and** `FAQAccordion` injected identical `FAQPage` schema in the body → **two FAQ blocks per page**.

### 6. Blog FAQ schema never emitted

`blogArticleMeta.ts` checked `post.content`, but `blogPosts.ts` intentionally omits `content` (lazy-loaded from `post-{id}.ts`). FAQ extraction never ran until wired to loaded HTML.

---

## What we changed

### A. Crawlable blog links

**File:** `src/marketing/pages/BlogPage.tsx`

- Replaced `onClick` / `navigate()` card pattern with React Router `<Link>` wrappers (renders real `<a href>`).
- Featured CTA now links to `/blog/{slug}/` instead of numeric `/blog/{id}`.
- Blog JSON-LD `blogPost` URLs now use **slugs** (not `/blog/1`, `/blog/2`, …).

**Result:** Prerendered `/blog/` HTML contains **14+ post hrefs** (verified in `dist/blog/index.html`).

### B. Trailing-slash alignment

**Files:**

- `src/marketing/seo/constants.ts` — added `canonicalUrl(path)` helper
- `scripts/generate-sitemap.js` — `sitemapLoc()` emits trailing slashes on non-root URLs
- `src/marketing/components/PageMeta.tsx` — canonical + OG URLs use `canonicalUrl()`
- `src/marketing/seo/blogArticleMeta.ts` — article, breadcrumb, and 404 canonicals aligned

**Result:** Sitemap, canonicals, and Netlify final URLs match (e.g. `https://complycare.io/blog/snf-admission-agreement-compliance-f-tags-2026/`).

### C. Sitemap cleanup

Removed stale entries that should not be indexed as marketing pages:

- `/signin`
- `/payments/liberty`

### D. Blog content (posts 9–13)

| Post | Slug | Change |
|------|------|--------|
| 9 | `snf-discharge-to-bed-ready-timeline` | Rewritten with SEO Q&A structure + internal links |
| 10 | `recurring-cleaning-maintenance-compliance` | Rewritten |
| 11 | `snf-admission-agreement-compliance-f-tags-2026` | Replaced placeholder; F-tag table, CMS survey focus |
| 12 | `cut-snf-discharge-turnaround-time` | Replaced placeholder |
| 13 | `complycare-pointclickcare-compliance-stack` | Replaced placeholder |

Fixed template-literal closers on all five files so lazy imports and production build succeed.

### E. Blog FAQ structured data

**Files:** `src/marketing/seo/blogArticleMeta.ts`, `src/marketing/pages/BlogPostPage.tsx`

- `applyBlogArticleMeta(post, articleContentHtml?)` accepts lazy-loaded HTML.
- FAQ `FAQPage` JSON-LD is injected **after** dynamic import resolves (parses `h2` + `Answer:` pattern in post body).
- Verified on F-tags post prerender: `FAQPage` present, no “Draft for:” text.

### F. Solution page FAQ deduplication

**File:** `src/marketing/components/FAQAccordion.tsx`

- Removed inline `FAQPage` JSON-LD from accordion (UI unchanged).
- Schema now comes **only** from `PageMeta` `faqs` prop in `<head>`.

**Pages affected:**

- `/solutions/snf-admission-agreement-compliance`
- `/solutions/nursing-home-compliance-software`
- `/solutions/discharge-turnover-software`

**Result:** Exactly **one** `FAQPage` block per solution page in prerender output.

### G. Page heading semantics (`isH1`)

**File:** `src/marketing/components/SectionIntro.tsx` — optional `isH1` prop renders `<h1>` instead of `<h2>`.

Applied on primary landing pages: About, Contact, Pricing, Resources, Security, Solutions Post-Aute, and the three solution pages above.

### H. Mock UI accessibility fix

**File:** `src/marketing/components/home/BedTrackerDashboard.tsx`

- Changed decorative “Hello, John” from `<h1>` to `<p>` so the homepage keeps a single real `<h1>` in `HeroSection`.

### I. Demo video rename

Renamed public assets to match admissions-agreement positioning:

| Before | After |
|--------|-------|
| `public/grievance-form-demo.mp4` | `public/admissions-agreement-demo.mp4` |
| `public/grievance-form-demo.mov` | `public/admissions-agreement-demo.mov` |

**File:** `src/marketing/data/content.ts` — updated `videoSrc` on the documents feature card.

---

## Build & deploy (Netlify)

`npm run build` runs sitemap generation, Vite, prerender (26 routes), then **`verify-build-output.js`** — the build **fails** if `Draft for:` or `Content to be written` appears in any file under `dist/`. See [`NETLIFY.md`](NETLIFY.md).

---

```bash
npm run build
# → node scripts/generate-sitemap.js
# → vite build
# → node scripts/prerender-routes.js  (Puppeteer, 26 routes)
# → node scripts/verify-build-output.js  (fails if draft placeholder text in dist/)
```

Publish directory: `dist/`

---

## Verification checklist (pre-deploy)

All checks passed locally before deploy:

| Check | Status |
|-------|--------|
| `npm run build` completes | Pass |
| 26 routes prerendered | Pass |
| Blog index has `/blog/.../` hrefs | Pass (14+) |
| No “Draft for:” in `dist/blog/*` | Pass |
| Sitemap URLs use trailing slashes | Pass |
| Canonical tags match trailing slashes | Pass |
| F-tags post: full content + FAQ schema | Pass |
| Posts 9–13 import without syntax errors | Pass |
| Solution pages: single FAQ schema each | Pass |
| Build fails on draft placeholder text in `dist/` | Pass (automated) |

---

## Files changed (by category)

### SEO core

- `scripts/generate-sitemap.js`
- `scripts/verify-build-output.js`
- `public/sitemap.xml` (generated)
- `src/marketing/seo/constants.ts`
- `src/marketing/seo/blogArticleMeta.ts`
- `src/marketing/components/PageMeta.tsx`

### Blog

- `src/marketing/pages/BlogPage.tsx`
- `src/marketing/pages/BlogPostPage.tsx`
- `src/marketing/data/posts/post-{9..13}.ts`

### Solution pages & components

- `src/marketing/components/FAQAccordion.tsx`
- `src/marketing/components/SectionIntro.tsx`
- `src/marketing/pages/DischargeTurnoverSoftwarePage.tsx`
- `src/marketing/pages/NursingHomeComplianceSoftwarePage.tsx`
- `src/marketing/pages/SnfAdmissionAgreementCompliancePage.tsx`
- Plus `isH1` on About, Contact, Pricing, Resources, Security, SolutionsPostAcute

### Content & assets

- `src/marketing/data/content.ts`
- `src/marketing/components/home/BedTrackerDashboard.tsx`
- `public/admissions-agreement-demo.{mp4,mov}` (renamed)

---

## Remaining work (not in this release)

These were identified in the SEO audit. Status as of the build safety-check commit (`a922661`):

### Done after initial release

- **G2 in Organization schema** — `sameAs` includes `https://www.g2.com/products/comply-care`; `areaServed` (United States) and `knowsAbout` (SNF focus) added in `index.html`.
- **Search Console** — sitemap submitted; indexing requested for `/blog/` and F-tags post.
- **Blog posts 9–13** — placeholder content replaced and deployed.
- **Build safety check** — `scripts/verify-build-output.js` fails `npm run build` if `Draft for:` or `Content to be written` appears in any prerendered HTML.

### G2 / Capterra / GetApp / Software Advice (Jan 2026)

On **January 29, 2026**, G2 announced an agreement to acquire **Capterra**, **Software Advice**, and **GetApp** from Gartner (deal expected to close Q1 2026). These marketplaces are consolidating under G2—not separate vendor programs long term.

**Implication:** Maintain **one strong G2 seller + product profile** rather than creating a standalone Capterra listing. Ask G2 vendor support whether your profile syndicates to Capterra/GetApp/Software Advice or if legacy duplicate listings need merging.

When additional public profile URLs exist (LinkedIn company page, distinct Capterra URL if still separate), add them to Organization `sameAs` in `index.html`.

### Still open (growth, not crawl blockers)

1. **G2 profile polish** — complete About, product screenshots, categories, reviews (on g2.com, not in this repo).
2. **LinkedIn in `sameAs`** — after G2 support sets LinkedIn on the seller profile, add the URL to homepage schema.
3. **Competitor comparison pages** — e.g. vs. ViClarity, whiteboard workflows (see `TODO_SEO.md`).
4. **Posts 1–8 content audit** — fictional case-study framing may affect E-E-A-T long term.
5. **Internal link trailing slashes** — in-article `<a href="/blog/slug">` still omit trailing slash (minor 301 hop).
6. **Homepage static vs runtime meta** — `index.html` title/description differ slightly from `HomePage` `PageMeta` on client navigation.
7. **External shoutouts** — long-term care podcasts, newsletters, backlinks.

See [`TODO_SEO.md`](../TODO_SEO.md) for the updated growth checklist.

---

## How to verify after deploy

1. **Blog index:** View source on `https://complycare.io/blog/` — confirm `<a href="/blog/.../">` on post cards.
2. **F-tags post:** Open `https://complycare.io/blog/snf-admission-agreement-compliance-f-tags-2026/` — confirm full article, no placeholder text.
3. **Sitemap:** `https://complycare.io/sitemap.xml` — URLs should end with `/` (except root).
4. **Search Console:** Confirm sitemap **Last read** updates; monitor **Performance** over coming weeks (initial setup and indexing requests completed May 2026).
5. **Rich results:** Use [Google Rich Results Test](https://search.google.com/test/rich-results) on a solution page and an FAQ-style blog post.

---

## Related commits

| Commit | Summary |
|--------|---------|
| `da1550f` | SEO crawlability, sitemap/canonical alignment, posts 9–13, FAQ schema |
| `912e8bd` | G2 `sameAs`, Organization `areaServed` / `knowsAbout` |
| `e984a98` | Docs: G2/Capterra consolidation, updated `TODO_SEO.md` |
| `a922661` | Post-build check blocking draft placeholder text in `dist/` |

For full diffs, see git history on `main`.
