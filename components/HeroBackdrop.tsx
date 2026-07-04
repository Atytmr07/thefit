/**
 * Ambient "signal field" behind the hero headline.
 *
 * Pure SVG + CSS keyframes (defined in app/globals.css) — ships zero JS and
 * automatically freezes under `prefers-reduced-motion`. It evokes the EMS
 * motif: electrical muscle-stimulation pulses racing along signal lines, two
 * emitters broadcasting rings, live nodes over a faint mesh, and a slow light
 * sweep washing across the whole field.
 *
 * Every travelling path uses `pathLength={100}` and a dash period that divides
 * 100, so the 0->100 offset loop is perfectly seamless.
 */

const LIME = '#C8F000';
const PULSE_GLOW = 'drop-shadow(0 0 8px rgba(200,240,0,0.9))';
const NODE_GLOW = 'drop-shadow(0 0 6px rgba(200,240,0,0.85))';

// Signal lines the pulses travel along. All dash periods = 50 -> seamless loop.
const SIGNAL_LINES: { d: string; dur: number; delay: number; dash: string }[] = [
  { d: 'M-40,180 H480 l14,-30 l16,58 l14,-28 H1480', dur: 5, delay: 0, dash: '12 38' },
  {
    d: 'M-40,300 C240,272 400,338 720,300 C1040,262 1200,338 1480,300',
    dur: 7,
    delay: 0.8,
    dash: '10 40',
  },
  { d: 'M-40,430 H860 l12,-38 l18,74 l12,-36 H1480', dur: 5.8, delay: 0.4, dash: '12 38' },
  {
    d: 'M-40,560 C260,588 420,522 720,560 C1020,598 1180,522 1480,560',
    dur: 8,
    delay: 1.6,
    dash: '10 40',
  },
  { d: 'M-40,690 H600 l14,-32 l16,62 l14,-30 H1480', dur: 6.4, delay: 1.1, dash: '12 38' },
  {
    d: 'M-40,800 C240,772 420,838 720,800 C1020,762 1200,838 1480,800',
    dur: 9,
    delay: 2,
    dash: '8 42',
  },
];

// Faint constellation nodes, all gently blinking.
const NODES: { cx: number; cy: number; r: number; dur: number; delay: number }[] = [
  { cx: 120, cy: 235, r: 3, dur: 3.4, delay: 0 },
  { cx: 980, cy: 150, r: 3.5, dur: 4.2, delay: 0.8 },
  { cx: 1200, cy: 300, r: 3, dur: 3.8, delay: 1.6 },
  { cx: 1305, cy: 520, r: 3, dur: 4.6, delay: 0.4 },
  { cx: 760, cy: 720, r: 3, dur: 3.2, delay: 2.2 },
  { cx: 430, cy: 470, r: 2.5, dur: 5, delay: 1.2 },
  { cx: 1080, cy: 640, r: 2.5, dur: 3.6, delay: 0.6 },
];

const MESH: { x1: number; y1: number; x2: number; y2: number }[] = [
  { x1: 980, y1: 150, x2: 1200, y2: 300 },
  { x1: 1200, y1: 300, x2: 1305, y2: 520 },
  { x1: 120, y1: 235, x2: 430, y2: 470 },
  { x1: 430, y1: 470, x2: 760, y2: 720 },
  { x1: 1080, y1: 640, x2: 1305, y2: 520 },
];

// Two emitters broadcasting rings, at opposite corners for balance.
const EMITTERS: { cx: number; cy: number }[] = [
  { cx: 240, cy: 620 },
  { cx: 1180, cy: 260 },
];

export default function HeroBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
      style={{
        maskImage:
          'radial-gradient(ellipse 94% 78% at 50% 46%, #000 58%, transparent 100%)',
        WebkitMaskImage:
          'radial-gradient(ellipse 94% 78% at 50% 46%, #000 58%, transparent 100%)',
      }}
    >
      {/* Slow diagonal light sweep — obvious-but-soft ambient motion */}
      <div className="hero-sweep absolute inset-0" />

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
            strokeOpacity={0.08}
            strokeWidth={1}
          />
        ))}

        {/* Signal lines + travelling lime pulses */}
        {SIGNAL_LINES.map((line, i) => (
          <g key={`sig-${i}`}>
            <path d={line.d} stroke="#FFFFFF" strokeOpacity={0.1} strokeWidth={1} />
            <path
              className="signal-pulse"
              d={line.d}
              pathLength={100}
              stroke={LIME}
              strokeWidth={3}
              strokeLinecap="round"
              strokeDasharray={line.dash}
              style={{
                animationDuration: `${line.dur}s`,
                animationDelay: `${line.delay}s`,
                filter: PULSE_GLOW,
              }}
            />
          </g>
        ))}

        {/* Emitters — concentric rings broadcasting outward */}
        {EMITTERS.map((e, ei) => (
          <g key={`emit-${ei}`}>
            <circle
              cx={e.cx}
              cy={e.cy}
              r={5}
              fill={LIME}
              fillOpacity={0.9}
              style={{ filter: NODE_GLOW }}
            />
            {[0, 1.3, 2.6].map((delay, i) => (
              <circle
                key={`ring-${ei}-${i}`}
                className="ring-emit"
                cx={e.cx}
                cy={e.cy}
                r={170}
                stroke={LIME}
                strokeWidth={1.6}
                style={{ animationDuration: '4s', animationDelay: `${delay + ei * 0.6}s` }}
              />
            ))}
          </g>
        ))}

        {/* Constellation nodes */}
        {NODES.map((n, i) => (
          <circle
            key={`node-${i}`}
            className="node-pulse"
            cx={n.cx}
            cy={n.cy}
            r={n.r}
            fill={LIME}
            style={{
              animationDuration: `${n.dur}s`,
              animationDelay: `${n.delay}s`,
              filter: NODE_GLOW,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
