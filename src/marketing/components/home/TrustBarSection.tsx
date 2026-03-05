import { trustBadges, trustLogos } from '../../data/content';

const badgeStyles = ['surface-mint border-[#C2E8D8] text-[#3DA882]', 'surface-sky border-[#D9E8F8] text-[#4C79A8]', 'surface-peach border-[#F6DDCF] text-[#B97C62]'];

export function TrustBarSection() {
  return (
    <section className="section-pad border-b border-[#E4EDF5] bg-[#F2F6FA] py-14 sm:py-16">
      <div className="cc-container">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {trustLogos.map((logo, index) => (
            <div
              key={logo}
              className={`flex min-h-14 items-center justify-center rounded-xl border px-3 text-center text-xs font-semibold uppercase tracking-[0.08em] text-[#4E6478] ${index % 2 === 0 ? 'surface-white border-[#E4EDF5]' : 'surface-sky border-[#D9E8F8]'}`}
            >
              {logo}
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {trustBadges.map((badge, index) => (
            <span key={badge} className={`rounded-full border px-3 py-1 text-xs font-semibold ${badgeStyles[index % badgeStyles.length]}`}>
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
