import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CTAButton } from '../components/CTAButton';
import { PageMeta } from '../components/PageMeta';
import { Reveal } from '../components/Reveal';
import { SectionIntro } from '../components/SectionIntro';
import { SiteShell } from '../components/SiteShell';
import { resources } from '../data/content';

export function ResourcesPage() {
  return (
    <>
      <PageMeta
        title="Resources"
        description="Browse ComplyCare.ai guides, case studies, and insights for post-acute care operations and compliance teams."
        path="/resources"
      />
      <SiteShell includeFinalCta>
        <section className="section-pad border-b border-[#E4EDF5]">
          <div className="cc-container">
            <SectionIntro
              eyebrow="Resource center"
              title="Guides, case studies, and playbooks for post-acute operators"
              description="Practical content for admissions, compliance, and executive teams driving operational performance in regulated care environments."
            />
          </div>
        </section>

        <section className="section-pad border-b border-[#E4EDF5] bg-[#F2F6FA]">
          <div className="cc-container grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {resources.map((resource) => (
              <Reveal key={resource.title}>
                <article className="h-full rounded-2xl border border-[#E4EDF5] bg-white p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full border border-[#C2E8D8] bg-[#EAF7F2] px-3 py-1 text-xs font-semibold text-[#3DA882]">
                      {resource.type}
                    </span>
                    <span className="text-xs text-[#8FA3B5]">{resource.readTime}</span>
                  </div>
                  <h2 className="mt-4 font-display text-2xl font-semibold text-[#2E4057]">{resource.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#4E6478]">{resource.summary}</p>
                  <Link
                    to={resource.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#3DA882] hover:text-[#4E6478]"
                  >
                    Read now
                    <ArrowUpRight size={14} />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 cc-container">
            <div className="rounded-3xl border border-[#E4EDF5] bg-white p-7 sm:p-9">
              <h3 className="font-display text-3xl font-semibold text-[#2E4057]">Need a specific benchmark or template?</h3>
              <p className="mt-3 max-w-2xl text-sm text-[#4E6478]">
                Request targeted material for your admissions throughput, documentation quality, or audit readiness initiatives.
              </p>
              <div className="mt-6">
                <CTAButton to="/contact" variant="secondary">
                  Request resource
                </CTAButton>
              </div>
            </div>
          </div>
        </section>
      </SiteShell>
    </>
  );
}
