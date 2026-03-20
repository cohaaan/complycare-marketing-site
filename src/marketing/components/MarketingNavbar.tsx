import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navItems } from '../data/content';
import { cx } from '../utils/cx';
import { CTAButton } from './CTAButton';

function Brand() {
  return (
    <NavLink
      to="/"
      className="inline-flex flex-1 justify-center items-center lg:flex-none lg:justify-start"
      aria-label="ComplyCare.io home"
    >
      <img
        src="/complycare-logo.svg"
        alt="ComplyCare"
        className="h-auto max-h-[60px] w-full max-w-full object-contain object-center sm:h-12 sm:max-h-none sm:w-auto sm:max-w-none"
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
          <div className="h-10 w-10 shrink-0 lg:hidden" aria-hidden />
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
            <CTAButton to="/#request-demo" className="shrink-0 whitespace-nowrap">
              Schedule a demo
            </CTAButton>
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
            <CTAButton
              to="/#request-demo"
              onClick={() => setMenuOpen(false)}
              className="mt-4 flex w-full justify-center whitespace-nowrap"
            >
              Schedule a demo
            </CTAButton>
          </div>
        ) : null}
      </div>
    </header>
  );
}
