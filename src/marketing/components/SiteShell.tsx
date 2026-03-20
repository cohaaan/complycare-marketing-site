import { PropsWithChildren } from 'react';
import { CTAButton } from './CTAButton';
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
            See how ComplyCare.io unifies post-acute operations and audit readiness.
          </h2>
          <p className="mt-4 max-w-2xl text-[#4E6478]">
            Get a tailored walkthrough based on your admissions volume, facility count, and compliance priorities.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <CTAButton to="/contact">Book a Demo</CTAButton>
            <CTAButton to="/pricing" variant="secondary">
              Get Pricing
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteShell({ children, includeFinalCta = false }: SiteShellProps) {
  return (
    <div className="cc-site-shell-bg min-h-screen text-[#2E4057]">
      <MarketingNavbar />
      <main className="flex flex-col">{children}</main>
      {includeFinalCta ? <FinalGlobalCta /> : null}
      <MarketingFooter />
    </div>
  );
}
