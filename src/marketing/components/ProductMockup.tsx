import { ProductCanvas } from './ProductCanvas';
import { cx } from '../utils/cx';

type ProductMockupProps = {
  compact?: boolean;
  className?: string;
};

export function ProductMockup({ compact = false, className }: ProductMockupProps) {
  return (
    <div className={cx('card-premium p-4 sm:p-6', className)} aria-label="ComplyCare platform dashboard preview">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E4EDF5] pb-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8FA3B5]">Live Product View</p>
          <h3 className="mt-1 font-display text-lg font-semibold text-[#2E4057]">Unified Operations Command Center</h3>
        </div>
        <span className="rounded-full border border-[#C2E8D8] bg-[#EAF7F2] px-3 py-1 text-xs font-semibold text-[#3DA882]">
          Web + mobile in sync
        </span>
      </div>

      <ProductCanvas variant="dashboard" className="mt-4" />

      <div className={cx('mt-4 grid gap-3', compact ? 'sm:grid-cols-2' : 'sm:grid-cols-3')}>
        <div className="surface-mint rounded-2xl border border-[#CFE9DD] px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4E6478]">Admission completion</p>
          <p className="mt-1 font-display text-2xl font-semibold text-[#2E4057]">98.2%</p>
        </div>
        <div className="surface-sky rounded-2xl border border-[#D9E8F8] px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4E6478]">Placement visibility</p>
          <p className="mt-1 font-display text-2xl font-semibold text-[#2E4057]">Real-time</p>
        </div>
        {!compact ? (
          <div className="surface-peach rounded-2xl border border-[#F6DDCF] px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4E6478]">Audit prep savings</p>
            <p className="mt-1 font-display text-2xl font-semibold text-[#2E4057]">11 hrs/wk</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
