import { CTAButton } from '../components/CTAButton';
import { PageMeta } from '../components/PageMeta';
import { ProductCanvas } from '../components/ProductCanvas';
import { SectionIntro } from '../components/SectionIntro';
import { SiteShell } from '../components/SiteShell';
import { outcomes, rolesServed } from '../data/content';
import { Reveal } from '../components/Reveal';
import { FAQAccordion } from '../components/FAQAccordion';

const solutionTracks = [
  {
    title: 'Automated Compliance Workflows',
    text: 'Replace manual trackers with scheduled logic. Push required checks to maintenance, EVS, and clinical teams automatically.',
  },
  {
    title: 'Survey Readiness Evidence',
    text: 'Every log, grievance resolution, and signature is securely timestamped, providing instant proof for state and CMS surveyors.',
  },
  {
    title: 'Discharge & Admissions Orchestration',
    text: 'Operations is compliance. Ensure bed-ready tracking and admission packet completion hit regulatory SLAs.',
  },
  {
    title: 'Proactive Intelligence',
    text: 'Get alerts on payer mix, Medicare-days-left, and recurring operational gaps before they become reportable incidents.',
  },
];

const complianceFaqs = [
  {
    question: "What is the difference between ComplyCare and a traditional compliance binder?",
    answer: "Unlike static binders or document storage, ComplyCare routes tasks automatically to the responsible staff member and captures a timestamped signature the moment the work is completed, creating an immutable audit log."
  },
  {
    question: "Can we track recurring maintenance and EVS tasks?",
    answer: "Yes. You can pre-schedule deep cleans, generator checks, and other recurring requirements. Staff receive notifications on their mobile devices when tasks are due."
  },
  {
    question: "Does the platform help with CMS survey readiness?",
    answer: "Absolutely. ComplyCare creates organized, easily exportable evidence logs for surveyors showing exactly who completed each daily, weekly, or monthly compliance task and when."
  }
];

export function NursingHomeComplianceSoftwarePage() {
  return (
    <>
      <PageMeta
        title="Nursing Home Compliance Software"
        description="ComplyCare.io is the AI-powered nursing home compliance software that replaces spreadsheets with live operational accountability."
        path="/solutions/nursing-home-compliance-software"
      />
      <SiteShell includeFinalCta>
        <section className="section-pad border-b border-[#E4EDF5]">
          <div className="cc-container">
            <SectionIntro
              eyebrow="Nursing Home Compliance Software"
              title="Stop chasing binders. Start driving accountability."
              description="Most compliance software is just a document vault. ComplyCare is an operational engine that ensures your nursing home staff actually completes the required tasks, on time, with defensible proof."
            />

            <div className="mt-8 flex flex-wrap gap-2">
              {rolesServed.map((role) => (
                <span key={role} className="rounded-full border border-[#E4EDF5] bg-white px-3 py-1 text-xs font-semibold text-[#4E6478]">
                  {role}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <ProductCanvas variant="floor" className="md:col-span-1" />
              <ProductCanvas variant="alerts" className="md:col-span-1" />
            </div>
          </div>
        </section>

        <section className="section-pad border-b border-[#E4EDF5] bg-[#F2F6FA]">
          <div className="cc-container grid gap-5 sm:grid-cols-2">
            {solutionTracks.map((track) => (
              <Reveal key={track.title}>
                <article className="h-full rounded-2xl border border-[#E4EDF5] bg-white p-6">
                  <h2 className="font-display text-2xl font-semibold text-[#2E4057]">{track.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#4E6478]">{track.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section-pad border-b border-[#E4EDF5] bg-white">
          <div className="cc-container">
            <FAQAccordion faqs={complianceFaqs} headline="Nursing Home Compliance FAQs" />
          </div>
        </section>

        <section className="section-pad border-b border-[#E4EDF5] bg-[#F2F6FA]">
          <div className="cc-container">
            <SectionIntro
              eyebrow="Outcomes"
              title="Why SNFs choose ComplyCare"
              description="Move away from the status quo of paper logs and frantic survey prep."
            />
            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {outcomes.map((outcome) => (
                <article key={outcome.title} className="rounded-2xl border border-[#5BBFA0]/40 bg-[#EAF7F2] p-5">
                  <h3 className="font-display text-xl font-semibold text-[#2E4057]">{outcome.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#4E6478]">{outcome.text}</p>
                </article>
              ))}
            </div>
            <div className="mt-8">
              <CTAButton to="/contact">Get a Demo</CTAButton>
            </div>
          </div>
        </section>
      </SiteShell>
    </>
  );
}
