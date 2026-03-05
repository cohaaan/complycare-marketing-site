import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cx } from '../../utils/cx';
import { ProductCanvas, type ProductVisual } from '../ProductCanvas';
import { SectionIntro } from '../SectionIntro';

type StoryPanel = {
  id: string;
  tag: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaTo: string;
  visual: ProductVisual;
  toneClass: string;
  borderClass: string;
};

const storyPanels: StoryPanel[] = [
  {
    id: 'admissions-intake',
    tag: 'Admissions intelligence',
    title: 'Move referrals from intake to placement with less back-and-forth.',
    description:
      'Route each referral through one guided process with real-time readiness, packet status, and owner accountability visible to every team.',
    ctaLabel: 'See admissions workflow',
    ctaTo: '/platform',
    visual: 'dashboard',
    toneClass: 'surface-pistachio',
    borderClass: 'border-[#CFE3C2]',
  },
  {
    id: 'mobile-floor',
    tag: 'Web + mobile execution',
    title: 'Give floor teams real-time tasks while leadership keeps live oversight.',
    description:
      'Desktop command center and mobile execution run on the same system, so bed status, signatures, and handoffs stay current without sync lag.',
    ctaLabel: 'Explore platform',
    ctaTo: '/solutions/post-acute',
    visual: 'floor',
    toneClass: 'surface-lemon',
    borderClass: 'border-[#E8DDA7]',
  },
  {
    id: 'audit-ready',
    tag: 'Audit defensibility',
    title: 'Turn every workflow event into defensible compliance evidence.',
    description:
      'Immutable logs, secure signatures, and export-ready records reduce scramble before surveys, payer audits, and legal requests.',
    ctaLabel: 'View security center',
    ctaTo: '/security',
    visual: 'alerts',
    toneClass: 'surface-rose',
    borderClass: 'border-[#F2CDD5]',
  },
];

export function StorybookPanelsSection() {
  return (
    <section className="section-pad border-b border-[#E4EDF5] bg-[#F2F6FA]">
      <div className="cc-container">
        <SectionIntro
          eyebrow="How teams use ComplyCare.ai"
          title="High-contrast workflows built for speed, clarity, and trust"
          description="Inspired by premium consumer storytelling patterns but tailored for enterprise healthcare decision-makers."
        />

        <div className="mt-10 grid gap-6 lg:gap-8">
          {storyPanels.map((panel, index) => (
            <article key={panel.id} className={cx('overflow-hidden rounded-[2rem] border bg-white shadow-[0_18px_46px_rgba(46,64,87,0.1)]', panel.borderClass)}>
              <div className={cx('grid lg:grid-cols-2', index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : '')}>
                <div className={cx('min-h-[320px] p-4 sm:min-h-[360px] sm:p-5 lg:min-h-[460px] lg:p-6', panel.toneClass)}>
                  <ProductCanvas
                    variant={panel.visual}
                    className="h-full min-h-[280px] w-full sm:min-h-[320px] lg:min-h-[412px] shadow-[0_18px_40px_rgba(46,64,87,0.22)]"
                  />
                </div>

                <div className={cx('px-7 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12', panel.toneClass)}>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4E6478]">{panel.tag}</p>
                  <h3 className="mt-3 max-w-2xl font-display text-4xl font-semibold leading-[1.05] text-black sm:text-[2.9rem]">
                    {panel.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#2E4057]">{panel.description}</p>

                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <Link
                      to={panel.ctaTo}
                      className="inline-flex items-center justify-center rounded-2xl bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1F2937]"
                    >
                      {panel.ctaLabel}
                    </Link>
                    <Link
                      to={panel.ctaTo}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-black underline decoration-2 underline-offset-4"
                    >
                      Learn more
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
