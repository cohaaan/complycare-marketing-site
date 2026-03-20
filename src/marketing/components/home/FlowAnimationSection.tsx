import { BedTrackerDashboard } from './BedTrackerDashboard';
import { FlowAnimation } from './FlowAnimation';

export function FlowAnimationSection() {
  return (
    <section className="relative z-10 isolate -mt-px flex min-h-[min(115vh,920px)] flex-col overflow-x-hidden bg-[linear-gradient(180deg,transparent_0%,rgba(224,242,254,0.14)_30%,rgba(242,246,250,0.76)_58%,rgba(242,246,250,0.82)_72%,rgba(242,246,250,0.4)_84%,rgba(229,241,250,0.14)_93%,transparent_100%)] pt-12 sm:min-h-[min(105vh,880px)] sm:pt-16">
      <FlowAnimation />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-[min(62vh,600px)] bg-[linear-gradient(to_top,#f2f6fa_0%,rgba(242,246,250,0.88)_22%,rgba(242,246,250,0.45)_52%,rgba(232,242,252,0.12)_78%,transparent_100%)]"
        aria-hidden
      />
      <div className="relative z-20 mt-auto flex w-full flex-col items-center px-4 pb-16 pt-4 sm:px-6 sm:pb-24 sm:pt-6">
        <div className="w-full max-w-2xl -translate-y-14 sm:-translate-y-16 md:-translate-y-20 lg:-translate-y-24">
          <BedTrackerDashboard />
        </div>
      </div>
    </section>
  );
}
