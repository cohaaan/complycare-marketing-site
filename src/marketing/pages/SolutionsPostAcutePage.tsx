import { CTAButton } from '../components/CTAButton';
import { PageMeta } from '../components/PageMeta';
import { ProductCanvas } from '../components/ProductCanvas';
import { Reveal } from '../components/Reveal';
import { SectionIntro } from '../components/SectionIntro';
import { SiteShell } from '../components/SiteShell';
import { outcomes, rolesServed } from '../data/content';

const solutionsHeroImage =
  'https://images.unsplash.com/photo-1734340857628-e6f112d7cad7?auto=format&fit=crop&fm=jpg&q=80&w=2200';

const solutionTracks = [
  {
    title: 'Admissions teams',
    text: 'Accelerate referral decisions with real-time bed readiness, packet completion visibility, and handoff clarity.',
  },
  {
    title: 'Nursing leadership',
    text: 'Coordinate placement, monitor resident movement context, and keep documentation complete across shifts.',
  },
  {
    title: 'Compliance leaders',
    text: 'Maintain immutable audit trails, signature integrity, and policy-aligned evidence exports for reviews.',
  },
  {
    title: 'Operations executives',
    text: 'Track occupancy, utilization, discharge forecasts, and process performance at facility and regional levels.',
  },
];

export function SolutionsPostAcutePage() {
  return (
    <>
      <PageMeta
        title="Post-Acute Solutions"
        description="ComplyCare.io helps post-acute organizations run faster admissions and cleaner compliance workflows with one operating system."
        path="/solutions/post-acute"
      />
      <SiteShell includeFinalCta>
        <section className="section-pad border-b border-[#E4EDF5]">
          <div className="cc-container">
            <SectionIntro
              eyebrow="Solutions for post-acute care"
              title="Built for the operational complexity of skilled nursing and transitional care"
              description="ComplyCare.io aligns administrators, admissions, nursing, compliance, and floor teams on one live platform for speed and defensibility."
            />

            <div className="mt-8 flex flex-wrap gap-2">
              {rolesServed.map((role) => (
                <span key={role} className="rounded-full border border-[#E4EDF5] bg-white px-3 py-1 text-xs font-semibold text-[#4E6478]">
                  {role}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="overflow-hidden rounded-2xl border border-[#E4EDF5] bg-white shadow-[0_12px_30px_rgba(46,64,87,0.1)]">
                <img
                  src={solutionsHeroImage}
                  alt="Nurse reviewing post-acute intake information with a resident"
                  className="h-[240px] w-full object-cover sm:h-[280px]"
                  loading="lazy"
                />
              </div>
              <ProductCanvas variant="floor" />
              <ProductCanvas variant="documents" className="md:col-span-2" />
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

        <section className="section-pad border-b border-[#E4EDF5] bg-[#F2F6FA]">
          <div className="cc-container">
            <SectionIntro
              eyebrow="Expected outcomes"
              title="Operational speed without compliance compromise"
              description="Teams deploying ComplyCare.io improve throughput and reduce risk through workflow standardization and live accountability."
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
              <CTAButton to="/contact">Book post-acute demo</CTAButton>
            </div>
          </div>
        </section>
      </SiteShell>
    </>
  );
}
