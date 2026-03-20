# Netlify (CLI + repo)

Build output is Vite’s **`dist/`** (see [`netlify.toml`](netlify.toml)). SPA fallback lives in [`public/_redirects`](public/_redirects); headers in [`public/_headers`](public/_headers).

## One-time: log in and link this folder to a site

From the project root:

```bash
npx netlify login
```

**If the site already exists** (e.g. you connected GitHub in the Netlify UI):

```bash
npx netlify link
```

Pick the team and site. This writes **`.netlify/`** (gitignored) with the site id.

**If you need a new site:**

```bash
npx netlify sites:create --name complycare-marketing-site
npx netlify link   # choose the site you just created
```

Then in the [Netlify UI](https://app.netlify.com) → **Site configuration → Build & deploy**, set **Build command** `npm run build` and **Publish directory** `dist` if they aren’t picked up from `netlify.toml`.

## Deploy from your machine

- **Production:** `npm run deploy:netlify` (runs `netlify deploy --build --prod`)
- **Draft URL:** `npm run deploy:netlify:draft`

## Local dev with Netlify features

```bash
npm run netlify:dev
```

Uses port **8888** by proxying to Vite on **5173** (see `netlify.toml` `[dev]`).

## CI / no browser

Use a [personal access token](https://app.netlify.com/user/applications) and site API ID (Site settings → General):

```bash
export NETLIFY_AUTH_TOKEN=…
export NETLIFY_SITE_ID=…
npm run deploy:netlify
```

GitHub → Netlify **continuous deploy** stays independent: pushes to `main` still build on Netlify once the repo is connected in the UI.
