const ITEMS = [
  'Licensed Trades',
  'General Contracting',
  'Emergency Repairs',
  'Preventative Maintenance',
  'Interior & Exterior Work',
  'Residential & Commercial',
  'CCTV Installation',
  'On-Time, Every Time',
]

const CSS = `
  @keyframes io-scroll {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  .io-banner {
    background: #0D1520;
    height: 62px;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
  }
  .io-banner::before,
  .io-banner::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 180px;
    z-index: 2;
    pointer-events: none;
  }
  @media (max-width: 600px) {
    .io-banner::before,
    .io-banner::after { width: 72px; }
  }
  .io-banner::before {
    left: 0;
    background: linear-gradient(
      to right,
      #F4F1EA 0%,
      rgba(244,241,234,0.85) 30%,
      rgba(244,241,234,0.30) 70%,
      transparent 100%
    );
  }
  .io-banner::after {
    right: 0;
    background: linear-gradient(
      to left,
      #F4F1EA 0%,
      rgba(244,241,234,0.85) 30%,
      rgba(244,241,234,0.30) 70%,
      transparent 100%
    );
  }
  .io-banner-track {
    display: inline-flex;
    align-items: center;
    flex-shrink: 0;
    white-space: nowrap;
    animation: io-scroll 28s linear infinite;
    will-change: transform;
  }
  .io-banner-item {
    display: inline-flex;
    align-items: center;
    gap: 0;
    flex-shrink: 0;
  }
  .io-banner-label {
    font-family: "Manrope", system-ui, sans-serif;
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #F4F1EA;
    white-space: nowrap;
  }
  .io-banner-sep {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    flex-shrink: 0;
  }
  .io-banner-diamond {
    display: block;
    width: 5px;
    height: 5px;
    border-radius: 1px;
    background: rgba(201,162,74,0.52);
    transform: rotate(45deg);
    flex-shrink: 0;
  }
  @media (prefers-reduced-motion: reduce) {
    .io-banner-track { animation-play-state: paused; }
  }
`

const Diamond = () => (
  <span className="io-banner-sep" aria-hidden="true">
    <span className="io-banner-diamond" />
  </span>
)

// Double the list for seamless loop — animation moves -50% (one full set)
const DOUBLED = [...ITEMS, ...ITEMS]

const TrustStrip = () => (
  <div className="io-banner" role="region" aria-label="Service capabilities">
    <style>{CSS}</style>
    {/* Static accessible version hidden from sighted users */}
    <ul style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap' }}>
      {ITEMS.map((item) => <li key={item}>{item}</li>)}
    </ul>
    <div className="io-banner-track" aria-hidden="true">
      {DOUBLED.map((item, i) => (
        <span key={i} className="io-banner-item">
          <span className="io-banner-label">{item}</span>
          <Diamond />
        </span>
      ))}
    </div>
  </div>
)

export default TrustStrip
