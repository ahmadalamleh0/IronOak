import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page Not Found | IronOak Property Services'
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Header ready={true} />
      <main
        style={{
          background: '#07111D',
          minHeight: '100dvh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '120px 24px 80px',
          textAlign: 'center',
          fontFamily: '"Manrope", system-ui, sans-serif',
        }}
      >
        <p style={{ fontSize: '0.60rem', fontWeight: 800, letterSpacing: '0.30em', textTransform: 'uppercase', color: 'rgba(201,162,74,0.55)', margin: '0 0 22px' }}>
          404 — Page Not Found
        </p>
        <h1
          style={{
            fontFamily: '"Inter Tight", Inter, Arial, sans-serif',
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            lineHeight: 0.97,
            color: '#F4F1EA',
            margin: '0 0 22px',
          }}
        >
          This page doesn't exist.
        </h1>
        <p style={{ fontSize: '0.97rem', lineHeight: 1.72, color: 'rgba(244,241,234,0.45)', maxWidth: 400, margin: '0 auto 40px' }}>
          The link may be broken or the page may have moved. Head back home to find what you're looking for.
        </p>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link
            to="/"
            style={{
              display: 'inline-flex', alignItems: 'center', padding: '0 28px', height: 48,
              background: 'linear-gradient(to bottom, #dbb96a, #a9802f)',
              border: '1px solid rgba(201,162,74,0.45)',
              borderRadius: 4, fontFamily: '"Manrope", system-ui', fontWeight: 800,
              fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase',
              color: '#07111D', textDecoration: 'none',
            }}
          >
            Return Home
          </Link>
          <Link
            to="/#services-explorer"
            style={{
              display: 'inline-flex', alignItems: 'center', padding: '0 24px', height: 48,
              border: '1px solid rgba(244,241,234,0.12)',
              borderRadius: 4, fontFamily: '"Manrope", system-ui', fontWeight: 700,
              fontSize: '0.70rem', letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'rgba(244,241,234,0.50)', textDecoration: 'none',
            }}
          >
            View Services
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
