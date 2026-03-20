import { BedTrackerDashboard } from './BedTrackerDashboard';
import { FlowAnimation } from './FlowAnimation';

export function FlowAnimationSection() {
  return (
    <section className="relative z-10 isolate flex min-h-[140vh] flex-col overflow-hidden border-b border-[#E4EDF5] pt-20 sm:min-h-[130vh] sm:pt-32">
      <FlowAnimation />
      <div className="relative z-10 mt-auto flex w-full flex-col items-center px-4 pb-24 pt-14 sm:px-6 sm:pb-32 sm:pt-20">
        <BedTrackerDashboard />
      </div>
    </section>
  );
}
