# Deploy ComplyCare Marketing Site

This guide covers making your site live on your custom domain and capturing form submissions.

## 1. Form capture (Google Apps Script)

Submissions from the homepage "Request Demo" form and the Contact page form are sent to your Google Apps Script Web App. The script appends rows to a Google Sheet and sends email notifications.

### Setup

1. Use your existing Google Sheet + Apps Script (see BedTracker guide for the `doPost` pattern).
2. Ensure the script expects JSON with: `name`, `email`, `company`, `phone`, `message`, `requestDemo`.
3. Deploy as Web app (Anyone) and copy the URL.
4. Create a `.env` file in the project root:

   ```
   VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```

5. Rebuild and redeploy after changing env vars.

---

## 2. Deploy to production

### Option A: Vercel (recommended)

1. Push your code to GitHub (or GitLab/Bitbucket).
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **Add New Project** and import your repo.
4. Configure:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
   - **Environment variables:** Add `VITE_GOOGLE_SCRIPT_URL`.
5. Deploy. Vercel will give you a URL like `complycare-marketing-site.vercel.app`.

### Custom domain on Vercel

1. In the project, go to **Settings → Domains**.
2. Add your domain (e.g. `complycare.io`).
3. Add the DNS records Vercel shows at your domain registrar:
   - **A record:** `76.76.21.21` (or the IP Vercel provides)
   - **CNAME** (for `www`): `cname.vercel-dns.com`
4. Wait for DNS propagation (often 5–30 minutes).

---

### Option B: Netlify

1. Push your code to GitHub.
2. Go to [netlify.com](https://netlify.com) and sign in with GitHub.
3. Click **Add new site → Import an existing project**.
4. Choose your repo and set:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Environment variables:** Add `VITE_GOOGLE_SCRIPT_URL`.
5. Deploy.

### Custom domain on Netlify

1. In the site, go to **Domain settings → Add custom domain**.
2. Enter your domain and follow the DNS instructions.
3. Netlify can handle SSL automatically.

---

## 3. Local testing

```bash
# Create .env with your Google Script URL
cp .env.example .env
# Edit .env and add your script URL

# Install and run
npm install
npm run dev
```

Submit a test form and confirm it appears in your Google Sheet and email.

---

## 4. Checklist

- [ ] Google Apps Script deployed as Web app (Anyone)
- [ ] `VITE_GOOGLE_SCRIPT_URL` in `.env`
- [ ] Site deployed (Vercel or Netlify)
- [ ] Custom domain added and DNS configured
- [ ] Test form submission end-to-end
