import { ArrowUpRight } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { featureCards, type FeatureCard } from '../../data/content';
import { iPadFrame } from '../iPadFrame';
import { ProductCanvas } from '../ProductCanvas';
import { SectionIntro } from '../SectionIntro';

const visibleFeatureCards = featureCards.filter((f) => f.id !== 'facility-ai-assistant');

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

const CAROUSEL_IO_THRESHOLDS = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] as const;

function MobileFeatureCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const ratiosRef = useRef<number[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const root = scrollRef.current;
    if (!root) {
      return;
    }

    const cards = [...root.querySelectorAll<HTMLElement>('[data-carousel-card]')];
    ratiosRef.current = new Array(cards.length).fill(0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number((entry.target as HTMLElement).dataset.carouselIndex);
          if (!Number.isNaN(idx) && idx >= 0 && idx < ratiosRef.current.length) {
            ratiosRef.current[idx] = entry.intersectionRatio;
          }
        });
        let bestI = 0;
        let bestR = -1;
        ratiosRef.current.forEach((r, i) => {
          if (r > bestR) {
            bestR = r;
            bestI = i;
          }
        });
        if (bestR > 0) {
          setActiveIndex(bestI);
        }
      },
      { root, rootMargin: '0px', threshold: [...CAROUSEL_IO_THRESHOLDS] },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="mt-10 md:hidden">
      <div
        ref={scrollRef}
        className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="region"
        aria-label="Platform modules — swipe sideways for more"
      >
        {visibleFeatureCards.map((feature, index) => (
          <article
            key={feature.id}
            data-carousel-card
            data-carousel-index={index}
            className={`card-premium flex h-[420px] max-h-[420px] w-[min(280px,calc(100vw-6rem))] shrink-0 snap-start snap-always flex-col overflow-hidden rounded-2xl border p-4 ${toneClassMap[feature.tone]}`}
          >
            <div className={`rounded-xl border px-3 py-2.5 ${innerBubbleClassMap[feature.tone]}`}>
              <div className="flex items-center justify-between gap-2">
                <p className="min-w-0 flex-1 text-[0.65rem] font-semibold uppercase leading-snug tracking-[0.14em] text-[#4E6478]">
                  {feature.statLabel}
                </p>
                <p className="shrink-0 font-display text-lg font-semibold text-[#2E4057]">{feature.statValue}</p>
              </div>
            </div>
            <p className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#8FA3B5]">Capability</p>
            <h3 className="mt-1 font-display text-lg font-semibold leading-tight text-[#2E4057]">{feature.title}</h3>
            <p className="mt-1.5 text-xs leading-relaxed text-[#4E6478] line-clamp-3">{feature.summary}</p>
            <div className="mt-3 h-[120px] w-full shrink-0 overflow-hidden rounded-lg">
              {feature.videoSrc ? (
                <iPadFrame className="h-full w-full max-w-[260px] mx-auto" orientation="landscape">
                  <video src={feature.videoSrc} autoPlay loop muted playsInline className="h-full w-full object-cover" />
                </iPadFrame>
              ) : (
                <ProductCanvas variant={feature.visual} className="h-full w-full overflow-hidden rounded-lg" />
              )}
            </div>
            <p className="mt-2 text-xs leading-relaxed text-[#4E6478] line-clamp-2">{feature.detail}</p>
            <Link
              to={feature.link}
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#3DA882] hover:text-[#2E8E6D]"
            >
              Learn more
              <ArrowUpRight size={14} />
            </Link>
          </article>
        ))}
      </div>
      <p className="mt-1 text-center text-xs text-[#8FA3B5]">Swipe for more modules</p>
      <div
        className="mt-3 flex justify-center gap-1.5"
        aria-label={`Module ${activeIndex + 1} of ${visibleFeatureCards.length}`}
      >
        {visibleFeatureCards.map((feature, i) => (
          <span
            key={feature.id}
            className={`h-1.5 rounded-full transition-[width,background-color] duration-200 ${
              i === activeIndex ? 'w-5 bg-[#2E4057]' : 'w-1.5 bg-[#C5D4E0]'
            }`}
            aria-hidden
          />
        ))}
      </div>
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
    <section className="section-pad -mt-px bg-[linear-gradient(180deg,transparent_0rem,#f2f6fa_12rem,#f2f6fa_100%)]">
      <div className="cc-container">
        <SectionIntro
          eyebrow="Platform modules"
          title="One operating system for accountability, execution, and compliance proof"
          description="Scroll through the core workflows that keep teams aligned, tasks on time, and facility performance measurable."
        />

        <MobileFeatureCarousel />
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
              {visibleFeatureCards.map((feature) => (
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
                      <iPadFrame className="h-full min-h-[300px] w-full" orientation="landscape">
                        <video
                          src={feature.videoSrc}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="h-full w-full"
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
