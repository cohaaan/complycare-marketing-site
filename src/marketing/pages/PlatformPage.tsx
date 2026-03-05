import { ArrowUpRight, MessageSquareText, Monitor, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CTAButton } from '../components/CTAButton';
import { PageMeta } from '../components/PageMeta';
import { ProductCanvas } from '../components/ProductCanvas';
import { ProductMockup } from '../components/ProductMockup';
import { Reveal } from '../components/Reveal';
import { SectionIntro } from '../components/SectionIntro';
import { SiteShell } from '../components/SiteShell';
import { platformCapabilities } from '../data/content';

const platformHeroImage =
  'https://images.unsplash.com/photo-1731515136376-3f6148af73cf?auto=format&fit=crop&fm=jpg&q=80&w=2200';

const assistantPrompts = [
  {
    audience: 'Compliance Officers',
    prompt: 'What is out of compliance right now?',
    output: 'Returns overdue tasks, missing signatures, and owners with unresolved compliance items.',
  },
  {
    audience: 'Nursing Leadership',
    prompt: 'Which people or units are below standard this week?',
    output: 'Surfaces unit-level and owner-level gaps versus required completion targets.',
  },
  {
    audience: 'Executive Operators',
    prompt: 'What is at risk before our next survey?',
    output: 'Highlights highest-risk compliance gaps with the teams and facilities that need intervention first.',
  },
  {
    audience: 'Regional Operators',
    prompt: 'Where is accountability slipping across facilities?',
    output: 'Summarizes cross-facility variance, recurring owner gaps, and where escalation is needed.',
  },
];

export function PlatformPage() {
  return (
    <>
      <PageMeta
        title="Platform"
        description="Explore the ComplyCare.ai platform: desktop command center plus mobile execution for post-acute operations and compliance."
        path="/platform"
      />
      <SiteShell includeFinalCta>
        <section className="section-pad border-b border-[#E4EDF5]">
          <div className="cc-container">
            <div className="grid grid-cols-12 gap-8 lg:items-center">
              <div className="col-span-12 lg:col-span-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#4E6478]">Platform Overview</p>
                <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-[#2E4057] sm:text-5xl">
                  One platform. Two execution surfaces. Zero data silos.
                </h1>
                <p className="mt-5 text-lg leading-relaxed text-[#4E6478]">
                  ComplyCare.ai delivers enterprise oversight on desktop and real-time workflow execution on mobile through one live data model.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <CTAButton to="/contact">See platform</CTAButton>
                  <CTAButton to="/pricing" variant="secondary">
                    Get pricing
                  </CTAButton>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-6">
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-3xl border border-[#E4EDF5] shadow-[0_14px_36px_rgba(46,64,87,0.12)]">
                    <img
                      src={platformHeroImage}
                      alt="Care operations team collaborating in a facility hallway"
                      className="h-[240px] w-full object-cover sm:h-[300px]"
                      loading="lazy"
                    />
                  </div>
                  <ProductMockup />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad border-b border-[#E4EDF5] bg-[#F2F6FA]">
          <div className="cc-container grid gap-6 lg:grid-cols-2">
            <Reveal>
              <article className="h-full rounded-3xl border border-[#E4EDF5] bg-white p-7">
                <div className="flex items-center gap-2 text-[#3DA882]">
                  <Monitor size={18} />
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8FA3B5]">Web Platform</p>
                </div>
                <h2 className="mt-3 font-display text-3xl font-semibold text-[#2E4057]">Desktop Command Center</h2>
                <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-[#4E6478]">
                  {platformCapabilities.web.map((item) => (
                    <li key={item} className="rounded-xl border border-[#E4EDF5] bg-white px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            <Reveal>
              <article className="h-full rounded-3xl border border-[#E4EDF5] bg-white p-7">
                <div className="flex items-center gap-2 text-[#3DA882]">
                  <Smartphone size={18} />
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8FA3B5]">Mobile App</p>
                </div>
                <h2 className="mt-3 font-display text-3xl font-semibold text-[#2E4057]">On-the-Floor Execution</h2>
                <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-[#4E6478]">
                  {platformCapabilities.mobile.map((item) => (
                    <li key={item} className="rounded-xl border border-[#E4EDF5] bg-white px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </section>

        <section className="section-pad border-b border-[#E4EDF5] bg-white">
          <div className="cc-container">
            <SectionIntro
              eyebrow="Conversational intelligence"
              title="Talk to your facility in plain language"
              description="ComplyCare.ai answers compliance and accountability questions instantly, grounded in your live documentation, signatures, and workflow evidence."
            />

            <div className="mt-8 grid gap-5 lg:grid-cols-[1.2fr_1fr]">
              <div className="rounded-3xl border border-[#D9E8F8] bg-[#EDF4FB] p-6 sm:p-7">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C7DAF0] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#4E6478]">
                  <MessageSquareText size={14} />
                  Facility AI Assistant
                </div>
                <div className="grid gap-3">
                  {assistantPrompts.map((item) => (
                    <article key={item.audience} className="rounded-2xl border border-[#D4E3F2] bg-white p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8FA3B5]">{item.audience}</p>
                      <p className="mt-1 text-base font-semibold text-[#2E4057]">“{item.prompt}”</p>
                      <p className="mt-2 text-sm text-[#4E6478]">{item.output}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-[#CFE9DD] bg-[#EAF7F2] p-6">
                <h3 className="font-display text-3xl font-semibold text-[#2E4057]">Built for post-acute accountability</h3>
                <ul className="mt-4 grid gap-3 text-sm leading-relaxed text-[#4E6478]">
                  <li className="rounded-xl border border-[#CFE9DD] bg-white px-4 py-3">
                    AI that understands your data, not a generic chatbot.
                  </li>
                  <li className="rounded-xl border border-[#CFE9DD] bg-white px-4 py-3">
                    Answers tied to signatures, logs, required tasks, and compliance workflows.
                  </li>
                  <li className="rounded-xl border border-[#CFE9DD] bg-white px-4 py-3">
                    Highlights who, what, and where performance is below expected standard.
                  </li>
                </ul>
                <ProductCanvas variant="dashboard" className="mt-5" />
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad border-b border-[#E4EDF5] bg-[#F2F6FA]">
          <div className="cc-container">
            <SectionIntro
              eyebrow="Integration layer"
              title="PointClickCare-connected operations"
              description="Synchronize census-related workflows and operational signals from existing systems while preserving ComplyCare.ai as your execution and compliance source of truth."
            />

            <div className="mt-8 rounded-3xl border border-[#5BBFA0]/40 bg-[#EAF7F2] p-6">
              <p className="text-sm leading-relaxed text-[#4E6478]">
                Integration is designed to reduce re-entry, keep bed and workflow states current, and improve cross-department accountability for admissions and discharge coordination.
              </p>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <ProductCanvas variant="census" />
                <ProductCanvas variant="alerts" />
              </div>
              <Link
                to="/contact"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#3DA882] hover:text-[#4E6478]"
              >
                Request integration details
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      </SiteShell>
    </>
  );
}
