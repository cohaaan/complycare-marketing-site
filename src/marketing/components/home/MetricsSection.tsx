import { metrics, testimonial } from '../../data/content';
import { Reveal } from '../Reveal';
import { SectionIntro } from '../SectionIntro';

const metricSurfaces = ['surface-mint', 'surface-sky', 'surface-peach'];

export function MetricsSection() {
  return (
    <section className="section-pad border-b border-[#E4EDF5] bg-[#F2F6FA]">
      <div className="cc-container">
        <SectionIntro
          eyebrow="Outcomes"
          title="Measured impact across turnover speed, task accountability, and compliance execution"
          description="Facilities use ComplyCare.io to reduce delays, increase ownership clarity, and improve operational follow-through."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {metrics.map((metric, index) => (
            <Reveal key={metric.label}>
              <article className={`${metricSurfaces[index % metricSurfaces.length]} h-full rounded-2xl border border-[#E4EDF5] p-6 shadow-[0_10px_24px_rgba(61,81,102,0.07)]`}>
                <p className="text-sm uppercase tracking-[0.18em] text-[#8FA3B5]">{metric.label}</p>
                <p className="mt-2 font-display text-5xl font-semibold text-[#2E4057]">{metric.value}</p>
                <p className="mt-4 text-sm leading-relaxed text-[#4E6478]">{metric.snippet}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <blockquote className="surface-lilac rounded-3xl border border-[#E3DDF9] p-8 shadow-[0_10px_24px_rgba(61,81,102,0.06)]">
            <p className="text-xl leading-relaxed text-[#2E4057]">“{testimonial.quote}”</p>
            <footer className="mt-5 text-sm text-[#4E6478]">
              {testimonial.name}, {testimonial.title}, {testimonial.organization}
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
