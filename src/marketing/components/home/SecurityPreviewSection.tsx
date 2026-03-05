import { ShieldCheck } from 'lucide-react';
import { securityModules } from '../../data/content';
import { CTAButton } from '../CTAButton';
import { ProductCanvas } from '../ProductCanvas';
import { SectionIntro } from '../SectionIntro';

export function SecurityPreviewSection() {
  return (
    <section className="section-pad border-b border-[#E4EDF5] bg-white">
      <div className="cc-container">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <SectionIntro
              eyebrow="Security and compliance"
              title="Enterprise controls designed for healthcare operating risk"
              description="Built with a HIPAA-ready posture and aligned to SOC 2 control domains for scale-stage healthcare organizations."
            />
            <ProductCanvas variant="alerts" className="mt-6" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {securityModules.map((module, index) => (
              <article
                key={module.title}
                className={`rounded-2xl border border-[#E4EDF5] p-5 ${index % 2 === 0 ? 'surface-sky' : 'surface-mint'}`}
              >
                <div className="flex items-center gap-2 text-[#3DA882]">
                  <ShieldCheck size={16} />
                  <h3 className="font-display text-lg font-semibold text-[#2E4057]">{module.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#4E6478]">{module.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <CTAButton to="/security" variant="secondary">
            View Security Center
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
