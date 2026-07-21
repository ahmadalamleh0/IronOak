/**
 * ServicesIllustrations — shared SVG placeholder artwork for all 7 service categories.
 *
 * Each illustration component can be swapped for final artwork independently.
 * Animation classes io-svc-svg-primary / io-svc-svg-secondary require
 * SVG_ANIM_CSS to be injected into the page (via a <style> tag).
 */

/* ─── Dot-grid background helper ─────────────────────────────────────────── */
const DotGrid = ({ id }) => (
  <>
    <defs>
      <pattern id={id} width="32" height="32" patternUnits="userSpaceOnUse">
        <circle cx="16" cy="16" r="1.1" fill="rgba(244,241,234,0.07)" />
      </pattern>
    </defs>
    <rect width="480" height="360" fill={`url(#${id})`} />
  </>
)

/* ─── 01 · Property Maintenance & Repairs ───────────────────────────────── */
export const IllustrationMaintenance = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg"
       style={{ width: '100%', height: 'auto', display: 'block' }} aria-hidden="true">
    <DotGrid id="io-g1" />
    <rect x="120" y="180" width="220" height="145" rx="2"
          stroke="rgba(244,241,234,0.18)" strokeWidth="1.3"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.05s' }} />
    <polyline points="100,182 230,72 360,182"
              stroke="rgba(244,241,234,0.22)" strokeWidth="1.5"
              className="io-svc-svg-secondary" style={{ animationDelay: '0.10s' }} />
    <rect x="200" y="255" width="60" height="70" rx="2"
          stroke="rgba(244,241,234,0.14)" strokeWidth="1.1"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.15s' }} />
    <rect x="138" y="202" width="46" height="38" rx="1"
          stroke="rgba(244,241,234,0.13)" strokeWidth="1"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.18s' }} />
    <rect x="276" y="202" width="46" height="38" rx="1"
          stroke="rgba(244,241,234,0.13)" strokeWidth="1"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.20s' }} />
    {/* Hammer */}
    <line x1="388" y1="310" x2="408" y2="248"
          stroke="#C9A24A" strokeWidth="5" strokeLinecap="round"
          className="io-svc-svg-primary" style={{ animationDelay: '0.40s' }} />
    <rect x="396" y="226" width="50" height="26" rx="5"
          stroke="#C9A24A" strokeWidth="1.8"
          className="io-svc-svg-primary" style={{ animationDelay: '0.48s' }} />
    <path d="M 396,226 L 386,218" stroke="#C9A24A" strokeWidth="1.5" strokeLinecap="round"
          className="io-svc-svg-primary" style={{ animationDelay: '0.55s' }} />
    {/* Gear */}
    <circle cx="112" cy="256" r="22"
            stroke="rgba(201,162,74,0.40)" strokeWidth="1.2"
            className="io-svc-svg-secondary" style={{ animationDelay: '0.60s' }} />
    <circle cx="112" cy="256" r="9"
            stroke="rgba(201,162,74,0.40)" strokeWidth="1.2"
            className="io-svc-svg-secondary" style={{ animationDelay: '0.65s' }} />
    {[0,45,90,135,180,225,270,315].map((deg, i) => {
      const r = 22, tr = 28, a = (deg * Math.PI) / 180
      return <line key={i}
               x1={112 + r * Math.cos(a)} y1={256 + r * Math.sin(a)}
               x2={112 + tr * Math.cos(a)} y2={256 + tr * Math.sin(a)}
               stroke="rgba(201,162,74,0.30)" strokeWidth="3.5" strokeLinecap="round"
               className="io-svc-svg-secondary" style={{ animationDelay: `${0.65 + i * 0.03}s` }} />
    })}
  </svg>
)

/* ─── 02 · Renovations & Remodeling ─────────────────────────────────────── */
export const IllustrationRenovations = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg"
       style={{ width: '100%', height: 'auto', display: 'block' }} aria-hidden="true">
    <DotGrid id="io-g2" />
    <path d="M 60,310 L 240,200 L 420,310 Z"
          stroke="rgba(244,241,234,0.15)" strokeWidth="1.2"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.05s' }} />
    <path d="M 60,310 L 60,60 L 240,200"
          stroke="rgba(244,241,234,0.18)" strokeWidth="1.3"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.10s' }} />
    <path d="M 420,310 L 420,60 L 240,200"
          stroke="rgba(244,241,234,0.18)" strokeWidth="1.3"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.13s' }} />
    <path d="M 60,60 L 240,50 L 420,60"
          stroke="rgba(244,241,234,0.12)" strokeWidth="1"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.16s' }} />
    <rect x="298" y="98" width="88" height="72" rx="2"
          stroke="rgba(244,241,234,0.16)" strokeWidth="1.1"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.20s' }} />
    <line x1="342" y1="98" x2="342" y2="170"
          stroke="rgba(244,241,234,0.10)" strokeWidth="1"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.22s' }} />
    {/* Paint roller */}
    <rect x="84" y="198" width="58" height="18" rx="4"
          stroke="#C9A24A" strokeWidth="1.8"
          className="io-svc-svg-primary" style={{ animationDelay: '0.38s' }} />
    <rect x="88" y="192" width="50" height="10" rx="4"
          stroke="#C9A24A" strokeWidth="1.6"
          className="io-svc-svg-primary" style={{ animationDelay: '0.44s' }} />
    <line x1="142" y1="194" x2="164" y2="148"
          stroke="#C9A24A" strokeWidth="2" strokeLinecap="round"
          className="io-svc-svg-primary" style={{ animationDelay: '0.50s' }} />
    <rect x="64" y="124" width="152" height="60" rx="2"
          stroke="rgba(201,162,74,0.30)" strokeWidth="1" strokeDasharray="6 3"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.55s' }} />
    {[136, 155, 174].map((y, i) => (
      <line key={y} x1="68" y1={y} x2="210" y2={y}
            stroke="rgba(201,162,74,0.22)" strokeWidth="1"
            className="io-svc-svg-secondary" style={{ animationDelay: `${0.60 + i * 0.03}s` }} />
    ))}
  </svg>
)

/* ─── 03 · Construction & Project Management ─────────────────────────────── */
export const IllustrationConstruction = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg"
       style={{ width: '100%', height: 'auto', display: 'block' }} aria-hidden="true">
    <defs>
      <pattern id="io-g3a" width="32" height="32" patternUnits="userSpaceOnUse">
        <circle cx="16" cy="16" r="1.1" fill="rgba(244,241,234,0.07)" />
      </pattern>
      <pattern id="io-g3b" width="48" height="48" patternUnits="userSpaceOnUse">
        <path d="M 48,0 L 0,0 L 0,48" stroke="rgba(201,162,74,0.07)" strokeWidth="0.6" fill="none" />
      </pattern>
    </defs>
    <rect width="480" height="360" fill="url(#io-g3a)" />
    <rect width="480" height="360" fill="url(#io-g3b)" />
    <line x1="40" y1="318" x2="440" y2="318"
          stroke="rgba(244,241,234,0.20)" strokeWidth="1.5"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.05s' }} />
    {/* Building frame */}
    <rect x="120" y="298" width="240" height="22" rx="2"
          stroke="#C9A24A" strokeWidth="1.6"
          className="io-svc-svg-primary" style={{ animationDelay: '0.20s' }} />
    {[148, 240, 332].map((x, i) => (
      <line key={x} x1={x} y1="298" x2={x} y2="88"
            stroke="#C9A24A" strokeWidth="2" strokeLinecap="round"
            className="io-svc-svg-primary" style={{ animationDelay: `${0.28 + i * 0.04}s` }} />
    ))}
    {[298, 232, 166, 100].map((y, i) => (
      <line key={y} x1="148" y1={y} x2="332" y2={y}
            stroke="#C9A24A" strokeWidth="1.4"
            className="io-svc-svg-primary" style={{ animationDelay: `${0.40 + i * 0.08}s` }} />
    ))}
    {/* Measurement bracket */}
    <path d="M 358,88 L 370,88 L 370,298 L 358,298"
          stroke="rgba(201,162,74,0.55)" strokeWidth="1.2" strokeLinecap="round"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.72s' }} />
    {[88, 166, 232, 298].map((y, i) => (
      <line key={y} x1="366" y1={y} x2="374" y2={y}
            stroke="rgba(201,162,74,0.55)" strokeWidth="1.2"
            className="io-svc-svg-secondary" style={{ animationDelay: `${0.75 + i * 0.04}s` }} />
    ))}
    {/* Clipboard */}
    <rect x="48" y="240" width="56" height="70" rx="3"
          stroke="rgba(244,241,234,0.16)" strokeWidth="1"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.80s' }} />
    {[258, 270, 282].map((y, i) => (
      <line key={y} x1="56" y1={y} x2={y === 270 ? 84 : y === 282 ? 90 : 96} y2={y}
            stroke="rgba(244,241,234,0.10)" strokeWidth="1"
            className="io-svc-svg-secondary" style={{ animationDelay: `${0.82 + i * 0.02}s` }} />
    ))}
  </svg>
)

/* ─── 04 · Interior Finishing ───────────────────────────────────────────── */
export const IllustrationInterior = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg"
       style={{ width: '100%', height: 'auto', display: 'block' }} aria-hidden="true">
    <DotGrid id="io-g4" />
    <path d="M 50,320 L 240,180 L 430,320"
          stroke="rgba(244,241,234,0.14)" strokeWidth="1.2"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.05s' }} />
    <path d="M 50,320 L 50,40 L 240,180"
          stroke="rgba(244,241,234,0.16)" strokeWidth="1.2"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.08s' }} />
    <path d="M 430,320 L 430,40 L 240,180"
          stroke="rgba(244,241,234,0.16)" strokeWidth="1.2"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.10s' }} />
    <path d="M 50,308 L 240,194" stroke="rgba(244,241,234,0.18)" strokeWidth="2" strokeLinecap="round"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.14s' }} />
    <path d="M 430,308 L 240,194" stroke="rgba(244,241,234,0.18)" strokeWidth="2" strokeLinecap="round"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.16s' }} />
    {/* Roller */}
    <line x1="240" y1="138" x2="240" y2="80"
          stroke="#C9A24A" strokeWidth="2.5" strokeLinecap="round"
          className="io-svc-svg-primary" style={{ animationDelay: '0.35s' }} />
    <path d="M 240,138 L 270,148" stroke="#C9A24A" strokeWidth="2" strokeLinecap="round"
          className="io-svc-svg-primary" style={{ animationDelay: '0.40s' }} />
    <line x1="270" y1="136" x2="270" y2="160"
          stroke="#C9A24A" strokeWidth="1.6" strokeLinecap="round"
          className="io-svc-svg-primary" style={{ animationDelay: '0.44s' }} />
    <rect x="260" y="140" width="58" height="16" rx="8"
          stroke="#C9A24A" strokeWidth="1.8"
          className="io-svc-svg-primary" style={{ animationDelay: '0.48s' }} />
    <path d="M 160,148 C 200,136 280,136 320,148"
          stroke="rgba(201,162,74,0.28)" strokeWidth="10" strokeLinecap="round"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.52s' }} />
    <path d="M 148,162 C 194,150 286,150 332,162"
          stroke="rgba(201,162,74,0.18)" strokeWidth="8" strokeLinecap="round"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.56s' }} />
    {/* Floor samples */}
    {[90, 118, 146].map((x, i) => (
      <rect key={x} x={x} y="286" width="22" height="22" rx="2"
            stroke={`rgba(201,162,74,${0.32 - i * 0.08})`} strokeWidth="1"
            className="io-svc-svg-secondary" style={{ animationDelay: `${0.70 + i * 0.04}s` }} />
    ))}
  </svg>
)

/* ─── 05 · Installations & Property Systems ─────────────────────────────── */
export const IllustrationInstallations = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg"
       style={{ width: '100%', height: 'auto', display: 'block' }} aria-hidden="true">
    <DotGrid id="io-g5" />
    <rect x="240" y="60" width="180" height="264" rx="3"
          stroke="rgba(244,241,234,0.16)" strokeWidth="1.3"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.05s' }} />
    {[84, 132, 180, 228, 276].map((y, row) =>
      [258, 300, 342, 384].map((x, col) => (
        <rect key={`${row}-${col}`} x={x} y={y} width="24" height="28" rx="2"
              stroke="rgba(244,241,234,0.10)" strokeWidth="0.8"
              className="io-svc-svg-secondary"
              style={{ animationDelay: `${0.08 + (row * 4 + col) * 0.02}s` }} />
      ))
    )}
    <line x1="60" y1="108" x2="250" y2="108"
          stroke="rgba(244,241,234,0.14)" strokeWidth="1"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.15s' }} />
    {/* Camera */}
    <path d="M 130,108 L 130,126" stroke="#C9A24A" strokeWidth="2" strokeLinecap="round"
          className="io-svc-svg-primary" style={{ animationDelay: '0.35s' }} />
    <rect x="104" y="126" width="54" height="26" rx="6"
          stroke="#C9A24A" strokeWidth="1.8"
          className="io-svc-svg-primary" style={{ animationDelay: '0.42s' }} />
    <circle cx="168" cy="139" r="10" stroke="#C9A24A" strokeWidth="1.6"
            className="io-svc-svg-primary" style={{ animationDelay: '0.50s' }} />
    <circle cx="168" cy="139" r="4" stroke="#C9A24A" strokeWidth="1.2"
            className="io-svc-svg-primary" style={{ animationDelay: '0.54s' }} />
    <line x1="104" y1="139" x2="88" y2="139" stroke="#C9A24A" strokeWidth="1.5" strokeLinecap="round"
          className="io-svc-svg-primary" style={{ animationDelay: '0.58s' }} />
    {/* Detection arc */}
    {[-30, -15, 0, 15, 30].map((angle, i) => {
      const rad = (angle * Math.PI) / 180
      return <line key={i} x1="178" y1="139"
               x2={178 + 130 * Math.cos(rad)} y2={139 + 130 * Math.sin(rad)}
               stroke={i === 2 ? 'rgba(201,162,74,0.55)' : 'rgba(201,162,74,0.22)'}
               strokeWidth={i === 2 ? '1.2' : '0.8'} strokeLinecap="round"
               className="io-svc-svg-secondary" style={{ animationDelay: `${0.62 + i * 0.06}s` }} />
    })}
    <path d="M 178,72 A 67,67 0 0,1 178,206"
          stroke="rgba(201,162,74,0.22)" strokeWidth="1"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.90s' }} />
    {/* Light fixture */}
    <circle cx="80" cy="290" r="20" stroke="rgba(201,162,74,0.35)" strokeWidth="1.2"
            className="io-svc-svg-secondary" style={{ animationDelay: '0.95s' }} />
    {[0,45,90,135,180,225,270,315].map((deg, i) => {
      const rad = (deg * Math.PI) / 180
      return <line key={i}
               x1={80 + 22 * Math.cos(rad)} y1={290 + 22 * Math.sin(rad)}
               x2={80 + 32 * Math.cos(rad)} y2={290 + 32 * Math.sin(rad)}
               stroke="rgba(201,162,74,0.22)" strokeWidth="1.2" strokeLinecap="round"
               className="io-svc-svg-secondary" style={{ animationDelay: `${1.0 + i * 0.03}s` }} />
    })}
  </svg>
)

/* ─── 06 · Exterior & Outdoor Improvements ──────────────────────────────── */
export const IllustrationExterior = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg"
       style={{ width: '100%', height: 'auto', display: 'block' }} aria-hidden="true">
    <DotGrid id="io-g6" />
    <line x1="40" y1="300" x2="440" y2="300"
          stroke="rgba(244,241,234,0.20)" strokeWidth="1.5"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.05s' }} />
    {/* Building */}
    <rect x="120" y="72" width="240" height="230" rx="3"
          stroke="#C9A24A" strokeWidth="1.8"
          className="io-svc-svg-primary" style={{ animationDelay: '0.18s' }} />
    <rect x="116" y="66" width="248" height="12" rx="2"
          stroke="#C9A24A" strokeWidth="1.4"
          className="io-svc-svg-primary" style={{ animationDelay: '0.24s' }} />
    {[100, 148, 196, 244].map((y, row) =>
      [138, 192, 246, 300].map((x, col) => (
        <rect key={`${row}-${col}`} x={x} y={y} width="34" height="32" rx="2"
              stroke="rgba(201,162,74,0.38)" strokeWidth="1.2"
              className="io-svc-svg-secondary"
              style={{ animationDelay: `${0.28 + (row * 4 + col) * 0.025}s` }} />
      ))
    )}
    <rect x="210" y="248" width="60" height="54" rx="2"
          stroke="#C9A24A" strokeWidth="1.6"
          className="io-svc-svg-primary" style={{ animationDelay: '0.70s' }} />
    {[300, 306].map((y, i) => (
      <line key={y} x1={198 - i * 8} y1={y} x2={282 + i * 8} y2={y}
            stroke={`rgba(201,162,74,${0.50 - i * 0.15})`} strokeWidth="2"
            className="io-svc-svg-secondary" style={{ animationDelay: `${0.75 + i * 0.03}s` }} />
    ))}
    {/* Tree */}
    <line x1="406" y1="300" x2="406" y2="220"
          stroke="rgba(244,241,234,0.22)" strokeWidth="2" strokeLinecap="round"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.82s' }} />
    <circle cx="406" cy="200" r="28" stroke="rgba(244,241,234,0.18)" strokeWidth="1.2"
            className="io-svc-svg-secondary" style={{ animationDelay: '0.86s' }} />
    <circle cx="406" cy="185" r="18" stroke="rgba(244,241,234,0.14)" strokeWidth="1"
            className="io-svc-svg-secondary" style={{ animationDelay: '0.90s' }} />
    <path d="M 68,300 C 68,278 100,272 100,300"
          stroke="rgba(244,241,234,0.18)" strokeWidth="1.2"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.92s' }} />
  </svg>
)

/* ─── 07 · Specialty & Custom Projects ──────────────────────────────────── */
export const IllustrationSpecialty = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg"
       style={{ width: '100%', height: 'auto', display: 'block' }} aria-hidden="true">
    <defs>
      <pattern id="io-g7a" width="32" height="32" patternUnits="userSpaceOnUse">
        <circle cx="16" cy="16" r="1.1" fill="rgba(244,241,234,0.07)" />
      </pattern>
      <pattern id="io-g7b" width="60" height="60" patternUnits="userSpaceOnUse">
        <path d="M 60,0 L 0,0 L 0,60" stroke="rgba(201,162,74,0.07)" strokeWidth="0.6" fill="none" />
      </pattern>
    </defs>
    <rect width="480" height="360" fill="url(#io-g7a)" />
    <rect width="480" height="360" fill="url(#io-g7b)" />
    <circle cx="240" cy="182" r="120" stroke="rgba(244,241,234,0.14)" strokeWidth="1"
            className="io-svc-svg-secondary" style={{ animationDelay: '0.05s' }} />
    <circle cx="240" cy="182" r="88" stroke="rgba(244,241,234,0.10)" strokeWidth="0.8"
            className="io-svc-svg-secondary" style={{ animationDelay: '0.08s' }} />
    {/* Compass arms */}
    <line x1="240" y1="94" x2="240" y2="270" stroke="#C9A24A" strokeWidth="1.2"
          className="io-svc-svg-primary" style={{ animationDelay: '0.25s' }} />
    <line x1="152" y1="182" x2="328" y2="182" stroke="#C9A24A" strokeWidth="1.2"
          className="io-svc-svg-primary" style={{ animationDelay: '0.30s' }} />
    <line x1="178" y1="120" x2="302" y2="244"
          stroke="rgba(201,162,74,0.45)" strokeWidth="0.8"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.35s' }} />
    <line x1="302" y1="120" x2="178" y2="244"
          stroke="rgba(201,162,74,0.45)" strokeWidth="0.8"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.38s' }} />
    {/* Compass points */}
    <polygon points="240,94 232,120 240,108 248,120"
             stroke="#C9A24A" strokeWidth="1.5" fill="rgba(201,162,74,0.18)"
             className="io-svc-svg-primary" style={{ animationDelay: '0.45s' }} />
    {[
      [[240,270],[232,244],[240,256],[248,244]],
      [[328,182],[302,174],[316,182],[302,190]],
      [[152,182],[178,174],[164,182],[178,190]],
    ].map((pts, i) => (
      <polygon key={i} points={pts.map(p => p.join(',')).join(' ')}
               stroke="#C9A24A" strokeWidth="1.5" fill="none"
               className="io-svc-svg-primary" style={{ animationDelay: `${0.50 + i * 0.04}s` }} />
    ))}
    <circle cx="240" cy="182" r="14" stroke="#C9A24A" strokeWidth="1.6"
            className="io-svc-svg-primary" style={{ animationDelay: '0.62s' }} />
    <circle cx="240" cy="182" r="4" stroke="#C9A24A" strokeWidth="1.2"
            className="io-svc-svg-primary" style={{ animationDelay: '0.66s' }} />
    {/* Degree ticks */}
    {Array.from({ length: 24 }).map((_, i) => {
      const a = (i * 15 * Math.PI) / 180
      const r1 = 88, r2 = i % 6 === 0 ? 100 : 94
      return <line key={i}
               x1={240 + r1 * Math.sin(a)} y1={182 - r1 * Math.cos(a)}
               x2={240 + r2 * Math.sin(a)} y2={182 - r2 * Math.cos(a)}
               stroke="rgba(201,162,74,0.30)" strokeWidth="1" strokeLinecap="round"
               className="io-svc-svg-secondary" style={{ animationDelay: `${0.70 + i * 0.015}s` }} />
    })}
    {/* Hexagon */}
    {Array.from({ length: 6 }).map((_, i) => {
      const a = ((i * 60 - 30) * Math.PI) / 180
      const b = (((i + 1) * 60 - 30) * Math.PI) / 180
      const r = 36, cx = 390, cy = 300
      return <line key={i}
               x1={cx + r * Math.cos(a)} y1={cy + r * Math.sin(a)}
               x2={cx + r * Math.cos(b)} y2={cy + r * Math.sin(b)}
               stroke="rgba(201,162,74,0.35)" strokeWidth="1.2"
               className="io-svc-svg-secondary" style={{ animationDelay: `${1.05 + i * 0.05}s` }} />
    })}
  </svg>
)

/* ─── Ordered array — index matches service order 01–07 ─────────────────── */
export const ILLUSTRATION_COMPONENTS = [
  IllustrationMaintenance,
  IllustrationRenovations,
  IllustrationConstruction,
  IllustrationInterior,
  IllustrationInstallations,
  IllustrationExterior,
  IllustrationSpecialty,
]

/* ─── CSS required by the stroke-draw animations ────────────────────────── */
export const SVG_ANIM_CSS = `
@keyframes io-svc-draw {
  from { stroke-dashoffset: 2000; opacity: 0; }
  to   { stroke-dashoffset: 0;    opacity: 1; }
}
.io-svc-svg-primary {
  stroke-dasharray: 2000; stroke-dashoffset: 2000;
  animation: io-svc-draw 1.0s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.io-svc-svg-secondary {
  stroke-dasharray: 1500; stroke-dashoffset: 1500;
  animation: io-svc-draw 0.85s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
@media (prefers-reduced-motion: reduce) {
  .io-svc-svg-primary, .io-svc-svg-secondary {
    animation: none !important;
    stroke-dashoffset: 0 !important;
    opacity: 1 !important;
  }
}
`
