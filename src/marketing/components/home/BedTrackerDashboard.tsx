/**
 * BedTracker Dashboard - compact layout matching reference design
 * Includes sidebar, squeezed metrics, and charts.
 */

import {
  Activity,
  BedDouble,
  Bell,
  Bookmark,
  ClipboardList,
  Clock,
  FileText,
  Grid3X3,
  Heart,
  LayoutGrid,
  LogOut,
  Settings,
  SprayCan,
} from 'lucide-react';

// Figma chart assets
const chartTrends = 'https://www.figma.com/api/mcp/asset/69013e07-9d77-4b72-a8f8-1acdde1a9150';
const chartDistribution = 'https://www.figma.com/api/mcp/asset/74699eba-d97f-476a-83fa-47c87508b60d';

const navItems = [
  { label: 'Dashboard', icon: LayoutGrid, active: false },
  { label: 'Floor Management', icon: Grid3X3, active: false },
  { label: 'Bed Management', icon: BedDouble, active: true },
  { label: 'End of Day Report', icon: FileText, active: false },
  { label: 'Binders', icon: Bookmark, active: false },
  { label: 'Notifications', icon: Bell, badge: 90 },
  { label: 'Settings', icon: Settings, active: false },
];

export function BedTrackerDashboard() {
  return (
    <div
      className="relative z-10 flex w-full max-w-4xl overflow-hidden rounded-xl bg-white shadow-[0_4px_24px_rgba(46,64,87,0.12)]"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {/* Sidebar */}
      <aside className="flex w-36 shrink-0 flex-col border-r border-[#e5e7eb] bg-white py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              type="button"
              className={`relative flex items-center gap-1.5 px-2 py-1.5 text-left text-xs transition-colors ${
                item.active ? 'bg-[#eff6ff] text-[#3b82f6]' : 'text-[#4b5563] hover:bg-[#f9fafb]'
              }`}
            >
              <Icon className="size-3.5 shrink-0" strokeWidth={2} />
              <span className="truncate">{item.label}</span>
              {item.badge != null && (
                <span className="absolute right-1.5 top-1/2 flex size-4 -translate-y-1/2 items-center justify-center rounded-full bg-red-500 text-[9px] font-semibold text-white">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
        <div className="mt-auto border-t border-[#e5e7eb] pt-1.5">
          <button
            type="button"
            className="flex w-full items-center gap-1.5 px-2 py-1.5 text-left text-xs text-[#4b5563] hover:bg-[#f9fafb]"
          >
            <LogOut className="size-3.5 shrink-0" strokeWidth={2} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main content - squeezed */}
      <main className="min-w-0 flex-1 overflow-auto p-3">
        <h1 className="mb-2 text-base font-bold text-[#111827]">Hello, John</h1>

        {/* Row 1: Large cards - Total Beds, Occupied Beds */}
        <div className="mb-2 grid grid-cols-2 gap-2">
          <div className="flex flex-col gap-1.5 rounded-md border border-[#e5e7eb] bg-white p-2 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xl font-extrabold text-[#111827]">60</p>
                <p className="text-[10px] text-[#6b7280]">Total Beds</p>
              </div>
              <div className="flex size-7 items-center justify-center rounded bg-[#eff6ff]">
                <BedDouble className="size-4 text-[#3b82f6]" strokeWidth={2} />
              </div>
            </div>
            <div className="h-1 w-full overflow-hidden rounded-full bg-[#f3f4f6]">
              <div className="h-full w-full rounded-full bg-[#3b82f6]" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5 rounded-md border border-[#e5e7eb] bg-white p-2 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xl font-extrabold text-[#111827]">52</p>
                <p className="text-[10px] text-[#6b7280]">Occupied Beds</p>
              </div>
              <div className="flex size-7 items-center justify-center rounded bg-[#fef2f2]">
                <Heart className="size-4 text-[#ef4444]" strokeWidth={2} />
              </div>
            </div>
            <div className="h-1 w-full overflow-hidden rounded-full bg-[#f3f4f6]">
              <div className="h-full w-[87%] rounded-full bg-[#ef4444]" />
            </div>
            <p className="text-[9px] text-[#6b7280]">87%</p>
          </div>
        </div>

        {/* Row 2: Smaller bed status cards */}
        <div className="mb-2 grid grid-cols-4 gap-1.5">
          {[
            { value: '3', label: 'Available Beds', pct: '3%', color: 'bg-[#22c55e]', icon: Activity, iconBg: 'bg-[#f0fdf4]', iconColor: 'text-[#22c55e]' },
            { value: '5', label: 'Cleaning/M...', pct: '0%', color: 'bg-[#eab308]', icon: SprayCan, iconBg: 'bg-[#fefce8]', iconColor: 'text-[#eab308]' },
            { value: '0', label: 'Reserved', pct: '0%', color: 'bg-[#a855f7]', icon: ClipboardList, iconBg: 'bg-[#faf5ff]', iconColor: 'text-[#a855f7]' },
            { value: '0', label: 'Bed Hold', pct: '0%', color: 'bg-[#f97316]', icon: Clock, iconBg: 'bg-[#fff7ed]', iconColor: 'text-[#f97316]' },
          ].map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.label}
                className="flex flex-col gap-1 rounded-md border border-[#e5e7eb] bg-white p-2 shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-extrabold text-[#111827]">{card.value}</p>
                    <p className="text-[9px] text-[#6b7280]">{card.label}</p>
                  </div>
                  <div className={`flex size-6 items-center justify-center rounded ${card.iconBg}`}>
                    <Icon className={`size-3.5 ${card.iconColor}`} strokeWidth={2} />
                  </div>
                </div>
                <div className="h-0.5 w-full overflow-hidden rounded-full bg-[#f3f4f6]">
                  <div
                    className={`h-full rounded-full ${card.color}`}
                    style={{ width: card.pct === '0%' ? '1px' : card.pct }}
                  />
                </div>
                <p className="text-[9px] text-[#6b7280]">{card.pct}</p>
              </div>
            );
          })}
        </div>

        {/* Row 3: Compact insurance tags */}
        <div className="mb-2 flex flex-wrap gap-1.5">
          {[
            { label: 'Medicare', sub: 'Less than 30 days', count: '2', variant: 'green' as const },
            { label: 'Insurance Type', sub: 'Medicare', count: '2', variant: 'green' as const },
            { label: 'Insurance Type', sub: 'Medicaid', count: '25', variant: 'blue' as const },
            { label: 'Insurance Type', sub: 'HMO', count: '2', variant: 'purple' as const },
            { label: 'Insurance Type', sub: 'Private Pay', count: '5', variant: 'gray' as const },
            { label: 'Insurance Type', sub: 'Non Payer', count: '0', variant: 'red' as const },
            { label: 'Re-Hospitalization', sub: 'Within 30 days', count: '0', variant: 'orange' as const },
          ].map((tag) => (
            <div
              key={`${tag.sub}-${tag.count}`}
              className={`flex items-center gap-1 rounded border px-1.5 py-1 ${
                tag.variant === 'red'
                  ? 'border-[#dc2626] bg-[#ef4444] text-white'
                  : tag.variant === 'orange'
                    ? 'border-[#ea580c] bg-[#f97316] text-white'
                    : tag.variant === 'green'
                      ? 'border-[#22c55e]/40 bg-white'
                      : tag.variant === 'blue'
                        ? 'border-[#e5e7eb] bg-white'
                        : tag.variant === 'purple'
                          ? 'border-[#e5e7eb] bg-white'
                          : 'border-[#e5e7eb] bg-white'
              }`}
            >
              <div
                className={`size-3 rounded-full ${
                  tag.variant === 'red'
                    ? 'bg-[#f87171]'
                    : tag.variant === 'orange'
                      ? 'bg-[#fb923c]'
                      : tag.variant === 'green'
                        ? 'bg-[#86efac]'
                        : tag.variant === 'blue'
                          ? 'bg-[#93c5fd]'
                          : tag.variant === 'purple'
                            ? 'bg-[#e9d5ff]'
                            : 'bg-[#e5e7eb]'
                }`}
              />
              <div className="min-w-0">
                <p className={`truncate text-[9px] ${tag.variant === 'red' || tag.variant === 'orange' ? 'text-white/80' : 'text-[#6b7280]'}`}>
                  {tag.label}
                </p>
                <p className={`truncate text-[9px] font-semibold ${tag.variant === 'red' || tag.variant === 'orange' ? 'text-white' : 'text-black'}`}>
                  {tag.sub}
                </p>
              </div>
              <span
                className={`ml-0.5 shrink-0 text-[9px] font-semibold ${
                  tag.variant === 'red' || tag.variant === 'orange'
                    ? 'text-white'
                    : tag.variant === 'green'
                      ? 'text-[#22c55e]'
                      : tag.variant === 'blue'
                        ? 'text-[#3b82f6]'
                        : tag.variant === 'purple'
                          ? 'text-[#a855f7]'
                          : 'text-[#6b7280]'
                }`}
              >
                {tag.count}
              </span>
            </div>
          ))}
        </div>

        {/* Row 4: Charts - squeezed */}
        <div className="grid grid-cols-[1.2fr_1fr] gap-2">
          <div className="flex flex-col gap-1.5 rounded-md border border-[#e5e7eb] bg-white p-2 shadow-[0_2px_4px_rgba(0,0,0,0.06)]">
            <p className="text-xs font-extrabold text-[#111827]">Patient Movement Trends</p>
            <div className="h-[120px] w-full overflow-hidden rounded bg-[#f9fafb]">
              <img alt="Patient movement trends" className="size-full object-contain" src={chartTrends} />
            </div>
            <div className="flex flex-wrap justify-center gap-1">
              {['7 Days', '30 Days', '90 Days', '1 Year', 'Refresh'].map((btn, i) => (
                <span
                  key={btn}
                  className={`rounded-full px-1.5 py-0.5 text-[9px] font-semibold ${i === 1 ? 'bg-[#e0e7ff] text-[#4338ca]' : 'text-[#4b5563]'}`}
                >
                  {btn}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1.5 rounded-md border border-[#e5e7eb] bg-white p-2 shadow-[0_2px_4px_rgba(0,0,0,0.06)]">
            <p className="text-xs font-extrabold text-[#111827]">Patient Movement Distribution</p>
            <div className="h-[120px] w-full overflow-hidden rounded bg-[#f9fafb]">
              <img alt="Patient movement distribution" className="size-full object-contain" src={chartDistribution} />
            </div>
            <div className="grid grid-cols-2 gap-0.5 text-center">
              {[
                { n: '1', label: 'Planned', color: 'text-[#dc2626]' },
                { n: '25', label: 'Discharged', color: 'text-[#16a34a]' },
                { n: '4', label: 'Pending', color: 'text-[#ca8a04]' },
                { n: '18', label: 'Admitted', color: 'text-[#9333ea]' },
              ].map((item) => (
                <div key={item.label}>
                  <p className={`text-[9px] font-bold ${item.color}`}>{item.n}</p>
                  <p className="text-[9px] text-[#6b7280]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
