import { ArrowRight } from 'lucide-react';
import { workflowSteps } from '../../data/content';
import { CTAButton } from '../CTAButton';
import { ProductCanvas } from '../ProductCanvas';
import { Reveal } from '../Reveal';
import { SectionIntro } from '../SectionIntro';

export function WorkflowSection() {
  return (
    <section className="section-pad border-b border-[#E4EDF5] bg-white">
      <div className="cc-container">
        <SectionIntro
          eyebrow="Single source of truth"
          title="Admit to audit proof in one connected workflow"
          description="Web and mobile teams execute against the same live system, eliminating sync delays and duplicated entry."
        />

        <Reveal className="mt-10">
          <div className="card-premium p-6 sm:p-8">
            <ol className="grid gap-4 md:grid-cols-5">
              {workflowSteps.map((step, index) => (
                <li key={step} className="surface-sky flex items-center gap-3 rounded-xl border border-[#E4EDF5] px-4 py-3 text-sm font-semibold text-[#2E4057]">
                  <span className="inline-flex h-7 w-7 flex-none items-center justify-center rounded-full border border-[#C2E8D8] bg-[#EAF7F2] text-xs text-[#3DA882]">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                  {index < workflowSteps.length - 1 ? <ArrowRight size={14} className="ml-auto hidden text-[#8FA3B5] md:block" /> : null}
                </li>
              ))}
            </ol>

            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              <ProductCanvas variant="floor" />
              <ProductCanvas variant="documents" />
            </div>
          </div>
        </Reveal>

        <div className="mt-8">
          <CTAButton to="/platform" variant="secondary">
            Explore Platform
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
