import { CTAButton } from '../components/CTAButton';
import { PageMeta } from '../components/PageMeta';
import { ProductCanvas } from '../components/ProductCanvas';
import { SectionIntro } from '../components/SectionIntro';
import { SiteShell } from '../components/SiteShell';
import { Reveal } from '../components/Reveal';
import { FAQAccordion } from '../components/FAQAccordion';

const solutionTracks = [
  {
    title: 'Discharge-Triggered Orchestration',
    text: 'The moment a discharge is logged, identical to when an alarm goes off, EVS, maintenance, and admissions are instantly notified of their sequence.',
  },
  {
    title: 'Drop the Whiteboard',
    text: 'Replace your static hallway whiteboard with a live, interactive floor plan and bed management tool visible to everyone.',
  },
  {
    title: 'Mobile Floor Execution',
    text: 'EVS and nursing do not need a desktop. They single-tap "Clean" or "Ready" on their native mobile app, logging their completion time.',
  },
  {
    title: 'Cut Turnaround By Up To 42%',
    text: 'Facilities replacing phone tag with automated role routing can help cut average discharge-to-ready turnaround times by up to 42%.',
  },
];

const dischargeFaqs = [
  {
    question: "How does automated discharge turnover work in a nursing home?",
    answer: "The moment a discharge is logged, ComplyCare automatically routes sequential tasks to Nursing, EVS, and Maintenance. When EVS finishes cleaning, Maintenance is instantly notified, eliminating hallway phone tag."
  },
  {
    question: "Can I replace my hallway whiteboard with this software?",
    answer: "Yes. We offer an interactive, live floor plan and bed management view that shows real-time bed states (hold, dirty, ready) to everyone from admissions to environmental services."
  },
  {
    question: "How much faster can we turnover beds?",
    answer: "Facilities transitioning from phone tag and manual whiteboards to automated role routing can help cut average discharge-to-ready turnaround times by up to 42%."
  }
];

export function DischargeTurnoverSoftwarePage() {
  return (
    <>
      <PageMeta
        title="Discharge Turnover Software for SNFs"
        description="The operational discharge turnover software designed for skilled nursing facilities. Replace whiteboards and reduce bed delays."
        path="/solutions/discharge-turnover-software"
      />
      <SiteShell includeFinalCta>
        <section className="section-pad border-b border-[#E4EDF5]">
          <div className="cc-container">
            <SectionIntro
              eyebrow="Discharge Turnover Software for SNFs"
              title="Turn beds faster. Eliminate the phone tag."
              description="Beds stay idle because teams operate in silos. ComplyCare routes the next steps to each team in sequence and captures completion natively, getting your beds placement-ready hours sooner."
            />

            <div className="mt-8 grid gap-4 md:grid-cols-1">
              <ProductCanvas variant="floor" className="md:col-span-1" />
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
            <FAQAccordion faqs={dischargeFaqs} headline="Discharge Turnover FAQs" />
          </div>
        </section>

        <section className="section-pad border-b border-[#E4EDF5] bg-[#F2F6FA]">
          <div className="cc-container text-center">
            <h2 className="font-display text-3xl font-semibold text-[#2E4057]">Stop leaving revenue empty.</h2>
            <p className="mt-4 text-lg text-[#4E6478]">Start orchestrating your facility turnarounds.</p>
            <div className="mt-8">
              <CTAButton to="/contact">Request Demo</CTAButton>
            </div>
          </div>
        </section>
      </SiteShell>
    </>
  );
}
