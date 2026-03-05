import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navItems } from '../data/content';
import { cx } from '../utils/cx';

function Brand() {
  return (
    <NavLink to="/" className="inline-flex items-center" aria-label="ComplyCare.io home">
      <img
        src="/complycare-logo.svg"
        alt="ComplyCare"
        className="h-12 w-auto"
      />
    </NavLink>
  );
}

export function MarketingNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="z-50 pt-10">
      <div className="cc-container">
        <div
          className={cx(
            'mx-auto flex h-[72px] max-w-[calc(672px+2in)] items-center justify-between gap-5 rounded-full bg-white px-6 shadow-[0_2px_12px_rgba(46,64,87,0.08)] sm:px-8',
            menuOpen && 'rounded-b-none rounded-t-full',
          )}
        >
          <Brand />

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  cx(
                    'text-sm font-medium text-black transition-colors hover:text-black',
                    isActive && 'text-black',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center lg:flex">
            <Link
              to="/#request-demo"
              className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Schedule a demo
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E4EDF5] text-[#4E6478] transition hover:bg-[#F2F6FA] lg:hidden"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {menuOpen ? (
          <div className="rounded-b-2xl border-t border-[#E4EDF5] bg-white px-6 py-5 shadow-[0_8px_24px_rgba(46,64,87,0.08)] lg:hidden">
            <nav aria-label="Mobile primary" className="grid gap-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    cx('rounded-lg px-2 py-2 text-sm font-medium text-black', isActive && 'bg-[#EAF7F2]')
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <Link
              to="/#request-demo"
              onClick={() => setMenuOpen(false)}
              className="mt-4 flex w-full shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Schedule a demo
            </Link>
          </div>
        ) : null}
      </div>
    </header>
  );
}
