import { CTAButton } from '../components/CTAButton';
import { PageMeta } from '../components/PageMeta';
import { ProductCanvas } from '../components/ProductCanvas';
import { SectionIntro } from '../components/SectionIntro';
import { SiteShell } from '../components/SiteShell';
import { Reveal } from '../components/Reveal';
import { FAQAccordion } from '../components/FAQAccordion';

const solutionTracks = [
  {
    title: 'Referral to Signature Tracking',
    text: 'See exactly who owns the admission packet at any given moment. Stop losing paper forms during shift changes.',
  },
  {
    title: 'PointClickCare Integrated',
    text: 'Built to live alongside EHRs like PointClickCare. We handle the routing and signature follow-up without duplicating entry.',
  },
  {
    title: 'CMS F-Tag Defensibility',
    text: 'Surveyors look closely at admission agreements. Prove every resident and family member signed the exact required disclosures with timestamped perfection.',
  },
  {
    title: 'Native Mobile Execution',
    text: 'Capture signatures on a tablet right at the bedside. The data syncs instantly to the command center.',
  },
];

const admissionFaqs = [
  {
    question: "How does ComplyCare track SNF admission signatures?",
    answer: "ComplyCare tracks the entire admission packet lifecycle from initial referral to final signature. You can view a dashboard showing exactly which signatures are missing and who owns the follow-up."
  },
  {
    question: "Does it integrate with PointClickCare?",
    answer: "Yes. ComplyCare features deep integration with PointClickCare, allowing you to sync census data and maintain workflow continuity without duplicate data entry."
  },
  {
    question: "Can families sign admission agreements digitally?",
    answer: "Yes. Our native mobile and web interfaces allow for secure e-signatures at the bedside or remotely, ensuring zero paper gaps."
  }
];

export function SnfAdmissionAgreementCompliancePage() {
  return (
    <>
      <PageMeta
        title="SNF Admission Agreement Compliance Software"
        description="Ensure SNF admission agreement compliance with automated eSign tracking, mobile capture, and clear accountability."
        path="/solutions/snf-admission-agreement-compliance"
      />
      <SiteShell includeFinalCta>
        <section className="section-pad border-b border-[#E4EDF5]">
          <div className="cc-container">
            <SectionIntro
              eyebrow="SNF Admission Agreement Compliance"
              title="Paperless, Defensible SNF Admissions"
              description="Forget about missing signatures and compliance blind spots. ComplyCare tracks every admission packet from referral to final e-signature with role-based accountability."
            />

            <div className="mt-8 grid gap-4 md:grid-cols-1">
              <ProductCanvas variant="documents" className="md:col-span-1" />
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
            <FAQAccordion faqs={admissionFaqs} headline="SNF Admission Agreement FAQs" />
          </div>
        </section>

        <section className="section-pad border-b border-[#E4EDF5] bg-[#F2F6FA]">
          <div className="cc-container text-center">
            <h2 className="font-display text-3xl font-semibold text-[#2E4057]">Stop failing admission agreement surveys.</h2>
            <p className="mt-4 text-lg text-[#4E6478]">Get the operational layer your EHR is missing.</p>
            <div className="mt-8">
              <CTAButton to="/contact">See it in action</CTAButton>
            </div>
          </div>
        </section>
      </SiteShell>
    </>
  );
}
