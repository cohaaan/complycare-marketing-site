import { Check } from 'lucide-react';
import { CTAButton } from '../components/CTAButton';
import { PageMeta } from '../components/PageMeta';
import { SectionIntro } from '../components/SectionIntro';
import { SiteShell } from '../components/SiteShell';

const plans = [
  {
    name: 'Growth Facilities',
    description: 'For single-site operators scaling admissions and compliance operations.',
    features: ['Core admissions workflows', 'Bed and census command views', 'Secure signatures and evidence logs'],
  },
  {
    name: 'Enterprise Multi-Site',
    description: 'For regional groups requiring centralized oversight and governance controls.',
    features: ['Multi-facility intelligence', 'Executive analytics and forecasting', 'Advanced compliance reporting'],
  },
  {
    name: 'Strategic Health System',
    description: 'For system-level deployments with integration and security review requirements.',
    features: ['Integration planning support', 'Security package and control mapping', 'Dedicated rollout and enablement program'],
  },
];

export function PricingPage() {
  return (
    <>
      <PageMeta
        title="Pricing"
        description="ComplyCare.ai pricing is tailored by facility footprint, workflow complexity, and deployment scope."
        path="/pricing"
      />
      <SiteShell>
        <section className="section-pad border-b border-[#E4EDF5]">
          <div className="cc-container">
            <SectionIntro
              eyebrow="Pricing"
              title="Enterprise pricing aligned to operational footprint"
              description="ComplyCare.ai pricing is scoped by facility count, workflow modules, integration needs, and implementation support."
            />

            <div className="mt-8 rounded-2xl border border-[#5BBFA0]/40 bg-[#EAF7F2] p-6 text-sm text-[#4E6478]">
              Final pricing is shared through sales to ensure deployment scope and security requirements are correctly mapped.
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {plans.map((plan) => (
                <article key={plan.name} className="rounded-2xl border border-[#E4EDF5] bg-white p-6">
                  <h2 className="font-display text-2xl font-semibold text-[#2E4057]">{plan.name}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#4E6478]">{plan.description}</p>
                  <ul className="mt-5 grid gap-2 text-sm text-[#4E6478]">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check size={16} className="mt-0.5 text-[#3DA882]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton to="/contact">Get pricing</CTAButton>
              <CTAButton to="/contact" variant="secondary">
                Talk to sales
              </CTAButton>
            </div>
          </div>
        </section>
      </SiteShell>
    </>
  );
}
