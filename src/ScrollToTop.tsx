import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Resets window scroll on client-side navigations. Without this, deep scroll
 * on long pages (e.g. home) is preserved and shorter routes appear "stuck" at the bottom.
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Assign scrollTop so we bypass html { scroll-behavior: smooth } on route changes.
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
}
