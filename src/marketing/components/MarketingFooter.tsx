import { Link } from 'react-router-dom';
import { footerColumns } from '../data/content';

export function MarketingFooter() {
  return (
    <footer className="border-t border-[#E4EDF5] bg-white">
      <div className="cc-container py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_3fr]">
          <div>
            <Link to="/" className="inline-flex items-center">
              <img
                src="/complycare-logo.svg"
                alt="ComplyCare"
                className="h-11 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#4E6478]">
              Unified operations and compliance intelligence for post-acute care. Desktop oversight and mobile execution on one live system.
            </p>
            <div className="mt-5 text-sm text-[#4E6478]">
              <p>Contact: sales@complycare.ai</p>
              <p>Phone: (888) 204-2710</p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.heading}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8FA3B5]">{column.heading}</h3>
                <ul className="mt-4 grid gap-2 text-sm text-[#4E6478]">
                  {column.links.map((link) => (
                    <li key={`${column.heading}-${link.label}`}>
                      <Link to={link.href} className="transition-colors hover:text-[#2E4057]">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-[#E4EDF5] pt-6 text-xs text-[#8FA3B5] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ComplyCare.ai. All rights reserved.</p>
          <p>HIPAA-ready platform posture. Security package available under NDA.</p>
        </div>
      </div>
    </footer>
  );
}
