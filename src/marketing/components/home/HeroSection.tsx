import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HeroSection() {
  return (
    <section className="relative border-b border-[#E4EDF5] pb-14 pt-14 sm:pb-20 sm:pt-16">
      <div className="cc-container">
        <div className="flex flex-col items-center px-7 py-10 text-center sm:px-10 sm:py-12 lg:px-14 lg:py-14">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#4E6478]">ComplyCare.ai</p>
              <h1 className="mt-3 max-w-2xl font-display text-4xl font-extrabold leading-[1.02] text-black sm:text-5xl lg:text-[4.15rem]">
                Accountability That Runs the Facility
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-xl leading-relaxed text-[#2E4057]">
                AI-powered operating system that tracks role accountability from discharge to bed-ready, admissions completion, and recurring compliance execution.
              </p>
              <p className="mx-auto mt-3 max-w-xl text-base font-semibold text-[#2E4057]">
                See who did what, when it happened, and where tasks are stalling before they become operational or audit problems.
              </p>

              <Link to="/platform" className="mt-8 inline-flex items-center gap-2 text-xl font-bold text-black underline decoration-2 underline-offset-4">
                See platform
                <ArrowRight size={20} />
              </Link>

              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-black px-8 py-4 text-lg font-bold text-white transition hover:opacity-90"
                >
                  Book a Demo
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center justify-center rounded-2xl border-2 border-black bg-transparent px-8 py-4 text-lg font-semibold text-black transition hover:bg-[#cfe7bc]"
                >
                  Get pricing
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <div className="flex items-center justify-center rounded-full bg-white px-4 py-2 shadow-sm">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#4E6478]">HIPAA Compliant</span>
                </div>
                <div className="flex items-center justify-center rounded-full bg-white px-4 py-2 shadow-sm">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#4E6478]">PCC Integrated</span>
                </div>
              </div>
        </div>
      </div>
    </section>
  );
}
