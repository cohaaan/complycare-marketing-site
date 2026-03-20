import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cx } from '../../utils/cx';
import { CTAButton } from '../CTAButton';
import { ProductCanvas, type ProductVisual } from '../ProductCanvas';
import { SectionIntro } from '../SectionIntro';
import { FeatureRailSection } from './FeatureRailSection';

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
    visual: 'endOfDayReport',
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
    visual: 'auditReport',
    toneClass: 'surface-rose',
    borderClass: 'border-[#F2CDD5]',
  },
];

export function StorybookPanelsSection() {
  return (
    <section className="section-pad -mt-px bg-[linear-gradient(180deg,rgba(232,242,252,0.28)_0%,rgba(245,251,255,0.12)_min(28vh,14rem),transparent_min(52vh,28rem))]">
      <div className="cc-container">
        <div className="mb-8 flex flex-col items-center justify-center px-6 py-4">
          <div className="w-full max-w-[260px] overflow-hidden sm:max-w-[320px] lg:max-w-[380px]" style={{ aspectRatio: '612/570' }}>
            <img
              src="/healthcare-characters.svg"
              alt="Healthcare professionals collaborating"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <p className="mt-4 mb-16 text-center font-display text-4xl font-semibold leading-tight text-[#2E4057] sm:text-5xl lg:text-7xl">
            Know What&apos;s Done.
            <br />
            Fix What&apos;s Stuck.
          </p>
        </div>
        <SectionIntro
          eyebrow="How teams use ComplyCare.io"
          title="High-contrast workflows built for speed, clarity, and trust"
          description="See how each team stays aligned from intake to audit."
        />

        <FeatureRailSection />

        <div className="mt-10 grid gap-6 lg:gap-8">
          {storyPanels.map((panel, index) => (
            <article key={panel.id} className={cx('overflow-hidden rounded-[2rem] border bg-white shadow-[0_18px_46px_rgba(46,64,87,0.1)]', panel.borderClass)}>
              <div className={cx('grid lg:grid-cols-2', index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : '')}>
                <div className={cx('min-h-[200px] p-4 sm:min-h-[320px] sm:p-5 lg:min-h-[460px] lg:p-6', panel.toneClass)}>
                  <ProductCanvas
                    variant={panel.visual}
                    className="h-full min-h-[180px] w-full sm:min-h-[280px] lg:min-h-[412px] shadow-[0_18px_40px_rgba(46,64,87,0.22)]"
                  />
                </div>

                <div className={cx('px-7 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12', panel.toneClass)}>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4E6478]">{panel.tag}</p>
                  <h3 className="mt-3 max-w-2xl font-display text-2xl font-semibold leading-[1.1] text-black sm:text-3xl lg:text-4xl lg:leading-[1.05]">
                    {panel.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#2E4057]">{panel.description}</p>

                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <CTAButton to={panel.ctaTo} className="px-6 py-3">
                      {panel.ctaLabel}
                    </CTAButton>
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
