import { BedTrackerDashboard } from './BedTrackerDashboard';
import { FlowAnimation } from './FlowAnimation';

export function FlowAnimationSection() {
  return (
    <section className="relative min-h-screen overflow-hidden border-b border-[#E4EDF5] flex flex-wrap box-content">
      <FlowAnimation />
      <div className="relative z-10 flex w-full items-center justify-center bg-gradient-to-b from-[#f0f9ff] to-[#e0f2fe] py-8">
        <BedTrackerDashboard />
      </div>
    </section>
  );
}
