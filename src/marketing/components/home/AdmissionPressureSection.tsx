import { CTAButton } from '../CTAButton';

export function AdmissionPressureSection() {
  return (
    <section
      id="survey-risk"
      className="section-pad -mt-px border-t border-[#F0E6D4] bg-[linear-gradient(180deg,#FFFBF5_0%,#F2F6FA_100%)]"
      aria-labelledby="admission-pressure-heading"
    >
      <div className="cc-container">
        <div className="rounded-3xl border border-[#E8D4B8] bg-white/90 p-6 shadow-[0_12px_36px_rgba(46,64,87,0.08)] sm:p-8 lg:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8B6914]">Survey & enforcement</p>
          <h2
            id="admission-pressure-heading"
            className="mt-2 max-w-3xl font-display text-2xl font-semibold leading-tight text-[#2E4057] sm:text-3xl"
          >
            Incomplete admission agreements are an enforcement multiplier
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#4E6478] sm:text-lg">
            CMS and state surveyors review admission agreements and intake documentation as part of standard surveys. When packets are missing signatures, outdated, or out of compliance, findings do not stay isolated—facilities can receive multiple deficiency citations (F-tags), and states can escalate remedies based on scope and severity.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <CTAButton to="/#request-demo" size="md">
              Book a demo
            </CTAButton>
            <CTAButton to="/platform" variant="secondary" size="md">
              See how ComplyCare closes gaps
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
