import { Link } from 'react-router-dom';
import { PageMeta } from '../components/PageMeta';
import { SiteShell } from '../components/SiteShell';

export function NotFoundPage() {
  return (
    <>
      <PageMeta
        title="Page Not Found"
        description="The page you requested was not found."
        path="/404"
      />
      <SiteShell>
        <section className="section-pad border-b border-[#E4EDF5]">
          <div className="cc-container">
            <div className="mx-auto max-w-xl rounded-2xl border border-[#E4EDF5] bg-white p-8 text-center">
              <p className="text-sm uppercase tracking-[0.24em] text-[#7ea4bf]">404</p>
              <h1 className="mt-3 font-display text-4xl font-semibold text-[#2E4057]">Page not found</h1>
              <p className="mt-4 text-sm text-[#4E6478]">The route may have changed or no longer exists.</p>
              <Link
                to="/"
                className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#5BBFA0] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#3DA882]"
              >
                Return home
              </Link>
            </div>
          </div>
        </section>
      </SiteShell>
    </>
  );
}
