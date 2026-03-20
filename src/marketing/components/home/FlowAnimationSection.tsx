import { BedTrackerDashboard } from './BedTrackerDashboard';
import { FlowAnimation, FLOW_STEP_LABELS } from './FlowAnimation';

export function FlowAnimationSection() {
  return (
    <section className="relative z-10 isolate -mt-px flex min-h-[min(80vh,600px)] flex-col overflow-x-hidden bg-[linear-gradient(180deg,transparent_0%,rgba(224,242,254,0.14)_30%,rgba(242,246,250,0.76)_58%,rgba(242,246,250,0.82)_72%,rgba(242,246,250,0.4)_84%,rgba(229,241,250,0.14)_93%,transparent_100%)] pt-10 sm:min-h-[min(90vh,720px)] sm:pt-14 md:min-h-[min(115vh,920px)] md:pt-16">
      <div className="pointer-events-none absolute inset-0 z-0 hidden min-w-full md:block" aria-hidden>
        <FlowAnimation />
      </div>
      <div className="relative z-[1] block px-5 pb-2 pt-6 md:hidden">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-[#4E6478]">Live workflow signals</p>
        <ul className="mx-auto mt-3 grid max-w-md gap-1.5 sm:mt-4 sm:gap-2">
          {FLOW_STEP_LABELS.map((label) => (
            <li
              key={label}
              className="rounded-lg border border-[#E4EDF5] bg-white/90 px-2.5 py-2 text-center text-xs font-medium text-[#2E4057] shadow-sm sm:rounded-xl sm:px-3 sm:py-2.5 sm:text-sm"
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
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
