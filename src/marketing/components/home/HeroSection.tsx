import { CTAButton } from '../CTAButton';

export function HeroSection() {
  return (
    <section className="relative z-0 pb-10 pt-10 sm:pb-12 sm:pt-12">
      <div className="cc-container">
        <div className="flex flex-col items-center px-7 py-8 text-center sm:px-10 sm:py-9 lg:px-14 lg:py-10">
              <div className="relative inline-flex">
                <img
                  src="/complycare-logo.svg"
                  alt="ComplyCare.io"
                  className="h-16 w-auto object-contain bg-transparent brightness-110 contrast-110 sm:h-24 lg:h-28"
                />
                <div className="absolute -top-1 -right-1 -translate-x-4">
                  <img
                    src="/complycare-badge.svg"
                    alt=""
                    aria-hidden={true}
                    className="h-5 w-5 drop-shadow-sm badge-float sm:h-7 sm:w-7 lg:h-8 lg:w-8"
                  />
                </div>
              </div>
              <h1 className="mt-2 max-w-2xl font-display text-3xl font-extrabold leading-[1.05] text-black sm:text-4xl lg:text-[3.25rem]">
                Accountability That Runs the Facility
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-snug text-[#2E4057] sm:text-xl sm:leading-relaxed">
                AI-powered operating system for role accountability from discharge to bed-ready and recurring compliance.
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-3 sm:mt-8">
                <CTAButton to="/#request-demo" size="lg">
                  Book a Demo
                </CTAButton>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:mt-6 sm:gap-4">
                <img
                  src="/hipaa-compliant-badge.png"
                  alt="HIPAA Compliant"
                  className="h-11 w-auto object-contain sm:h-14"
                />
                <img
                  src="/pcc-marketplace-partner.png"
                  alt="PointClickCare Marketplace Partner"
                  className="h-11 w-auto object-contain rounded-lg sm:h-14"
                />
              </div>
        </div>
      </div>
    </section>
  );
}
