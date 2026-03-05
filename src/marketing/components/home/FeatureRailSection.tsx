import { ArrowUpRight } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { featureCards, type FeatureCard } from '../../data/content';
import { iPadFrame } from '../iPadFrame';
import { ProductCanvas } from '../ProductCanvas';
import { SectionIntro } from '../SectionIntro';

const toneClassMap: Record<FeatureCard['tone'], string> = {
  mint: '!bg-[#EAF7F2] border-[#CFE9DD]',
  peach: '!bg-[#FEF3EC] border-[#F6DDCF]',
  sky: '!bg-[#EDF4FB] border-[#D9E8F8]',
  lilac: '!bg-[#F2EFFF] border-[#E3DDF9]',
  sand: '!bg-[#FDF7EB] border-[#F2E2BE]',
};

const innerBubbleClassMap: Record<FeatureCard['tone'], string> = {
  mint: 'bg-white border-[#D7E8DF]',
  peach: 'bg-white border-[#F1E0D5]',
  sky: 'bg-white border-[#D8E4F2]',
  lilac: 'bg-white border-[#E2DDF2]',
  sand: 'bg-white border-[#ECE0C8]',
};

function FeatureVisual({ feature, compact }: { feature: FeatureCard; compact?: boolean }) {
  return (
    <div className={`rounded-2xl border p-3 ${innerBubbleClassMap[feature.tone]} ${compact ? 'mt-3' : 'mt-5'}`}>
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4E6478]">{feature.statLabel}</p>
        <p className="font-display text-2xl font-semibold text-[#2E4057]">{feature.statValue}</p>
      </div>
      <ProductCanvas variant={feature.visual} className={`mt-2 overflow-hidden ${compact ? 'h-[140px]' : 'h-[220px]'}`} />
    </div>
  );
}

function MobileStack() {
  return (
    <div className="mt-10 grid gap-4 md:hidden">
      {featureCards.map((feature) => (
        <article key={feature.id} className={`card-premium min-h-[36rem] p-6 ${toneClassMap[feature.tone]}`}>
          <h3 className="font-display text-2xl font-semibold text-[#2E4057]">{feature.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-[#4E6478]">{feature.summary}</p>
          <FeatureVisual feature={feature} />
          <p className="mt-4 text-sm leading-relaxed text-[#4E6478]">{feature.detail}</p>
          <Link to={feature.link} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#3DA882] hover:text-[#2E8E6D]">
            Learn more
            <ArrowUpRight size={14} />
          </Link>
        </article>
      ))}
    </div>
  );
}

export function FeatureRailSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const ENTRY_BUFFER = 0.05;
  const EXIT_BUFFER = 0.08;

  const syncPosition = useCallback(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!section || !viewport || !track) {
      return;
    }

    const totalScrollable = section.offsetHeight - window.innerHeight;
    const sectionTop = section.getBoundingClientRect().top;
    const consumed = Math.min(Math.max(-sectionTop, 0), totalScrollable);
    const ratio = totalScrollable > 0 ? consumed / totalScrollable : 0;
    const maxOffset = Math.max(track.scrollWidth - viewport.clientWidth, 0);
    const mappedRatio = Math.min(Math.max((ratio - ENTRY_BUFFER) / (1 - ENTRY_BUFFER - EXIT_BUFFER), 0), 1);

    setOffset(mappedRatio * maxOffset);
  }, []);

  useEffect(() => {
    let rafId = 0;

    const handleScroll = () => {
      if (rafId !== 0) {
        return;
      }

      rafId = window.requestAnimationFrame(() => {
        syncPosition();
        rafId = 0;
      });
    };

    syncPosition();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', syncPosition);

    return () => {
      if (rafId !== 0) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', syncPosition);
    };
  }, [syncPosition]);

  return (
    <section className="section-pad border-b border-[#E4EDF5] bg-[#F2F6FA]">
      <div className="cc-container">
        <SectionIntro
          eyebrow="Platform modules"
          title="One operating system for accountability, execution, and compliance proof"
          description="Scroll through the core workflows that keep teams aligned, tasks on time, and facility performance measurable."
        />

        <MobileStack />
      </div>

      <div ref={sectionRef} className="relative mt-12 hidden h-[560vh] md:block">
        <div className="sticky top-20">
          <div ref={viewportRef} className="h-[calc(100vh-8.5rem)] overflow-hidden px-10">
            <div
              ref={trackRef}
              className="flex h-full items-stretch gap-6 pb-1 pr-[34vw] transition-transform duration-100 ease-linear"
              style={{ transform: `translate3d(-${offset}px, 0, 0)` }}
              aria-label="Horizontal feature rail"
            >
              {featureCards.map((feature) => (
                <article
                  key={feature.id}
                  className={`w-[calc(26rem*1.17)] h-full min-h-0 flex-none overflow-hidden flex flex-col card-premium p-5 ${toneClassMap[feature.tone]}`}
                >
                  <div className={`w-full rounded-2xl border px-5 py-4 ${innerBubbleClassMap[feature.tone]}`}>
                    <div className="flex items-center justify-between gap-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4E6478] leading-snug min-w-0 flex-1">{feature.statLabel}</p>
                      <p className="font-display text-2xl font-semibold text-[#2E4057] shrink-0">{feature.statValue}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#8FA3B5]">Capability</p>
                  <h3 className="mt-1.5 font-display text-2xl font-semibold text-[#2E4057] leading-tight">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#4E6478] line-clamp-2">{feature.summary}</p>
                  <div className="mt-4 flex flex-1 min-h-0 flex-col items-center justify-center overflow-hidden">
                    {feature.videoSrc ? (
                      <iPadFrame className="h-full min-h-[220px] w-full">
                        <video
                          src={feature.videoSrc}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="h-full w-full object-contain"
                        />
                      </iPadFrame>
                    ) : (
                      <div className="h-full min-h-[160px] w-full overflow-hidden rounded-xl">
                        <ProductCanvas variant={feature.visual} className="h-full w-full overflow-hidden rounded-xl" />
                      </div>
                    )}
                  </div>
                  <Link to={feature.link} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#3DA882] hover:text-[#2E8E6D] shrink-0">
                    Learn more
                    <ArrowUpRight size={14} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
