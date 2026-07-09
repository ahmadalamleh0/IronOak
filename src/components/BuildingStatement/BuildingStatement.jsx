const BuildingStatement = () => (
  <section
    aria-label="Brand statement"
    style={{
      position: 'relative',
      width: '100%',
      minHeight: 'clamp(480px, 72vw, 700px)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
    }}
  >
    {/* Background image — building at bottom, sky at top */}
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(/images/building-statement.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat',
      }}
    />

    {/* Gradient overlay — dark at top for text, fades to reveal building */}
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        background: [
          'linear-gradient(',
          '  to bottom,',
          '  rgba(5,9,16,0.78) 0%,',
          '  rgba(5,9,16,0.52) 38%,',
          '  rgba(5,9,16,0.22) 65%,',
          '  rgba(5,9,16,0.08) 100%',
          ')',
        ].join(''),
      }}
    />

    {/* Content — sits in upper sky area */}
    <div
      style={{
        position: 'relative',
        zIndex: 1,
        padding: 'clamp(64px, 12vw, 120px) clamp(24px, 6vw, 80px) clamp(48px, 8vw, 80px)',
        maxWidth: '860px',
      }}
    >
      {/* Headline */}
      <h2
        style={{
          fontFamily: '"Inter Tight", Inter, Arial, sans-serif',
          fontWeight: 900,
          fontSize: 'clamp(2.6rem, 7vw, 5.4rem)',
          letterSpacing: '-0.04em',
          lineHeight: 0.95,
          color: '#F4F1EA',
          margin: 0,
          textShadow: '0 2px 32px rgba(0,0,0,0.55)',
        }}
      >
        Every Property.
        <br />
        <span
          style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontStyle: 'italic',
            fontWeight: 600,
            fontSize: 'clamp(2.4rem, 6.4vw, 5rem)',
            letterSpacing: '-0.02em',
            color: 'rgba(244,241,234,0.82)',
          }}
        >
          Properly.
        </span>
      </h2>
    </div>
  </section>
)

export default BuildingStatement
