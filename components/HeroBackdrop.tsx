/**
 * Ambient "signal field" behind the hero headline.
 *
 * Pure SVG + CSS keyframes (defined in app/globals.css) — ships zero JS and
 * automatically freezes under `prefers-reduced-motion`. It evokes the EMS
 * motif: electrical muscle-stimulation pulses racing along signal lines, an
 * emitter broadcasting rings, and live nodes blinking across a faint mesh.
 *
 * Every path uses `pathLength={100}` so the travelling dash pattern is
 * resolution-independent; each dash period divides 100 evenly, so the loop is
 * perfectly seamless.
 */

const LIME = '#C8F000';

// Signal lines the pulses travel along. `dash` periods all divide 100 -> seamless.
const SIGNAL_LINES: {
  d: string;
  dur: number;
  delay: number;
  dash: string;
}[] = [
  { d: 'M-40,250 H520 l14,-34 l16,64 l14,-30 H1480', dur: 5.5, delay: 0, dash: '6 44' },
  {
    d: 'M-40,432 C240,402 400,472 720,432 C1040,392 1200,472 1480,432',
    dur: 8.5,
    delay: 1.1,
    dash: '4 46',
  },
  { d: 'M-40,560 H900 l12,-42 l18,80 l12,-38 H1480', dur: 6.4, delay: 0.5, dash: '8 42' },
  {
    d: 'M-40,690 C260,720 420,650 720,690 C1020,730 1180,650 1480,690',
    dur: 9.5,
    delay: 2.1,
    dash: '5 45',
  },
];

// Faint constellation mesh — static nodes, a few blink.
const NODES: { cx: number; cy: number; r: number; blink?: boolean; dur?: number; delay?: number }[] =
  [
    { cx: 120, cy: 235, r: 2.5, blink: true, dur: 3.4, delay: 0 },
    { cx: 980, cy: 175, r: 3, blink: true, dur: 4.2, delay: 0.8 },
    { cx: 1180, cy: 300, r: 2, blink: true, dur: 3.8, delay: 1.6 },
    { cx: 1305, cy: 560, r: 2.5, blink: true, dur: 4.6, delay: 0.4 },
    { cx: 760, cy: 775, r: 2, blink: true, dur: 3.2, delay: 2.2 },
    { cx: 430, cy: 470, r: 2, blink: true, dur: 5, delay: 1.2 },
  ];

const MESH: { x1: number; y1: number; x2: number; y2: number }[] = [
  { x1: 980, y1: 175, x2: 1180, y2: 300 },
  { x1: 1180, y1: 300, x2: 1305, y2: 560 },
  { x1: 120, y1: 235, x2: 430, y2: 470 },
  { x1: 430, y1: 470, x2: 760, y2: 775 },
];

export default function HeroBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
      style={{
        maskImage:
          'radial-gradient(ellipse 92% 74% at 50% 46%, #000 52%, transparent 100%)',
        WebkitMaskImage:
          'radial-gradient(ellipse 92% 74% at 50% 46%, #000 52%, transparent 100%)',
      }}
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {/* Faint constellation mesh */}
        {MESH.map((l, i) => (
          <line
            key={`mesh-${i}`}
            x1={l.x1}
            y1={l.y1}
            x2={l.x2}
            y2={l.y2}
            stroke="#FFFFFF"
            strokeOpacity={0.05}
            strokeWidth={1}
          />
        ))}

        {/* Signal lines + travelling lime pulses */}
        {SIGNAL_LINES.map((line, i) => (
          <g key={`sig-${i}`}>
            {/* Static baseline */}
            <path
              d={line.d}
              stroke="#FFFFFF"
              strokeOpacity={0.06}
              strokeWidth={1}
            />
            {/* Travelling pulse of light */}
            <path
              className="signal-pulse"
              d={line.d}
              pathLength={100}
              stroke={LIME}
              strokeWidth={2}
              strokeLinecap="round"
              strokeDasharray={line.dash}
              style={{
                animationDuration: `${line.dur}s`,
                animationDelay: `${line.delay}s`,
                filter: 'drop-shadow(0 0 5px rgba(200,240,0,0.65))',
              }}
            />
          </g>
        ))}

        {/* Emitter — concentric rings broadcasting outward */}
        <g>
          <circle cx={240} cy={620} r={4} fill={LIME} fillOpacity={0.8} />
          {[0, 1.3, 2.6].map((delay, i) => (
            <circle
              key={`ring-${i}`}
              className="ring-emit"
              cx={240}
              cy={620}
              r={150}
              stroke={LIME}
              strokeWidth={1.2}
              style={{ animationDuration: '4s', animationDelay: `${delay}s` }}
            />
          ))}
        </g>

        {/* Constellation nodes */}
        {NODES.map((n, i) => (
          <circle
            key={`node-${i}`}
            className={n.blink ? 'node-pulse' : undefined}
            cx={n.cx}
            cy={n.cy}
            r={n.r}
            fill={LIME}
            style={
              n.blink
                ? { animationDuration: `${n.dur}s`, animationDelay: `${n.delay}s` }
                : undefined
            }
          />
        ))}
      </svg>
    </div>
  );
}
