import { Link } from 'react-router-dom';
import { CTAButton } from '../components/CTAButton';
import { PageMeta } from '../components/PageMeta';
import { SiteShell } from '../components/SiteShell';

export function SignInPage() {
  return (
    <>
      <PageMeta
        title="Sign In"
        description="Access your ComplyCare.io customer workspace."
        path="/signin"
      />
      <SiteShell>
        <section className="section-pad border-b border-[#E4EDF5]">
          <div className="cc-container">
            <div className="mx-auto max-w-xl rounded-3xl border border-[#E4EDF5] bg-white p-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#4E6478]">Customer Access</p>
              <h1 className="mt-3 font-display text-4xl font-semibold text-[#2E4057]">Sign in to ComplyCare.io</h1>
              <p className="mt-4 text-sm leading-relaxed text-[#4E6478]">
                Customer portal access is provisioned by your ComplyCare implementation team.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <CTAButton to="/contact">Contact support</CTAButton>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center rounded-xl border border-[#E4EDF5] bg-white px-5 py-3 text-sm font-semibold text-[#2E4057] transition hover:bg-[#F2F6FA]"
                >
                  Back home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </SiteShell>
    </>
  );
}
