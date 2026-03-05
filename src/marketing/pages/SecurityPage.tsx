import { CTAButton } from '../components/CTAButton';
import { PageMeta } from '../components/PageMeta';
import { ProductCanvas } from '../components/ProductCanvas';
import { Reveal } from '../components/Reveal';
import { SectionIntro } from '../components/SectionIntro';
import { SiteShell } from '../components/SiteShell';
import { securityModules } from '../data/content';

const securityPhoto =
  'https://images.unsplash.com/photo-1765896387387-0538bc9f997e?auto=format&fit=crop&fm=jpg&q=80&w=2200';

const controlAreas = [
  {
    title: 'Identity and access governance',
    text: 'Role-based authorization patterns with scoped access by facility and workflow responsibility.',
  },
  {
    title: 'Data protection lifecycle',
    text: 'Encryption in transit and at rest, controlled retention windows, and policy-aligned export paths.',
  },
  {
    title: 'Monitoring and response',
    text: 'Event visibility and operational alerting to support incident triage and remediation workflows.',
  },
  {
    title: 'Compliance evidence readiness',
    text: 'Structured logs, signature lineage, and auditable records to support reviews and legal requests.',
  },
];

export function SecurityPage() {
  return (
    <>
      <PageMeta
        title="Security"
        description="Review ComplyCare.io security posture, HIPAA-ready controls, SOC 2 program status, and enterprise governance modules."
        path="/security"
      />
      <SiteShell includeFinalCta>
        <section className="section-pad border-b border-[#E4EDF5]">
          <div className="cc-container">
            <SectionIntro
              eyebrow="Security center"
              title="Healthcare-grade controls for enterprise operators"
              description="ComplyCare.io is built with HIPAA-ready controls and a SOC 2-oriented control framework to support post-acute compliance requirements."
            />

            <div className="mt-8 flex flex-wrap gap-2">
              <span className="rounded-full border border-[#5BBFA0]/40 bg-[#EAF7F2] px-3 py-1 text-xs font-semibold text-[#3DA882]">
                HIPAA-ready posture
              </span>
              <span className="rounded-full border border-[#5BBFA0]/40 bg-[#EAF7F2] px-3 py-1 text-xs font-semibold text-[#3DA882]">
                SOC 2 Type II roadmap active
              </span>
              <span className="rounded-full border border-[#5BBFA0]/40 bg-[#EAF7F2] px-3 py-1 text-xs font-semibold text-[#3DA882]">
                Security package under NDA
              </span>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-[1.05fr_1.3fr]">
              <div className="overflow-hidden rounded-2xl border border-[#E4EDF5] bg-white shadow-[0_12px_30px_rgba(46,64,87,0.1)]">
                <img
                  src={securityPhoto}
                  alt="Clinical team member coordinating secure documentation at bedside"
                  className="h-[240px] w-full object-cover sm:h-[280px]"
                  loading="lazy"
                />
              </div>
              <ProductCanvas variant="alerts" />
            </div>
          </div>
        </section>

        <section className="section-pad border-b border-[#E4EDF5] bg-[#F2F6FA]">
          <div className="cc-container grid gap-4 sm:grid-cols-2">
            {securityModules.map((module) => (
              <Reveal key={module.title}>
                <article className="h-full rounded-2xl border border-[#E4EDF5] bg-white p-6">
                  <h2 className="font-display text-2xl font-semibold text-[#2E4057]">{module.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#4E6478]">{module.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section-pad border-b border-[#E4EDF5] bg-[#F2F6FA]">
          <div className="cc-container">
            <SectionIntro
              eyebrow="Control domains"
              title="Security architecture aligned to enterprise review expectations"
              description="Operational and technical controls are mapped to core risk areas commonly assessed by healthcare IT and compliance stakeholders."
            />

            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {controlAreas.map((area) => (
                <article key={area.title} className="rounded-2xl border border-[#E4EDF5] bg-white p-5">
                  <h3 className="font-display text-xl font-semibold text-[#2E4057]">{area.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#4E6478]">{area.text}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton to="/contact">Request security package</CTAButton>
              <CTAButton to="/contact" variant="secondary">
                Talk to compliance team
              </CTAButton>
            </div>
          </div>
        </section>
      </SiteShell>
    </>
  );
}
