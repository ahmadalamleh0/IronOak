const CD_CSS = `
  .io-cd-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
  }
  @media (max-width: 720px) {
    .io-cd-grid { grid-template-columns: 1fr; }
  }

  .io-cd-card {
    display: flex;
    flex-direction: column;
    padding: 32px 28px;
    border-radius: 16px;
    border: 1px solid rgba(201,162,74,0.12);
    background: rgba(255,255,255,0.025);
    text-decoration: none;
    cursor: pointer;
    transition: background 200ms ease, border-color 200ms ease, transform 200ms ease, box-shadow 200ms ease;
  }
  .io-cd-card:hover {
    background: rgba(201,162,74,0.07);
    border-color: rgba(201,162,74,0.30);
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(0,0,0,0.22);
  }
  .io-cd-card:focus-visible {
    outline: 2px solid rgba(201,162,74,0.70);
    outline-offset: 3px;
  }

  .io-cd-card-featured {
    border-color: rgba(201,162,74,0.28);
    background: rgba(201,162,74,0.055);
  }
  .io-cd-card-featured:hover {
    border-color: rgba(201,162,74,0.48);
    background: rgba(201,162,74,0.10);
  }

  .io-cd-icon-wrap {
    width: 46px; height: 46px; border-radius: 11px;
    background: rgba(201,162,74,0.09);
    border: 1px solid rgba(201,162,74,0.20);
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 24px;
    flex-shrink: 0;
  }
  .io-cd-card-featured .io-cd-icon-wrap {
    background: rgba(201,162,74,0.14);
    border-color: rgba(201,162,74,0.35);
  }

  .io-cd-label {
    font-family: "Inter Tight", Inter, Arial, sans-serif;
    font-size: clamp(1.05rem, 2vw, 1.2rem);
    font-weight: 800; letter-spacing: -0.02em; line-height: 1.1;
    color: #F4F1EA; margin: 0 0 8px;
  }

  .io-cd-sub {
    font-family: "Manrope", system-ui, sans-serif;
    font-size: 0.88rem; line-height: 1.55;
    color: rgba(244,241,234,0.48);
    margin: 0; flex: 1;
  }

  .io-cd-cta-line {
    display: flex; align-items: center; gap: 6px;
    margin-top: 24px; padding-top: 20px;
    border-top: 1px solid rgba(201,162,74,0.10);
    font-family: "Manrope", system-ui, sans-serif;
    font-size: 0.67rem; font-weight: 700; letter-spacing: 0.10em;
    text-transform: uppercase; color: #C9A24A;
  }
`

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 8h8M8 4l4 4-4 4"/>
  </svg>
)

const WaysToConnect = () => (
  <section id="ways-to-connect" style={{ background: '#07111D', padding: 'clamp(72px, 10vw, 104px) 24px' }}>
    <style>{CD_CSS}</style>
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

      {/* Heading */}
      <div style={{ textAlign: 'center', marginBottom: '52px', maxWidth: '640px', margin: '0 auto 52px' }}>
        <h2 style={{
          fontFamily: '"Inter Tight", Inter, Arial, sans-serif',
          fontWeight: 900,
          fontSize: 'clamp(1.85rem, 4vw, 2.8rem)',
          letterSpacing: '-0.035em', lineHeight: 1.07,
          color: '#F4F1EA', margin: '0 0 16px',
        }}>
          Have a property project in mind?
        </h2>
        <p style={{
          fontFamily: '"Manrope", system-ui, sans-serif',
          fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
          lineHeight: 1.74,
          color: 'rgba(244,241,234,0.50)',
          margin: 0,
        }}>
          Tell us what needs attention. We'll help you understand the next step.
        </p>
      </div>

      {/* 3 CTA cards */}
      <div className="io-cd-grid">

        {/* Request a Quote — featured centre */}
        <a href="#contact" className="io-cd-card io-cd-card-featured">
          <div className="io-cd-icon-wrap">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#C9A24A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 11l3 3L22 4"/>
              <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
            </svg>
          </div>
          <p className="io-cd-label">Request a Quote</p>
          <p className="io-cd-sub">
            Tell us about your project.<br />No commitment required.
          </p>
          <div className="io-cd-cta-line">
            Get started <ArrowIcon />
          </div>
        </a>

        {/* Call IronOak */}
        <a href="tel:+14165709074" className="io-cd-card">
          <div className="io-cd-icon-wrap">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#C9A24A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .98h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
          </div>
          <p className="io-cd-label">Call IronOak</p>
          <p className="io-cd-sub">
            (416) 570-9074
            <br />
            <span style={{ fontSize: '0.80rem', opacity: 0.70 }}>Mon–Fri, 8am–6pm</span>
          </p>
          <div className="io-cd-cta-line">
            Call now <ArrowIcon />
          </div>
        </a>

        {/* Send a Message */}
        <a href="mailto:info@ironoakpropertyservices.com" className="io-cd-card">
          <div className="io-cd-icon-wrap">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#C9A24A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="M2 8l10 6 10-6"/>
            </svg>
          </div>
          <p className="io-cd-label">Send a Message</p>
          <p className="io-cd-sub">info@ironoakpropertyservices.com</p>
          <div className="io-cd-cta-line">
            Send email <ArrowIcon />
          </div>
        </a>

      </div>
    </div>
  </section>
)

export default WaysToConnect
