export function FlowAnimation() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <style>
          {`
            .flow-path { fill: none; stroke: rgba(46, 64, 87, 0.35); stroke-width: 2; stroke-linecap: round; }
            .flow-path-dashed { fill: none; stroke: rgba(46, 64, 87, 0.25); stroke-width: 2; stroke-dasharray: 10, 10; stroke-linecap: round; }
            .flow-dot { fill: rgba(46, 64, 87, 0.7); filter: drop-shadow(0 0 4px rgba(46, 64, 87, 0.4)); }
            .flow-text { font-family: system-ui, -apple-system, sans-serif; font-size: 12px; font-weight: 600; fill: #2E4057; dominant-baseline: middle; }
            .flow-text-reverse { text-anchor: end; }

            @keyframes flowDot { 0% { offset-distance: 0%; } 100% { offset-distance: 100%; } }
            .animated-dot-1 { offset-path: path('M 0 150 Q 300 50, 600 150 T 1200 150 T 1800 150'); animation: flowDot 12s linear infinite; offset-rotate: 0deg; }
            .animated-dot-2 { offset-path: path('M 0 400 Q 400 300, 800 400 T 1600 400'); animation: flowDot 15s linear infinite 1.5s; offset-rotate: 0deg; }
            .animated-dot-3 { offset-path: path('M 200 50 Q 500 200, 800 50 T 1400 50 T 2000 50'); animation: flowDot 18s linear infinite 3s; offset-rotate: 0deg; }
            .animated-dot-4 { offset-path: path('M 1920 300 Q 1600 400, 1300 300 T 700 300 T 0 300'); animation: flowDot 16.5s linear infinite 4.5s; offset-rotate: 0deg; }
            .animated-dot-5 { offset-path: path('M 100 600 Q 600 700, 1100 600 T 1900 600'); animation: flowDot 21s linear infinite 6s; offset-rotate: 0deg; }

            .grid-dot { fill: rgba(46, 64, 87, 0.2); animation: gridPulse 3s ease-in-out infinite; }
            @keyframes gridPulse { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.5; } }
          `}
        </style>
        {/* Flow paths */}
        <path className="flow-path" d="M 0 150 Q 300 50, 600 150 T 1200 150 T 1800 150" />
        <path className="flow-path" d="M 0 400 Q 400 300, 800 400 T 1600 400" />
        <path className="flow-path" d="M 200 50 Q 500 200, 800 50 T 1400 50 T 2000 50" />
        <path className="flow-path-dashed" d="M 1920 300 Q 1600 400, 1300 300 T 700 300 T 0 300" />
        <path className="flow-path" d="M 100 600 Q 600 700, 1100 600 T 1900 600" />
        <path className="flow-path-dashed" d="M 0 750 Q 400 650, 800 750 T 1600 750" />

        {/* Animated dots with labels - each g group moves along its path */}
        <g className="animated-dot-1">
          <circle className="flow-dot" r="6" cx="0" cy="0" />
          <text className="flow-text" dx="10">Bed Available</text>
        </g>
        <g className="animated-dot-2">
          <circle className="flow-dot" r="5" cx="0" cy="0" />
          <text className="flow-text" dx="10">Equipment Returned</text>
        </g>
        <g className="animated-dot-3">
          <circle className="flow-dot" r="5" cx="0" cy="0" />
          <text className="flow-text" dx="10">New Admission</text>
        </g>
        <g className="animated-dot-4">
          <circle className="flow-dot" r="5" cx="0" cy="0" />
          <text className="flow-text flow-text-reverse" dx="-10">Maintenance Alert</text>
        </g>
        <g className="animated-dot-5">
          <circle className="flow-dot" r="6" cx="0" cy="0" />
          <text className="flow-text" dx="10">Status Update</text>
        </g>

        {/* Grid dots */}
        {Array.from({ length: 24 }, (_, i) => (
          <circle
            key={i}
            className="grid-dot"
            r="3"
            cx={80 + (i % 8) * 240}
            cy={120 + Math.floor(i / 8) * 320}
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </svg>
    </div>
  );
}
