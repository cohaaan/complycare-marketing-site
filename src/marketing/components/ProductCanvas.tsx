import { useEffect, useState } from 'react';
import {
  Activity,
  Bell,
  Building2,
  FileSignature,
  FileText,
  Folder,
  LayoutGrid,
  Layers,
  Search,
  Settings,
} from 'lucide-react';
import { cx } from '../utils/cx';

export type ProductVisual = 'dashboard' | 'census' | 'documents' | 'alerts' | 'floor';

type ProductCanvasProps = {
  variant: ProductVisual;
  className?: string;
};

type BedStatus = 'Occupied' | 'Available' | 'Cleaning' | 'Reserved' | 'Bed Hold' | 'Maintenance';
type FloorCellTone = 'occupied' | 'available' | 'cleaning' | 'reserved' | 'hold' | 'maintenance';

const statusToneMap: Record<BedStatus, { fg: string; bg: string }> = {
  Occupied: { fg: '#991B1B', bg: '#FEE2E2' },
  Available: { fg: '#166534', bg: '#DCFCE7' },
  Cleaning: { fg: '#854D0E', bg: '#FEF9C3' },
  Reserved: { fg: '#6B21A8', bg: '#F3E8FF' },
  'Bed Hold': { fg: '#B85F00', bg: '#FEF3E6' },
  Maintenance: { fg: '#FFFFFF', bg: '#454E5E' },
};

const floorToneMap: Record<FloorCellTone, { bg: string; border: string }> = {
  occupied: { bg: '#FCA5A5', border: '#EF4444' },
  available: { bg: '#BFDBFE', border: '#60A5FA' },
  cleaning: { bg: '#FDE68A', border: '#F59E0B' },
  reserved: { bg: '#DDD6FE', border: '#8B5CF6' },
  hold: { bg: '#FDBA74', border: '#F97316' },
  maintenance: { bg: '#94A3B8', border: '#64748B' },
};

function BrandMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 72 72" fill="none" aria-hidden="true">
      <path d="M15 14 C 7 22, 10 44, 24 55 C 35 64, 49 55, 49 41 C 49 25, 33 6, 15 14 Z" fill="#5BBFA0" opacity="0.95" />
      <path d="M34 12 C 26 20, 29 40, 41 50 C 50 58, 62 51, 61 38 C 60 24, 47 4, 34 12 Z" fill="#F5A07A" opacity="0.82" />
      <circle cx="32" cy="30" r="4.5" fill="#FFFFFF" />
    </svg>
  );
}

function StatusBadge({ status }: { status: BedStatus }) {
  const tone = statusToneMap[status];

  return (
    <span
      className="rounded-full px-2 py-0.5 text-[7px] font-bold uppercase tracking-[0.08em]"
      style={{ color: tone.fg, background: tone.bg }}
    >
      {status}
    </span>
  );
}

function FloorCell({ tone }: { tone: FloorCellTone }) {
  const t = floorToneMap[tone];
  return <span className="h-3 w-2.5 rounded-[2px] border" style={{ background: t.bg, borderColor: t.border }} />;
}

function FloorStrip({ cells, className }: { cells: FloorCellTone[]; className?: string }) {
  return (
    <div className={cx('absolute flex items-center gap-[2px]', className)}>
      {cells.map((tone, idx) => (
        <FloorCell key={`${tone}-${idx}`} tone={tone} />
      ))}
    </div>
  );
}

function FloorBlueprint() {
  return (
    <div className="relative h-[154px] overflow-hidden rounded-md border border-[#CBD5E1] bg-[#BFC5CE]">
      <div className="absolute inset-x-0 top-[44%] h-[10px] bg-[#CBD5E1]" />
      <div className="absolute inset-x-0 top-[65%] h-[9px] bg-[#CBD5E1]" />
      <div className="absolute left-[43%] top-[16%] h-[33%] w-[14%] rounded-sm bg-[#CBD5E1]" />

      <FloorStrip
        className="left-[39.5%] top-[22%]"
        cells={['available', 'cleaning', 'reserved', 'available', 'occupied', 'cleaning', 'reserved', 'occupied']}
      />
      <FloorStrip
        className="left-[39.5%] top-[30%]"
        cells={['available', 'occupied', 'cleaning', 'available', 'occupied', 'available', 'cleaning', 'reserved']}
      />
      <FloorStrip
        className="left-[39.5%] top-[38%]"
        cells={['cleaning', 'reserved', 'available', 'hold', 'occupied', 'cleaning', 'available', 'reserved']}
      />

      <FloorStrip
        className="left-[2%] top-[50%]"
        cells={[
          'cleaning',
          'occupied',
          'available',
          'occupied',
          'occupied',
          'occupied',
          'occupied',
          'maintenance',
          'available',
          'occupied',
          'occupied',
          'occupied',
          'occupied',
          'occupied',
          'available',
          'occupied',
          'occupied',
          'occupied',
          'occupied',
        ]}
      />
      <FloorStrip
        className="left-[2%] top-[70%]"
        cells={[
          'available',
          'maintenance',
          'occupied',
          'occupied',
          'occupied',
          'cleaning',
          'available',
          'cleaning',
          'hold',
          'occupied',
          'available',
          'occupied',
          'occupied',
          'cleaning',
          'occupied',
          'occupied',
          'available',
          'occupied',
          'maintenance',
        ]}
      />

      <div className="absolute left-[45%] top-[88%] h-5 w-5 rounded-[2px] border border-[#9CA3AF] bg-[#D9F99D]" />
    </div>
  );
}

function DashboardBody() {
  const bedRows = [
    { bed: '208-D', patient: 'Patricia M.', status: 'Occupied' as const, meta: '84y • Medicare • Day 12' },
    { bed: '208-W', patient: 'Open bed', status: 'Available' as const, meta: 'Ready for referral' },
    { bed: '210-D', patient: 'James R.', status: 'Occupied' as const, meta: '81y • Medicaid' },
    { bed: '210-W', patient: 'EVS ticket', status: 'Cleaning' as const, meta: 'Cleaning in progress' },
  ];

  return (
    <div className="space-y-1.5">
      <div className="rounded-md border border-[#E5E7EB] bg-white px-2 py-1.5">
        <div className="flex items-center justify-between gap-1.5">
          <p className="text-[8px] font-extrabold text-[#111827]">Bed Overview</p>
          <span className="rounded bg-[#EEF2FF] px-1.5 py-0.5 text-[6px] font-semibold text-[#4338CA]">Live</span>
        </div>
        <p className="mt-0.5 text-[6.5px] text-[#6B7280]">Friday, March 5 • Census refreshed 8:42 AM</p>
      </div>

      <div className="grid grid-cols-4 gap-1">
        {[
          { label: 'Beds', value: '60', tone: 'bg-[#EFF6FF] text-[#1D4ED8]' },
          { label: 'Occupied', value: '52', tone: 'bg-[#FEE2E2] text-[#991B1B]' },
          { label: 'Available', value: '3', tone: 'bg-[#DCFCE7] text-[#166534]' },
          { label: 'Alerts', value: '5', tone: 'bg-[#FEF9C3] text-[#854D0E]' },
        ].map((card) => (
          <div key={card.label} className="rounded-md border border-[#E5E7EB] bg-white p-1.5">
            <p className="truncate text-[6px] font-semibold uppercase tracking-[0.08em] text-[#9CA3AF]">{card.label}</p>
            <p className={cx('text-[10px] font-extrabold', card.tone)}>{card.value}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-1">
        <StatusBadge status="Available" />
        <StatusBadge status="Occupied" />
        <StatusBadge status="Cleaning" />
        <StatusBadge status="Reserved" />
      </div>

      <div className="grid grid-cols-2 gap-1">
        {bedRows.map((row) => (
          <div key={row.bed} className="rounded-md border border-[#E5E7EB] bg-white p-1.5">
            <div className="mb-1 flex items-start justify-between gap-1">
              <div>
                <p className="text-[8px] font-bold text-[#111827]">{row.bed}</p>
                <p className="text-[6.5px] text-[#6B7280]">{row.patient}</p>
              </div>
              <StatusBadge status={row.status} />
            </div>
            <p className="truncate text-[6px] text-[#9CA3AF]">{row.meta}</p>
            <div className="mt-1 rounded bg-[#F3F4F6] px-1 py-0.5 text-[6.5px] font-semibold text-[#4B5563]">Manage bed</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FloorBody() {
  return (
    <div className="space-y-1.5">
      <div className="rounded-md border border-[#E5E7EB] bg-white px-2 py-1.5">
        <div className="flex items-center justify-between gap-1.5">
          <p className="text-[8px] font-extrabold text-[#111827]">Floor Management</p>
          <span className="rounded bg-[#EFF6FF] px-1.5 py-0.5 text-[6px] font-semibold text-[#1D4ED8]">Floor 2</span>
        </div>
        <p className="mt-0.5 text-[6.5px] text-[#6B7280]">Interactive room and bed visibility map</p>
      </div>

      <div className="rounded-md border border-[#E5E7EB] bg-white p-1.5">
        <div className="mb-1 flex flex-wrap gap-1">
          <span className="rounded-full bg-[#DCFCE7] px-1.5 py-0.5 text-[6px] font-semibold text-[#166534]">Available</span>
          <span className="rounded-full bg-[#FEE2E2] px-1.5 py-0.5 text-[6px] font-semibold text-[#991B1B]">Occupied</span>
          <span className="rounded-full bg-[#FEF9C3] px-1.5 py-0.5 text-[6px] font-semibold text-[#854D0E]">Cleaning</span>
        </div>
        <FloorBlueprint />
      </div>
    </div>
  );
}

function CensusBody() {
  return (
    <div className="space-y-1.5">
      <div>
        <p className="text-[9px] font-extrabold text-[#111827]">End of Day Report</p>
        <p className="text-[6.5px] text-[#6B7280]">Census and patient movement summary</p>
      </div>

      <div className="overflow-hidden rounded-md border border-[#E5E7EB] bg-white">
        <table className="w-full text-left text-[6.5px]">
          <thead className="bg-[#F3F4F6] text-[#6B7280]">
            <tr>
              {['Date', 'Total', 'Occupied', 'Available', 'Admissions'].map((h) => (
                <th key={h} className="px-1.5 py-1 font-semibold uppercase tracking-[0.08em]">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ['03/05', '60', '52', '3', '4'],
              ['03/04', '60', '51', '4', '3'],
              ['03/03', '60', '50', '5', '2'],
            ].map((row, idx) => (
              <tr key={`${row[0]}-${idx}`} className={idx > 0 ? 'border-t border-[#E5E7EB]' : ''}>
                <td className="px-1.5 py-1 text-[#111827]">{row[0]}</td>
                <td className="px-1.5 py-1 text-[#4B5563]">{row[1]}</td>
                <td className="px-1.5 py-1 text-[#991B1B]">{row[2]}</td>
                <td className="px-1.5 py-1 text-[#166534]">{row[3]}</td>
                <td className="px-1.5 py-1 text-[#4B5563]">{row[4]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-2 gap-1">
        <div className="rounded-md border border-[#E5E7EB] bg-white p-1.5">
          <p className="text-[7px] font-bold text-[#111827]">Pending Referrals</p>
          <p className="mt-0.5 text-[6px] text-[#6B7280]">Helen Walker • Medicare</p>
          <p className="text-[6px] text-[#6B7280]">Thomas Young • Private Pay</p>
        </div>
        <div className="rounded-md border border-[#E5E7EB] bg-white p-1.5">
          <p className="text-[7px] font-bold text-[#111827]">Planned Discharges</p>
          <p className="mt-0.5 text-[6px] text-[#6B7280]">Richard N. • 249-D</p>
          <p className="text-[6px] text-[#6B7280]">Charles B. • 212-D</p>
        </div>
      </div>
    </div>
  );
}

function DocumentsBody() {
  return (
    <div className="space-y-1.5">
      <div>
        <p className="text-[9px] font-extrabold text-[#111827]">Binders</p>
        <p className="text-[6.5px] text-[#6B7280]">Admissions and compliance forms</p>
      </div>

      <div className="flex gap-1 overflow-hidden rounded-md border border-[#E5E7EB] bg-white p-1">
        {['Admissions', 'Grievance', 'Bed Hold', 'Weights'].map((tab, idx) => (
          <span
            key={tab}
            className={cx(
              'rounded px-1.5 py-0.5 text-[6px] font-semibold',
              idx === 0 ? 'bg-[#EEF2FF] text-[#4338CA]' : 'bg-[#F3F4F6] text-[#6B7280]',
            )}
          >
            {tab}
          </span>
        ))}
      </div>

      <div className="rounded-md border border-[#E5E7EB] bg-white">
        {[
          ['Admission Agreement', 'Available'],
          ['HIPAA Authorization', 'Reserved'],
          ['Bed Hold Form', 'Occupied'],
          ['Weight Exception Report', 'Cleaning'],
        ].map(([name, status], idx) => (
          <div key={name} className={cx('flex items-center justify-between px-2 py-1.5', idx > 0 ? 'border-t border-[#E5E7EB]' : '')}>
            <div className="min-w-0">
              <p className="truncate text-[7px] font-semibold text-[#111827]">{name}</p>
              <p className="text-[6px] text-[#9CA3AF]">Owner + timestamp captured</p>
            </div>
            <StatusBadge status={status as BedStatus} />
          </div>
        ))}
      </div>

      <div className="inline-flex items-center gap-1 rounded-md bg-[#6366F1] px-2 py-1 text-[6.5px] font-bold text-white">
        <FileSignature size={9} />
        Add New Entry
      </div>
    </div>
  );
}

function AlertsBody() {
  return (
    <div className="space-y-1.5">
      <div>
        <p className="text-[9px] font-extrabold text-[#111827]">Notifications</p>
        <p className="text-[6.5px] text-[#6B7280]">Coverage, cleaning, and maintenance alerts</p>
      </div>

      {[
        { title: 'Coverage ending soon', note: 'Patricia M. · Room 208 · 12 days left', status: 'Bed Hold' as const },
        { title: 'Bed ready for cleaning', note: 'Room 210 after discharge', status: 'Cleaning' as const },
        { title: 'Maintenance due', note: 'Room 215-W post-discharge inspection', status: 'Maintenance' as const },
      ].map((item) => (
        <div key={item.title} className="rounded-md border border-[#E5E7EB] bg-white p-1.5">
          <div className="mb-0.5 flex items-center justify-between gap-1.5">
            <p className="text-[7px] font-semibold text-[#111827]">{item.title}</p>
            <StatusBadge status={item.status} />
          </div>
          <p className="text-[6px] text-[#6B7280]">{item.note}</p>
          <div className="mt-1 flex gap-1">
            <span className="rounded bg-[#F3F4F6] px-1.5 py-0.5 text-[6px] font-semibold text-[#4B5563]">Review</span>
            <span className="rounded bg-[#6366F1] px-1.5 py-0.5 text-[6px] font-semibold text-white">Assign</span>
          </div>
        </div>
      ))}

      <div className="inline-flex items-center gap-1 rounded-md bg-[#EEF2FF] px-2 py-1 text-[6.5px] font-semibold text-[#4338CA]">
        <Activity size={9} />
        Mark all read
      </div>
    </div>
  );
}

function Shell({ variant }: { variant: ProductVisual }) {
  const sidebarItems: Array<{ label: string; view: ProductVisual; Icon: typeof LayoutGrid }> = [
    { label: 'Dashboard', view: 'dashboard', Icon: LayoutGrid },
    { label: 'Floor', view: 'floor', Icon: Layers },
    { label: 'Reports', view: 'census', Icon: FileText },
    { label: 'Binders', view: 'documents', Icon: Folder },
    { label: 'Alerts', view: 'alerts', Icon: Bell },
    { label: 'Settings', view: 'dashboard', Icon: Settings },
  ];

  const [activeView, setActiveView] = useState<ProductVisual>(variant);

  useEffect(() => {
    setActiveView(variant);
  }, [variant]);

  return (
    <div className="flex h-full min-h-0 bg-[#F3F4F6]">
      <aside className="w-[136px] shrink-0 border-r border-[#E5E7EB] bg-[#F3F4F6] px-2 py-2">
        <div className="mb-2 flex items-center gap-1.5 rounded-lg px-1.5 py-1">
          <BrandMark size={16} />
          <div className="leading-none">
            <p className="text-[8.5px] font-bold text-[#111827]">ComplyCare</p>
            <p className="text-[7px] font-semibold text-[#6B7280]">Dashboard</p>
          </div>
        </div>

        <div className="space-y-1">
          {sidebarItems.map(({ label, view, Icon }) => {
            const active = view === activeView;
            return (
              <button
                key={`${label}-${view}`}
                type="button"
                onClick={() => setActiveView(view)}
                className={cx(
                  'flex w-full items-center gap-1.5 rounded-lg px-1.5 py-1 text-left text-[7.5px] font-semibold transition',
                  active ? 'bg-[#EEF2FF] text-[#4338CA]' : 'text-[#6B7280] hover:bg-[#F3F4F6]',
                )}
              >
                <Icon size={10} />
                <span className="truncate">{label}</span>
                {label === 'Alerts' ? <span className="ml-auto rounded-full bg-[#EC4899] px-1 py-0 text-[6px] font-bold text-white">3</span> : null}
              </button>
            );
          })}
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex h-8 items-center justify-between border-b border-[#E5E7EB] bg-[#F3F4F6] px-2.5">
          <div className="flex items-center gap-1.5">
            <Building2 size={10} className="text-[#6366F1]" />
            <span className="text-[7px] font-semibold text-[#4B5563]">ComplyCare Main Facility</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-1 rounded-md border border-[#E5E7EB] bg-[#F3F4F6] px-1.5 py-1">
              <Search size={9} className="text-[#9CA3AF]" />
              <span className="text-[6.5px] text-[#9CA3AF]">Search…</span>
            </div>
            <div className="h-4.5 w-4.5 rounded-md border border-[#E5E7EB] bg-[#F3F4F6]" />
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-hidden p-1.5">
          {activeView === 'dashboard' ? <DashboardBody /> : null}
          {activeView === 'floor' ? <FloorBody /> : null}
          {activeView === 'census' ? <CensusBody /> : null}
          {activeView === 'documents' ? <DocumentsBody /> : null}
          {activeView === 'alerts' ? <AlertsBody /> : null}
        </div>
      </div>
    </div>
  );
}

export function ProductCanvas({ variant, className }: ProductCanvasProps) {
  return (
    <div className={cx('shot-frame h-[280px] overflow-hidden bg-[#F3F4F6]', className)}>
      <Shell variant={variant} />
    </div>
  );
}
