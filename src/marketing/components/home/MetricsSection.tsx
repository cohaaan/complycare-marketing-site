import { Link } from 'react-router-dom';
import { metrics, testimonial } from '../../data/content';
import { CTAButton } from '../CTAButton';
import { Reveal } from '../Reveal';
import { SectionIntro } from '../SectionIntro';

export function MetricsSection() {
  return (
    <section className="section-pad -mt-px bg-[#2E4057]">
      <div className="cc-container">
        <SectionIntro
          tone="dark"
          eyebrow="Outcomes"
          title="Measured impact across turnover speed, task accountability, and compliance execution"
          description="Facilities use ComplyCare.io to reduce delays, increase ownership clarity, and improve operational follow-through."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {metrics.map((metric) => (
            <Reveal key={metric.label}>
              <article className="h-full rounded-2xl border border-white/15 bg-white/10 p-6 shadow-[0_10px_32px_rgba(0,0,0,0.2)] backdrop-blur-sm">
                <p className="text-sm uppercase tracking-[0.18em] text-[#B8C5D4]">{metric.label}</p>
                <p className="mt-2 font-display text-5xl font-semibold text-white sm:text-6xl">{metric.value}</p>
                <p className="mt-4 text-sm leading-relaxed text-[#D1DCE8]">{metric.snippet}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <blockquote className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-[0_10px_32px_rgba(0,0,0,0.15)] backdrop-blur-sm">
            <p className="text-xl leading-relaxed text-white">“{testimonial.quote}”</p>
            <footer className="mt-5 text-sm text-[#B8C5D4]">
              {testimonial.name}, {testimonial.title}, {testimonial.organization}
            </footer>
          </blockquote>
        </Reveal>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 border-t border-white/15 pt-10 sm:flex-row sm:flex-wrap sm:gap-6">
          <p className="max-w-md text-center text-sm leading-relaxed text-[#D1DCE8] sm:text-left">
            See how ComplyCare keeps admission workflows and documentation aligned before survey week.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center">
            <CTAButton to="/#request-demo" variant="secondary" className="shrink-0 border-white/40 bg-white text-[#2E4057] hover:bg-white/90">
              Book a demo
            </CTAButton>
            <Link
              to="/resources"
              className="shrink-0 text-sm font-semibold text-white/95 underline-offset-2 hover:text-white hover:underline"
            >
              Browse resources
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
