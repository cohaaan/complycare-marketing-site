/**
 * Reference-style flow: white stroked paths + soft glow, labels on textPath
 * (SMIL startOffset), uppercase tracking — no nodes / “buttons”.
 */

const FLOW_PATHS = [
  {
    id: 'cc-flow-p1',
    d: 'M0,150 C300,50 600,250 900,150 S1400,50 1800,200',
    text: 'Admission agreement signed',
    opacity: 0.8,
    dur: '35s',
  },
  {
    id: 'cc-flow-p2',
    d: 'M0,300 C400,200 700,400 1000,300 S1500,200 1800,350',
    text: 'Concierge taken',
    opacity: 0.6,
    dur: '42s',
  },
  {
    id: 'cc-flow-p3',
    d: 'M0,450 C500,350 800,550 1100,450 S1600,350 1800,500',
    text: 'Grievance form made',
    opacity: 0.7,
    dur: '48s',
  },
  {
    id: 'cc-flow-p4',
    d: 'M0,600 C300,750 700,500 1000,650 S1400,800 1800,600',
    text: 'Clinical review complete',
    opacity: 0.5,
    dur: '52s',
  },
  {
    id: 'cc-flow-p5',
    d: 'M0,750 C500,650 900,850 1200,750 S1600,650 1800,850',
    text: 'Referral processed',
    opacity: 0.65,
    dur: '40s',
  },
  {
    id: 'cc-flow-p6',
    d: 'M0,100 C600,300 1100,0 1600,200',
    text: 'Insurance approved',
    opacity: 0.45,
    dur: '45s',
  },
  {
    id: 'cc-flow-p7',
    d: 'M0,800 C400,950 1000,700 1500,900',
    text: 'Patient assessment',
    opacity: 0.4,
    dur: '58s',
  },
] as const;

export const FLOW_STEP_LABELS: readonly string[] = FLOW_PATHS.map((p) => p.text);

export function FlowAnimation() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 min-h-full min-w-full">
      <svg
        className="absolute inset-0 h-full min-h-full w-full min-w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1900 900"
        preserveAspectRatio="xMidYMid slice"
        overflow="visible"
      >
        <defs>
          <filter id="cc-flow-line-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          {FLOW_PATHS.map((p) => (
            <path key={p.id} id={p.id} d={p.d} fill="none" />
          ))}
        </defs>

        {FLOW_PATHS.map((p, i) => (
          <g key={p.id}>
            <use
              href={`#${p.id}`}
              stroke="#ffffff"
              strokeWidth={3}
              strokeOpacity={p.opacity}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              filter="url(#cc-flow-line-glow)"
            />
            <text
              fill="#334e68"
              fillOpacity={1}
              fontSize={13}
              fontWeight={800}
              fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
              style={{ letterSpacing: '0.08em', textTransform: 'uppercase' }}
            >
              <textPath href={`#${p.id}`} startOffset="0%">
                {p.text}
                <animate
                  attributeName="startOffset"
                  from="0%"
                  to="100%"
                  dur={p.dur}
                  begin={`${i * 0.7}s`}
                  repeatCount="indefinite"
                />
              </textPath>
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
