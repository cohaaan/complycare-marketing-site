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
      className="relative z-10 flex w-full max-w-2xl overflow-hidden rounded-xl border border-[#e4edf5] bg-white shadow-[0_22px_56px_rgba(46,64,87,0.14),0_2px_8px_rgba(46,64,87,0.06)] ring-1 ring-[#2e4057]/[0.04] sm:rounded-2xl"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {/* Below sm: icon-only rail; sm+ matches prior label + width behavior */}
      <aside className="flex w-10 shrink-0 flex-col items-stretch border-r border-[#e5e7eb] bg-gradient-to-b from-white to-[#f8fafc] py-0.5 sm:w-40 sm:py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              type="button"
              title={item.label}
              aria-label={item.label}
              className={`relative flex w-full shrink-0 flex-col items-center justify-center gap-0 px-0 py-1 text-center text-[10px] font-medium leading-snug transition-colors sm:flex-row sm:items-center sm:justify-start sm:gap-2 sm:px-2 sm:py-2.5 sm:text-left sm:text-[11px] ${
                item.active ? 'bg-[#eff6ff] text-[#2563eb]' : 'text-[#4b5563] hover:bg-[#f9fafb]'
              }`}
            >
              <Icon className="size-4 shrink-0 sm:size-3.5" strokeWidth={2} />
              <span className="hidden min-w-0 flex-1 hyphens-auto sm:block sm:text-left">{item.label}</span>
              {item.badge != null && (
                <span className="absolute right-0 top-1 flex min-w-[1rem] items-center justify-center rounded-full bg-red-500 px-0.5 text-[7px] font-semibold leading-none text-white sm:right-2 sm:top-1/2 sm:size-4 sm:-translate-y-1/2 sm:text-[8px]">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
        <div className="mt-0 shrink-0 border-t border-[#e5e7eb] pt-0.5 sm:mt-auto sm:pt-2">
          <button
            type="button"
            title="Logout"
            aria-label="Logout"
            className="flex w-full shrink-0 flex-col items-center justify-center gap-0 px-0 py-1 text-center text-[10px] text-[#4b5563] hover:bg-[#f9fafb] sm:flex-row sm:items-center sm:justify-start sm:gap-2 sm:px-2 sm:py-2 sm:text-left sm:text-xs"
          >
            <LogOut className="size-4 shrink-0 sm:size-3.5" strokeWidth={2} />
            <span className="hidden min-w-0 flex-1 text-left sm:inline">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main content - squeezed; max-sm: tighter vertical rhythm for mobile */}
      <main className="min-w-0 flex-1 overflow-auto px-1 py-1.5 sm:p-2">
        <h1 className="mb-1 text-xs font-bold text-[#111827] sm:mb-1.5 sm:text-sm">Hello, John</h1>

        {/* Row 1: Large cards - Total Beds, Occupied Beds */}
        <div className="mb-1 grid grid-cols-2 gap-1 sm:mb-1.5 sm:gap-1.5">
          <div className="flex flex-col gap-0.5 rounded-md border border-[#e5e7eb] bg-white p-1 shadow-[0_1px_2px_rgba(0,0,0,0.05)] sm:gap-1 sm:p-1.5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-base font-extrabold text-[#111827] sm:text-lg">60</p>
                <p className="text-[8px] text-[#6b7280] sm:text-[9px]">Total Beds</p>
              </div>
              <div className="flex size-5 items-center justify-center rounded bg-[#eff6ff] sm:size-6">
                <BedDouble className="size-3 text-[#3b82f6] sm:size-3.5" strokeWidth={2} />
              </div>
            </div>
            <div className="h-0.5 w-full overflow-hidden rounded-full bg-[#f3f4f6]">
              <div className="h-full w-full rounded-full bg-[#3b82f6]" />
            </div>
          </div>
          <div className="flex flex-col gap-0.5 rounded-md border border-[#e5e7eb] bg-white p-1 shadow-[0_1px_2px_rgba(0,0,0,0.05)] sm:gap-1 sm:p-1.5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-base font-extrabold text-[#111827] sm:text-lg">52</p>
                <p className="text-[8px] text-[#6b7280] sm:text-[9px]">Occupied Beds</p>
              </div>
              <div className="flex size-5 items-center justify-center rounded bg-[#fef2f2] sm:size-6">
                <Heart className="size-3 text-[#ef4444] sm:size-3.5" strokeWidth={2} />
              </div>
            </div>
            <div className="h-0.5 w-full overflow-hidden rounded-full bg-[#f3f4f6]">
              <div className="h-full w-[87%] rounded-full bg-[#ef4444]" />
            </div>
            <p className="text-[7px] text-[#6b7280] sm:text-[8px]">87%</p>
          </div>
        </div>

        {/* Row 2: Smaller bed status cards */}
        <div className="mb-1 grid grid-cols-4 gap-0.5 sm:mb-1.5 sm:gap-1">
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
                className="flex flex-col gap-0 rounded border border-[#e5e7eb] bg-white p-1 shadow-[0_1px_2px_rgba(0,0,0,0.05)] sm:gap-0.5 sm:p-1.5"
              >
                <div className="flex items-center justify-between gap-0.5">
                  <div className="min-w-0">
                    <p className="text-sm font-extrabold leading-none text-[#111827] sm:text-base">{card.value}</p>
                    <p className="line-clamp-2 text-[7px] leading-tight text-[#6b7280] sm:text-[8px]">{card.label}</p>
                  </div>
                  <div className={`flex size-4 shrink-0 items-center justify-center rounded sm:size-5 ${card.iconBg}`}>
                    <Icon className={`size-2.5 sm:size-3 ${card.iconColor}`} strokeWidth={2} />
                  </div>
                </div>
                <div className="h-0.5 w-full overflow-hidden rounded-full bg-[#f3f4f6]">
                  <div
                    className={`h-full rounded-full ${card.color}`}
                    style={{ width: card.pct === '0%' ? '1px' : card.pct }}
                  />
                </div>
                <p className="text-[7px] text-[#6b7280] sm:text-[8px]">{card.pct}</p>
              </div>
            );
          })}
        </div>

        {/* Row 3: one horizontal row on mobile (scroll) to avoid tall wrap */}
        <div className="mb-1 flex flex-nowrap gap-1 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] sm:mb-1.5 sm:flex-wrap sm:overflow-visible [&::-webkit-scrollbar]:hidden">
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
              className={`flex shrink-0 items-center gap-0.5 rounded border px-1 py-0.5 ${
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
                className={`size-2 rounded-full ${
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
                <p className={`truncate text-[8px] ${tag.variant === 'red' || tag.variant === 'orange' ? 'text-white/80' : 'text-[#6b7280]'}`}>
                  {tag.label}
                </p>
                <p className={`truncate text-[8px] font-semibold ${tag.variant === 'red' || tag.variant === 'orange' ? 'text-white' : 'text-black'}`}>
                  {tag.sub}
                </p>
              </div>
              <span
                className={`ml-0.5 shrink-0 text-[8px] font-semibold ${
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

        {/* Row 4: Charts - shorter placeholders on mobile */}
        <div className="grid grid-cols-[1.2fr_1fr] gap-1 sm:gap-1.5">
          <div className="flex flex-col gap-0.5 rounded border border-[#e5e7eb] bg-white p-1 shadow-[0_2px_4px_rgba(0,0,0,0.06)] sm:gap-1 sm:p-1.5">
            <p className="line-clamp-1 text-[8px] font-extrabold text-[#111827] sm:text-[10px]">Patient Movement Trends</p>
            <div className="flex h-[44px] w-full items-center justify-center overflow-hidden rounded bg-[#f9fafb] sm:h-[80px]">
              <span className="text-[8px] font-medium text-[#9ca3af] sm:text-[10px]">Chart</span>
            </div>
            <div className="flex flex-wrap justify-center gap-0.5">
              {['7 Days', '30 Days', '90 Days', '1 Year', 'Refresh'].map((btn, i) => (
                <span
                  key={btn}
                  className={`inline-flex rounded-full px-0.5 py-0.5 text-[7px] font-semibold sm:px-1 sm:text-[8px] ${
                    i === 1 ? 'bg-[#e0e7ff] text-[#4338ca]' : 'text-[#4b5563]'
                  } ${btn === '30 Days' ? '' : 'max-sm:hidden'}`}
                >
                  {btn}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-0.5 rounded border border-[#e5e7eb] bg-white p-1 shadow-[0_2px_4px_rgba(0,0,0,0.06)] sm:gap-1 sm:p-1.5">
            <p className="line-clamp-1 text-[8px] font-extrabold text-[#111827] sm:text-[10px]">Patient Movement Distribution</p>
            <div className="flex h-[44px] w-full items-center justify-center overflow-hidden rounded bg-[#f9fafb] sm:h-[80px]">
              <span className="text-[8px] font-medium text-[#9ca3af] sm:text-[10px]">Chart</span>
            </div>
            <div className="grid grid-cols-2 gap-0.5 text-center">
              {[
                { n: '1', label: 'Planned', color: 'text-[#dc2626]' },
                { n: '25', label: 'Discharged', color: 'text-[#16a34a]' },
                { n: '4', label: 'Pending', color: 'text-[#ca8a04]' },
                { n: '18', label: 'Admitted', color: 'text-[#9333ea]' },
              ].map((item) => (
                <div key={item.label}>
                  <p className={`text-[7px] font-bold sm:text-[8px] ${item.color}`}>{item.n}</p>
                  <p className="text-[7px] text-[#6b7280] sm:text-[8px]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
