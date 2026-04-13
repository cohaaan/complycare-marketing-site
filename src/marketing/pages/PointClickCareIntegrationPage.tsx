import { ArrowRight, CheckCircle2, FileSignature, MonitorSmartphone, Share2 } from 'lucide-react';
import { CTAButton } from '../components/CTAButton';
import { PageMeta } from '../components/PageMeta';
import { Reveal } from '../components/Reveal';
import { SectionIntro } from '../components/SectionIntro';
import { SiteShell } from '../components/SiteShell';
import { ProductCanvas } from '../components/ProductCanvas';

export function PointClickCareIntegrationPage() {
  return (
    <>
      <PageMeta
        title="PointClickCare eSign Admissions & Integration | ComplyCare"
        description="Streamline nursing home admissions with ComplyCare's eSign agreements that automatically sync demographic and bed data directly to PointClickCare."
        path="/solutions/pointclickcare-esign-admissions"
      />
      <SiteShell includeFinalCta>
        <section className="section-pad border-b border-[#E4EDF5]">
          <div className="cc-container">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#3DA882]">
                PCC Marketplace Partner
              </p>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-[#2E4057] sm:text-5xl md:text-6xl">
                eSign Admissions Agreements &amp; PointClickCare Sync
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#4E6478]">
                Stop chasing paper packets and duplicate data entry. ComplyCare allows families to securely e-sign nursing home admission agreements while automatically pushing the completed files and resident status directly into PointClickCare.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <CTAButton to="/contact">Request Integration Demo</CTAButton>
                <CTAButton to="/videos" variant="secondary">
                  Watch e-Sign Walkthrough
                </CTAButton>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad border-b border-[#E4EDF5] bg-[#F2F6FA]">
          <div className="cc-container">
            <SectionIntro
              eyebrow="The Workflow"
              title="How the PointClickCare e-Sign Integration Works"
              description="A deeply unified workflow specifically engineered for post-acute intake teams who cannot afford delays."
            />

            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              <Reveal>
                <article className="h-full rounded-3xl border border-[#E4EDF5] bg-white p-8 shadow-[0_8px_24px_rgba(46,64,87,0.06)]">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF7F2] text-[#3DA882]">
                    <FileSignature size={24} />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-[#2E4057]">1. Automated eSign Packets</h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#4E6478]">
                    Generate highly customized, facility-specific admission agreements in seconds. Send secure, HIPAA-compliant e-signature links directly to the resident or guarantor's mobile device or email.
                  </p>
                </article>
              </Reveal>

              <Reveal>
                <article className="h-full rounded-3xl border border-[#E4EDF5] bg-white p-8 shadow-[0_8px_24px_rgba(46,64,87,0.06)]">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#EDF4FB] text-[#4A90E2]">
                    <Share2 size={24} />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-[#2E4057]">2. Real-Time Status Tracking</h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#4E6478]">
                    Nobody has to ask "is the packet signed yet?" The ComplyCare admissions dashboard updates in real-time, alerting the intake coordinator and nursing staff the moment the agreement is finalized.
                  </p>
                </article>
              </Reveal>

              <Reveal>
                <article className="h-full rounded-3xl border border-[#E4EDF5] bg-white p-8 shadow-[0_8px_24px_rgba(46,64,87,0.06)]">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#FDF0EB] text-[#F26D21]">
                    <MonitorSmartphone size={24} />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-[#2E4057]">3. Direct Push to PCC</h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#4E6478]">
                    Once executed, the finalized PDF and synchronized resident demographic data are pushed directly into the patient's chart in PointClickCare. Zero manual scanning. Zero transcription errors.
                  </p>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section-pad border-b border-[#E4EDF5] bg-white">
          <div className="cc-container">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="font-display text-3xl font-semibold leading-tight text-[#2E4057] sm:text-4xl">
                  Eliminate duplicate data entry across your post-acute admissions floor.
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-[#4E6478]">
                  Admitting a patient involves nursing, environmental services, and the business office. When your e-sign admission agreements sync directly with your system of record, your whole building operates on one unified clock.
                </p>
                
                <ul className="mt-8 grid gap-4">
                  {[
                    'Instant Census Synchronization with PointClickCare',
                    'Dramatically reduces turnaround time for hospital referrers',
                    'Maintains survey-ready document audit trails',
                    'Captures digital signatures on mobile and desktop',
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-[#3DA882]" size={20} />
                      <span className="text-[#4E6478]">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-[#E4EDF5] bg-[#F2F6FA] p-6 sm:p-10 shadow-sm relative overflow-hidden">
                <ProductCanvas variant="census" />
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad border-b border-[#E4EDF5] bg-[#2E4057] text-white">
          <div className="cc-container text-center">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              Ready to automate your admission agreements?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[#8FA3B5]">
              Let us show you exactly how our PointClickCare integration saves facilities hundreds of hours every single month while remaining completely compliant.
            </p>
            <div className="mt-10">
              <CTAButton
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#3DA882] text-white hover:bg-white hover:text-[#2E4057]"
              >
                Schedule a integration tour
                <ArrowRight size={18} />
              </CTAButton>
            </div>
          </div>
        </section>
      </SiteShell>
    </>
  );
}
