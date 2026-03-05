export function HeroSection() {
  return (
    <section className="relative border-b border-[#E4EDF5] pb-14 pt-14 sm:pb-20 sm:pt-16">
      <div className="cc-container">
        <div className="flex flex-col items-center px-7 py-10 text-center sm:px-10 sm:py-12 lg:px-14 lg:py-14">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#4E6478]">ComplyCare.io</p>
              <h1 className="mt-3 max-w-2xl font-display text-4xl font-extrabold leading-[1.02] text-black sm:text-5xl lg:text-[4.15rem]">
                Accountability That Runs the Facility
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-xl leading-relaxed text-[#2E4057]">
                AI-powered operating system that tracks role accountability from discharge to bed-ready, admissions completion, and recurring compliance execution.
              </p>
              <p className="mx-auto mt-3 max-w-xl text-base font-semibold text-[#2E4057]">
                See who did what, when it happened, and where tasks are stalling before they become operational or audit problems.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a
                  href="#request-demo"
                  className="inline-flex items-center justify-center rounded-2xl bg-black px-8 py-4 text-lg font-bold text-white transition hover:opacity-90"
                >
                  Book a Demo
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <img
                  src="/hipaa-compliant-badge.png"
                  alt="HIPAA Compliant"
                  className="h-14 w-auto object-contain sm:h-16"
                />
                <img
                  src="/pcc-marketplace-partner.png"
                  alt="PointClickCare Marketplace Partner"
                  className="h-14 w-auto object-contain rounded-lg sm:h-16"
                />
              </div>
        </div>
      </div>
    </section>
  );
}
