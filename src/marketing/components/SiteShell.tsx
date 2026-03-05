import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { MarketingFooter } from './MarketingFooter';
import { MarketingNavbar } from './MarketingNavbar';

type SiteShellProps = PropsWithChildren<{
  includeFinalCta?: boolean;
}>;

function FinalGlobalCta() {
  return (
    <section className="section-pad border-t border-[#E4EDF5] bg-[#F2F6FA]">
      <div className="cc-container">
        <div className="rounded-3xl border border-[#E4EDF5] bg-white p-8 shadow-[0_14px_40px_rgba(61,81,102,0.1)] sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#4E6478]">Ready to evaluate</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight text-[#2E4057] sm:text-4xl">
            See how ComplyCare.ai unifies post-acute operations and audit readiness.
          </h2>
          <p className="mt-4 max-w-2xl text-[#4E6478]">
            Get a tailored walkthrough based on your admissions volume, facility count, and compliance priorities.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-[#5BBFA0] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#3DA882]"
            >
              Book a Demo
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center rounded-xl border border-[#E4EDF5] bg-white px-5 py-3 text-sm font-semibold text-[#2E4057] transition hover:bg-[#F2F6FA]"
            >
              Get Pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteShell({ children, includeFinalCta = false }: SiteShellProps) {
  return (
    <div
      className="min-h-screen text-[#2E4057]"
      style={{
        background: 'linear-gradient(to bottom, #F0F9FF 0%, #F5FBFF 10%, #E8F8FE 25%, #D4F0FD 45%, #acf3fd 100%)',
        backgroundAttachment: 'fixed',
      }}
    >
      <MarketingNavbar />
      <main>{children}</main>
      {includeFinalCta ? <FinalGlobalCta /> : null}
      <MarketingFooter />
    </div>
  );
}
