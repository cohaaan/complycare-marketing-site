/** Canonical production origin — keep in sync with sitemap, canonical URLs, and JSON-LD. */
export const SITE_ORIGIN = 'https://complycare.io';

/** Absolute canonical URL with trailing slash on non-root paths (Netlify Pretty URLs). */
export function canonicalUrl(path: string): string {
  if (path === '/' || path === '') {
    return `${SITE_ORIGIN}/`;
  }
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_ORIGIN}${normalized.endsWith('/') ? normalized : `${normalized}/`}`;
}

/** Default share image when a page does not pass a dedicated OG image (SVG; replace with 1200×630 PNG for best social previews). */
export const DEFAULT_OG_IMAGE_PATH = '/complycare-logo.svg';
