import { metrics, testimonial } from '../../data/content';
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
      </div>
    </section>
  );
}
