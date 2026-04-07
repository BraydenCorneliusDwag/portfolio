export function Skyscrapers({ className }: { className?: string }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.3, strokeLinecap: "round" as const };
  const O = 14; // overshoot px

  const buildings = [
    { lx: 80,  rx: 150, top: 160 },
    { lx: 138, rx: 200, top: 240 },
    { lx: 185, rx: 268, top: 310 },
    { lx: 255, rx: 325, top: 190 },
    { lx: 312, rx: 365, top: 260 },
    { lx: 350, rx: 430, top: 290, fading: true },
  ];

  return (
    <svg viewBox="0 0 680 520" width="100%" height="100%" className={className}>
      <defs>
        <linearGradient id="ft" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="fb" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="fr" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="fl" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
        </linearGradient>
        <mask id="mft"><rect x="0" y="0" width="680" height="520" fill="url(#ft)" /></mask>
        <mask id="mfb"><rect x="0" y="0" width="680" height="520" fill="url(#fb)" /></mask>
        <mask id="mfr"><rect x="0" y="0" width="680" height="520" fill="url(#fr)" /></mask>
        <mask id="mfl"><rect x="0" y="0" width="680" height="520" fill="url(#fl)" /></mask>
      </defs>

      {buildings.map(({ lx, rx, top, fading }, i) => {
        const op = fading ? 0.4 : 1;
        return (
          <g key={i}>
            {/* Left vertical — overshoots top and bottom */}
            <line {...s} x1={lx} y1={top - O} x2={lx} y2={490} mask="url(#mft)" />
            <line {...s} x1={lx} y1={top} x2={lx} y2={490 + O} mask="url(#mfb)" />
            {/* Right vertical */}
            <line {...s} x1={rx} y1={top - O} x2={rx} y2={490} mask="url(#mft)" opacity={op} />
            <line {...s} x1={rx} y1={top} x2={rx} y2={490 + O} mask="url(#mfb)" opacity={op} />
            {/* Top horizontal — overshoots left and right */}
            <line {...s} x1={lx - O} y1={top} x2={lx + O} y2={top} mask="url(#mfl)" />
            <line {...s} x1={lx - O} y1={top} x2={rx + O} y2={top} mask={fading ? "url(#mfr)" : undefined} opacity={fading ? 0.5 : 1} />
            <line {...s} x1={rx - O} y1={top} x2={rx + O} y2={top} mask="url(#mfr)" opacity={op} />
          </g>
        );
      })}
    </svg>
  );
}