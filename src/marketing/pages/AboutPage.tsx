import { CTAButton } from '../components/CTAButton';
import { PageMeta } from '../components/PageMeta';
import { Reveal } from '../components/Reveal';
import { SectionIntro } from '../components/SectionIntro';
import { SiteShell } from '../components/SiteShell';
import { companyValues } from '../data/content';

const milestones = [
  {
    year: '2023',
    text: 'ComplyCare.ai founded to address fragmented post-acute compliance and operations workflows.',
  },
  {
    year: '2024',
    text: 'Launched unified desktop and mobile operating model with real-time data sync architecture.',
  },
  {
    year: '2025',
    text: 'Expanded to multi-facility groups with compliance dashboarding and audit export automation.',
  },
  {
    year: '2026',
    text: 'Scaling enterprise partnerships for regional post-acute operators and health system networks.',
  },
];

export function AboutPage() {
  return (
    <>
      <PageMeta
        title="About"
        description="Learn about ComplyCare.ai mission, values, and team focus on compliance and operations intelligence in post-acute care."
        path="/about"
      />
      <SiteShell includeFinalCta>
        <section className="section-pad border-b border-[#E4EDF5]">
          <div className="cc-container">
            <SectionIntro
              eyebrow="About ComplyCare.ai"
              title="Building the operating system for post-acute care operations and compliance"
              description="We help care organizations move faster and stay audit-ready by replacing siloed tools with one live platform for oversight and execution."
            />
          </div>
        </section>

        <section className="section-pad border-b border-[#E4EDF5] bg-[#F2F6FA]">
          <div className="cc-container grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {companyValues.map((value) => (
              <Reveal key={value.title}>
                <article className="h-full rounded-2xl border border-[#E4EDF5] bg-white p-6">
                  <h2 className="font-display text-2xl font-semibold text-[#2E4057]">{value.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#4E6478]">{value.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section-pad border-b border-[#E4EDF5] bg-[#F2F6FA]">
          <div className="cc-container">
            <SectionIntro
              eyebrow="Company trajectory"
              title="Focused growth with enterprise discipline"
              description="We partner closely with operators, compliance leaders, and clinical teams to design workflows that scale with facility complexity."
            />

            <ol className="mt-8 grid gap-4">
              {milestones.map((milestone) => (
                <li key={milestone.year} className="rounded-2xl border border-[#E4EDF5] bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8FA3B5]">{milestone.year}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#4E6478]">{milestone.text}</p>
                </li>
              ))}
            </ol>

            <div className="mt-8">
              <CTAButton to="/contact">Meet the team</CTAButton>
            </div>
          </div>
        </section>
      </SiteShell>
    </>
  );
}
