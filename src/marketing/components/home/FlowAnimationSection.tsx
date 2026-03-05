import { BedTrackerDashboard } from './BedTrackerDashboard';
import { FlowAnimation } from './FlowAnimation';

export function FlowAnimationSection() {
  return (
    <section className="relative min-h-screen overflow-hidden border-b border-[#E4EDF5] flex flex-wrap box-content">
      <FlowAnimation />
      <div className="relative z-10 flex w-full items-center justify-center py-12">
        <BedTrackerDashboard />
      </div>
    </section>
  );
}
