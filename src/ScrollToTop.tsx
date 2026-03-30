import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Resets window scroll on client-side navigations. Without this, deep scroll
 * on long pages (e.g. home) is preserved and shorter routes appear "stuck" at the bottom.
 *
 * When the URL includes a hash (e.g. `/#request-demo`), scrolls to that element instead.
 * This fixes `<Link to="/#...">` from other routes (scroll reset was wiping anchor targets)
 * and same-route hash navigation (pathname unchanged, only hash updates).
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      if (id) {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
      }
    }
    // Assign scrollTop so we bypass html { scroll-behavior: smooth } on route changes.
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname, hash]);

  return null;
}
