# Remaining SEO & Growth Checklist

Technical crawl/index fixes are **done** (see [`docs/SEO_RELEASE_NOTES.md`](docs/SEO_RELEASE_NOTES.md)). This list is **growth and authority** work.

---

## G2 marketplace (includes Capterra, GetApp, Software Advice)

**Jan 29, 2026:** G2 agreed to acquire **Capterra**, **Software Advice**, and **GetApp** from Gartner. Treat these as **one G2-led ecosystem**—not four separate listing projects.

- [ ] **Complete G2 seller profile** — [g2.com/sellers/complycare](https://www.g2.com/sellers/complycare)  
  About description (U.S. SNF focus), phone, HQ, ownership, product screenshots, categories.
- [ ] **G2 support ticket** — set website `https://complycare.io`, LinkedIn (if any), **year founded** (use real date, not marketing copy unless accurate).
- [ ] **Ask G2 vendor support** — does one G2 profile syndicate to Capterra/GetApp/Software Advice, or is a legacy Capterra page still separate?
- [ ] **Reviews** — 2–3 genuine G2 reviews from operators or demo contacts.
- [x] **Site schema** — G2 URL in homepage `sameAs` (`912e8bd`, live on complycare.io).
- [ ] **LinkedIn in `sameAs`** — after LinkedIn is set on G2, send URL to add to `index.html`.

---

## Build safety (automated)

- [x] **`verify-build-output.js`** — production build fails if `Draft for:` or `Content to be written` appears in `dist/` (`a922661`)

---

- [x] Submit `sitemap.xml`
- [x] Request indexing: `/blog/`, F-tags post
- [ ] Watch **Sitemaps → Last read** and **Performance** over next 2–4 weeks

---

## Content & site

- [x] Publish blog posts 9–13 (replace “Draft for:” placeholders)
- [ ] **Competitor comparison pages** — who you displace (e.g. ViClarity, hallway whiteboards); dedicated “vs” landing pages.
- [ ] **Posts 1–8 audit** — review fictional case-study claims for E-E-A-T risk.
- [ ] **Optional:** homepage `sameAs` for any other verified profiles (Capterra public URL if still distinct).

---

## Backlinks & awareness

- [ ] Pitch long-term care **podcasts** or **newsletters** for mentions + links to complycare.io.
- [ ] **PointClickCare marketplace** — ensure listing links to complycare.io if applicable.

---

## Not needed anymore

- ~~Separate “Submit to Capterra” listing~~ — superseded by G2 acquisition; confirm syndication via G2 first.
- ~~Write 3 scaffolded blog drafts (11–13)~~ — shipped in `da1550f`.
