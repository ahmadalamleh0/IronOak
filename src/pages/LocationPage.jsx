import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton/FloatingWhatsAppButton.jsx'
import {
  LOCATION_PAGES,
  LOCATION_SERVICES,
  LOCATION_PROPERTY_TYPES,
  LOCATION_PROCESS,
  getLocationBySlug,
} from '../data/locationPages.js'
import { SITE_URL, BUSINESS_NAME } from '../config/site.js'

// Matches the phoneDisplay/phoneHref convention used in servicePages.js richContent
const PHONE_DISPLAY = '(416) 570-9074'
const PHONE_HREF = 'tel:+14165709074'

/* Same visual language as RichServiceTemplate.jsx (cream / navy / gold) so a
   location page feels like a natural extension of the service pages it
   links to — a leaner, page-specific stylesheet rather than importing the
   1700+ line service template wholesale. */
const CSS = `
.lp-page { background: #F4F1EA; color: #07111D; font-family: "Manrope", system-ui, sans-serif; }
.lp-inner { max-width: 1100px; margin: 0 auto; padding: 0 clamp(20px, 5vw, 64px); box-sizing: border-box; }

/* ── Hero ──────────────────────────────────────────────────── */
.lp-hero { position: relative; min-height: clamp(420px, 62vh, 600px); display: flex; align-items: flex-end; overflow: hidden; background: #07111D; }
.lp-hero-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center 40%; }
.lp-hero-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(180deg, rgba(7,17,29,0.60) 0%, rgba(7,17,29,0.40) 35%, rgba(7,17,29,0.92) 100%);
}
.lp-hero-content { position: relative; z-index: 1; width: 100%; padding: clamp(120px, 16vh, 156px) 0 clamp(44px, 6vh, 60px); }

.lp-breadcrumb { display: flex; align-items: center; gap: 8px; margin-bottom: 20px; flex-wrap: wrap; }
.lp-breadcrumb a, .lp-breadcrumb span { font-size: 0.70rem; font-weight: 600; letter-spacing: 0.06em; text-decoration: none; color: rgba(244,241,234,0.42); white-space: nowrap; transition: color 180ms ease; }
.lp-breadcrumb a:hover { color: rgba(232,201,122,0.85); }
.lp-breadcrumb-sep { color: rgba(244,241,234,0.20); font-size: 0.65rem; }
.lp-breadcrumb-current { color: rgba(244,241,234,0.62) !important; }

.lp-eyebrow { font-size: 0.64rem; font-weight: 800; letter-spacing: 0.28em; text-transform: uppercase; color: #E8C97A; margin: 0 0 16px; }
.lp-h1 { font-family: "Inter Tight", Inter, Arial, sans-serif; font-size: clamp(2.2rem, 5vw, 3.6rem); font-weight: 900; letter-spacing: -0.035em; line-height: 1.03; color: #F4F1EA; margin: 0 0 20px; max-width: 760px; }
.lp-hero-desc { font-size: clamp(0.92rem, 1.4vw, 1.05rem); line-height: 1.72; color: rgba(244,241,234,0.70); max-width: 560px; margin: 0 0 30px; }
.lp-hero-ctas { display: flex; align-items: center; gap: 18px; flex-wrap: wrap; }

.lp-btn-primary {
  display: inline-flex; align-items: center; gap: 8px; padding: 0 28px; height: 48px; border-radius: 4px;
  background: linear-gradient(to bottom, #dbb96a, #a9802f); border: 1px solid rgba(201,162,74,0.45);
  font-family: "Manrope", system-ui, sans-serif; font-size: 0.72rem; font-weight: 800; letter-spacing: 0.14em;
  text-transform: uppercase; color: #07111D; text-decoration: none; white-space: nowrap;
  box-shadow: 0 3px 18px rgba(169,128,47,0.38); transition: transform 200ms ease, box-shadow 200ms ease;
}
.lp-btn-primary:hover { transform: translateY(-1px) scale(1.015); box-shadow: 0 6px 24px rgba(169,128,47,0.54); }
.lp-btn-primary:focus-visible { outline: 2px solid rgba(201,162,74,0.75); outline-offset: 3px; }
.lp-btn-ghost {
  display: inline-flex; align-items: center; gap: 8px; padding: 0 26px; height: 48px; border-radius: 4px;
  border: 1px solid rgba(244,241,234,0.28); background: transparent;
  font-family: "Manrope", system-ui, sans-serif; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em;
  text-transform: uppercase; color: rgba(244,241,234,0.80); text-decoration: none; white-space: nowrap;
  transition: border-color 200ms ease, color 200ms ease;
}
.lp-btn-ghost:hover { border-color: rgba(201,162,74,0.55); color: #E8C97A; }
.lp-btn-ghost:focus-visible { outline: 2px solid rgba(201,162,74,0.75); outline-offset: 3px; }

/* ── Sections ──────────────────────────────────────────────── */
.lp-section { padding: clamp(52px, 7vh, 80px) 0; }
.lp-section-alt { background: #EAE6D9; }
.lp-section-dark { background: #07111D; color: #F4F1EA; }
.lp-section-eyebrow { font-size: 0.62rem; font-weight: 800; letter-spacing: 0.28em; text-transform: uppercase; color: #A9802F; margin: 0 0 14px; }
.lp-section-dark .lp-section-eyebrow { color: #E8C97A; }
.lp-h2 { font-family: "Inter Tight", Inter, Arial, sans-serif; font-size: clamp(1.5rem, 3vw, 2.2rem); font-weight: 900; letter-spacing: -0.03em; line-height: 1.12; color: #07111D; margin: 0 0 18px; }
.lp-section-dark .lp-h2 { color: #F4F1EA; }
.lp-section-body { font-size: clamp(0.88rem, 1.3vw, 0.98rem); line-height: 1.76; color: rgba(7,17,29,0.58); max-width: 640px; margin: 0 0 16px; }
.lp-section-body:last-child { margin-bottom: 0; }
.lp-section-dark .lp-section-body { color: rgba(244,241,234,0.60); }

/* ── Services grid ─────────────────────────────────────────── */
.lp-svc-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin-top: clamp(24px, 3.5vh, 34px); }
.lp-svc-card {
  display: flex; flex-direction: column; gap: 8px; padding: clamp(18px, 2.2vw, 24px);
  border: 1px solid rgba(9,19,31,0.10); border-radius: 12px; background: #FDFCF8;
  text-decoration: none; transition: border-color 200ms ease, transform 200ms ease, box-shadow 200ms ease;
}
.lp-svc-card:hover { border-color: rgba(201,162,74,0.40); transform: translateY(-2px); box-shadow: 0 10px 26px rgba(7,17,29,0.08); }
.lp-svc-card:focus-visible { outline: 2px solid rgba(201,162,74,0.6); outline-offset: 3px; }
.lp-svc-title { font-family: "Inter Tight", Inter, Arial, sans-serif; font-size: 1.0rem; font-weight: 800; letter-spacing: -0.015em; color: #07111D; }
.lp-svc-blurb { font-size: 0.83rem; line-height: 1.55; color: rgba(7,17,29,0.55); }
.lp-svc-arrow { margin-top: auto; padding-top: 6px; color: #A9802F; font-size: 0.8rem; transition: transform 200ms ease; }
.lp-svc-card:hover .lp-svc-arrow { transform: translateX(4px); }
@media (max-width: 640px) { .lp-svc-grid { grid-template-columns: 1fr; } }

/* ── Property types ────────────────────────────────────────── */
.lp-prop-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; margin-top: clamp(24px, 3.5vh, 34px); }
.lp-prop-card { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 10px; padding: 20px 12px; border-radius: 12px; border: 1px solid rgba(9,19,31,0.08); background: #FDFCF8; }
.lp-prop-emoji { font-size: 1.6rem; line-height: 1; }
.lp-prop-label { font-size: 0.78rem; font-weight: 700; color: #07111D; line-height: 1.3; }
@media (max-width: 900px) { .lp-prop-grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 560px) { .lp-prop-grid { grid-template-columns: repeat(2, 1fr); } }

/* ── Process ───────────────────────────────────────────────── */
.lp-process-row { display: flex; flex-wrap: wrap; gap: clamp(16px, 2.5vw, 24px); margin-top: clamp(24px, 3.5vh, 34px); }
.lp-process-step { flex: 1; min-width: 160px; }
.lp-process-num { font-size: 0.66rem; font-weight: 800; letter-spacing: 0.2em; color: #E8C97A; margin: 0 0 10px; }
.lp-process-label { font-family: "Inter Tight", Inter, Arial, sans-serif; font-size: 1.0rem; font-weight: 800; letter-spacing: -0.015em; color: #F4F1EA; margin: 0 0 8px; }
.lp-process-body { font-size: 0.83rem; line-height: 1.58; color: rgba(244,241,234,0.55); margin: 0; }

/* ── FAQ ───────────────────────────────────────────────────── */
.lp-faq-list { margin-top: clamp(24px, 3.5vh, 34px); display: flex; flex-direction: column; gap: 12px; max-width: 760px; }
.lp-faq-item { background: #FDFCF8; border: 1px solid rgba(9,19,31,0.08); border-radius: 10px; overflow: hidden; }
.lp-faq-q { width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 18px 20px; background: none; border: none; cursor: pointer; text-align: left; font-family: inherit; font-size: 0.92rem; font-weight: 700; color: #07111D; }
.lp-faq-q:focus-visible { outline: 2px solid rgba(201,162,74,0.6); outline-offset: -2px; }
.lp-faq-icon { flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; border-radius: 50%; background: rgba(9,19,31,0.06); color: #4A5568; font-size: 0.95rem; transition: transform 220ms ease, background 200ms ease, color 200ms ease; }
.lp-faq-icon.is-open { transform: rotate(45deg); background: rgba(201,162,74,0.15); color: #A9802F; }
.lp-faq-a-wrap { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 280ms cubic-bezier(0.16,1,0.3,1); }
.lp-faq-a-wrap.is-open { grid-template-rows: 1fr; }
.lp-faq-a-inner { overflow: hidden; }
.lp-faq-a-inner p { margin: 0; padding: 0 20px 18px; font-size: 0.86rem; line-height: 1.68; color: rgba(7,17,29,0.55); }
@media (prefers-reduced-motion: reduce) { .lp-faq-a-wrap { transition: none; } }

/* ── Nearby areas ──────────────────────────────────────────── */
.lp-nearby-list { display: flex; flex-wrap: wrap; gap: 10px; margin-top: clamp(20px, 3vh, 28px); }
.lp-nearby-pill {
  display: inline-flex; align-items: center; padding: 9px 18px; border-radius: 100px;
  border: 1px solid rgba(9,19,31,0.12); background: #FDFCF8; text-decoration: none;
  font-size: 0.80rem; font-weight: 600; color: #07111D; transition: border-color 180ms ease, background 180ms ease;
}
.lp-nearby-pill:hover { border-color: rgba(201,162,74,0.45); background: rgba(201,162,74,0.06); }
.lp-nearby-pill:focus-visible { outline: 2px solid rgba(201,162,74,0.6); outline-offset: 2px; }

/* ── Final CTA ─────────────────────────────────────────────── */
.lp-final-cta { text-align: center; background: #0a0d12; }
.lp-final-cta-inner { max-width: 540px; margin: 0 auto; }
.lp-final-cta-h { font-family: "Inter Tight", Inter, Arial, sans-serif; font-size: clamp(1.7rem, 3.4vw, 2.4rem); font-weight: 900; letter-spacing: -0.03em; line-height: 1.08; color: #F4F1EA; margin: 0 0 16px; }
.lp-final-cta-p { font-size: clamp(0.9rem, 1.3vw, 1rem); line-height: 1.72; color: rgba(244,241,234,0.55); margin: 0 0 32px; }
.lp-final-ctas { display: flex; align-items: center; justify-content: center; gap: 24px; flex-wrap: wrap; }
.lp-final-phone { color: rgba(244,241,234,0.75); text-decoration: none; font-weight: 700; font-size: 0.9rem; border-bottom: 1px solid rgba(244,241,234,0.25); padding-bottom: 2px; transition: color 180ms ease, border-color 180ms ease; }
.lp-final-phone:hover { color: #E8C97A; border-color: rgba(201,162,74,0.6); }
.lp-final-phone:focus-visible { outline: 2px solid rgba(201,162,74,0.8); outline-offset: 3px; }

/* ── Not-found state ───────────────────────────────────────── */
.lp-notfound { min-height: 100dvh; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 120px 24px 80px; text-align: center; background: #07111D; }
.lp-notfound-code { font-size: 0.60rem; font-weight: 800; letter-spacing: 0.30em; text-transform: uppercase; color: rgba(201,162,74,0.55); margin: 0 0 20px; }
.lp-notfound-h { font-family: "Inter Tight", Inter, Arial, sans-serif; font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 900; letter-spacing: -0.04em; line-height: 0.98; color: #F4F1EA; margin: 0 0 20px; }
.lp-notfound-p { font-size: 0.97rem; line-height: 1.72; color: rgba(244,241,234,0.45); max-width: 380px; margin: 0 auto 36px; }

@media (max-width: 600px) {
  .lp-hero-ctas { flex-direction: column; align-items: flex-start; gap: 14px; }
  .lp-btn-primary, .lp-btn-ghost { width: 100%; justify-content: center; }
}
`

const FaqItem = ({ q, a, isOpen, onToggle, idx }) => (
  <div className="lp-faq-item">
    <button
      type="button"
      className="lp-faq-q"
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls={`lp-faq-a-${idx}`}
      id={`lp-faq-q-${idx}`}
    >
      <span>{q}</span>
      <span className={`lp-faq-icon${isOpen ? ' is-open' : ''}`} aria-hidden="true">+</span>
    </button>
    <div className={`lp-faq-a-wrap${isOpen ? ' is-open' : ''}`} id={`lp-faq-a-${idx}`} role="region" aria-labelledby={`lp-faq-q-${idx}`}>
      <div className="lp-faq-a-inner"><p>{a}</p></div>
    </div>
  </div>
)

export default function LocationPage() {
  const { slug } = useParams()
  const location = getLocationBySlug(slug)
  const [openFaq, setOpenFaq] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (!location) {
      document.title = 'Service Area Not Found | IronOak Property Services'
      return
    }
    document.title = location.meta.title

    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) { metaDesc = document.createElement('meta'); metaDesc.setAttribute('name', 'description'); document.head.appendChild(metaDesc) }
    metaDesc.setAttribute('content', location.meta.description)

    const setOG = (prop, val) => {
      let el = document.querySelector(`meta[property="${prop}"]`)
      if (!el) { el = document.createElement('meta'); el.setAttribute('property', prop); document.head.appendChild(el) }
      el.setAttribute('content', val)
    }
    const ogImage = `${SITE_URL}${location.heroImage}`
    setOG('og:type', 'website')
    setOG('og:title', location.meta.title)
    setOG('og:description', location.meta.description)
    setOG('og:url', `${SITE_URL}/service-areas/${location.slug}`)
    setOG('og:image', ogImage)

    const setTwitter = (name, val) => {
      let el = document.querySelector(`meta[name="${name}"]`)
      if (!el) { el = document.createElement('meta'); el.setAttribute('name', name); document.head.appendChild(el) }
      el.setAttribute('content', val)
    }
    setTwitter('twitter:card', 'summary_large_image')
    setTwitter('twitter:title', location.meta.title)
    setTwitter('twitter:description', location.meta.description)
    setTwitter('twitter:image', ogImage)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel', 'canonical'); document.head.appendChild(canonical) }
    canonical.setAttribute('href', `${SITE_URL}/service-areas/${location.slug}`)

    const breadcrumbJson = document.createElement('script')
    breadcrumbJson.type = 'application/ld+json'
    breadcrumbJson.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${SITE_URL}/#areas-we-serve` },
        { '@type': 'ListItem', position: 3, name: location.city, item: `${SITE_URL}/service-areas/${location.slug}` },
      ],
    })
    document.head.appendChild(breadcrumbJson)

    const serviceJson = document.createElement('script')
    serviceJson.type = 'application/ld+json'
    serviceJson.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `Property Services in ${location.city}`,
      description: location.meta.description,
      provider: { '@type': 'Organization', name: BUSINESS_NAME, url: SITE_URL },
      areaServed: { '@type': 'City', name: location.city },
      url: `${SITE_URL}/service-areas/${location.slug}`,
    })
    document.head.appendChild(serviceJson)

    return () => { breadcrumbJson.remove(); serviceJson.remove() }
  }, [slug, location])

  if (!location) {
    return (
      <>
        <style>{CSS}</style>
        <Header ready={true} />
        <div className="lp-notfound">
          <p className="lp-notfound-code">Service Area Not Found</p>
          <h1 className="lp-notfound-h">We don't have a page for that area yet.</h1>
          <p className="lp-notfound-p">The link may be broken, or this area may not be listed yet. Head back to see where IronOak works.</p>
          <Link to="/#areas-we-serve" className="lp-btn-primary" style={{ margin: '0 auto' }}>
            View Service Areas
          </Link>
        </div>
        <Footer />
      </>
    )
  }

  const nearby = LOCATION_PAGES.filter((l) => l.slug !== location.slug)

  return (
    <>
      <style>{CSS}</style>
      <div className="lp-page">
        <Header ready={true} />

        {/* ════ HERO ════ */}
        <section className="lp-hero" aria-labelledby="lp-page-title">
          <img className="lp-hero-img" src={location.heroImage} alt={location.heroImageAlt} loading="eager" fetchpriority="high" decoding="async" />
          <div className="lp-hero-overlay" aria-hidden="true" />
          <div className="lp-inner lp-hero-content">
            <nav className="lp-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="lp-breadcrumb-sep" aria-hidden="true">/</span>
              <Link to="/#areas-we-serve">Service Areas</Link>
              <span className="lp-breadcrumb-sep" aria-hidden="true">/</span>
              <span className="lp-breadcrumb-current" aria-current="page">{location.city}</span>
            </nav>
            <p className="lp-eyebrow">{location.heroSupportingLine}</p>
            <h1 className="lp-h1" id="lp-page-title">Property Services in {location.city}</h1>
            <p className="lp-hero-desc">{location.intro[0]}</p>
            <div className="lp-hero-ctas">
              <Link to="/#contact" className="lp-btn-primary">Request a Quote</Link>
              <Link to="/#areas-we-serve" className="lp-btn-ghost">View All Service Areas</Link>
            </div>
          </div>
        </section>

        {/* ════ INTRO ════ */}
        <section className="lp-section" aria-label={`Property services overview for ${location.city}`}>
          <div className="lp-inner">
            <p className="lp-section-eyebrow">Local Overview</p>
            <h2 className="lp-h2">Supporting Property Owners &amp; Managers in {location.city}</h2>
            <p className="lp-section-body">{location.intro[1]}</p>
          </div>
        </section>

        {/* ════ SERVICES ════ */}
        <section className="lp-section lp-section-alt" aria-label={`Services available in ${location.city}`}>
          <div className="lp-inner">
            <p className="lp-section-eyebrow">What We Offer</p>
            <h2 className="lp-h2">Services in {location.city}</h2>
            <p className="lp-section-body">The same coordinated services IronOak provides across Toronto &amp; the GTA, available for properties in {location.city}.</p>
            <div className="lp-svc-grid">
              {LOCATION_SERVICES.map((svc) => (
                <Link key={svc.slug} to={`/services/${svc.slug}`} className="lp-svc-card">
                  <span className="lp-svc-title">{svc.title}</span>
                  <span className="lp-svc-blurb">{svc.blurb}</span>
                  <span className="lp-svc-arrow" aria-hidden="true">Learn more →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ════ PROPERTY TYPES ════ */}
        <section className="lp-section" aria-label={`Property types supported in ${location.city}`}>
          <div className="lp-inner">
            <p className="lp-section-eyebrow">Who We Support</p>
            <h2 className="lp-h2">Properties We Support in {location.city}</h2>
            <p className="lp-section-body">{location.areaNote}</p>
            <div className="lp-prop-grid" role="list">
              {LOCATION_PROPERTY_TYPES.map((p) => (
                <div key={p.label} className="lp-prop-card" role="listitem">
                  <span className="lp-prop-emoji" aria-hidden="true">{p.emoji}</span>
                  <span className="lp-prop-label">{p.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════ PROCESS ════ */}
        <section className="lp-section lp-section-dark" aria-label="How a quote and property assessment works">
          <div className="lp-inner">
            <p className="lp-section-eyebrow">How It Works</p>
            <h2 className="lp-h2">Requesting a Quote &amp; Property Assessment</h2>
            <p className="lp-section-body">The same straightforward process for every {location.city} property, from first request to completed work.</p>
            <div className="lp-process-row" role="list">
              {LOCATION_PROCESS.map((step) => (
                <div key={step.num} className="lp-process-step" role="listitem">
                  <p className="lp-process-num">{step.num}</p>
                  <p className="lp-process-label">{step.label}</p>
                  <p className="lp-process-body">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════ FAQ ════ */}
        <section className="lp-section" aria-label="Frequently asked questions">
          <div className="lp-inner">
            <p className="lp-section-eyebrow">FAQ</p>
            <h2 className="lp-h2">Common Questions — {location.city}</h2>
            <div className="lp-faq-list">
              {location.faqs.map((item, i) => (
                <FaqItem key={item.q} q={item.q} a={item.a} idx={i} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? -1 : i)} />
              ))}
            </div>
          </div>
        </section>

        {/* ════ NEARBY AREAS ════ */}
        <section className="lp-section lp-section-alt" aria-label="Other service areas">
          <div className="lp-inner">
            <p className="lp-section-eyebrow">Also Serving Nearby</p>
            <h2 className="lp-h2">Other Areas We Serve</h2>
            <div className="lp-nearby-list">
              {nearby.map((l) => (
                <Link key={l.slug} to={`/service-areas/${l.slug}`} className="lp-nearby-pill">{l.city}</Link>
              ))}
            </div>
          </div>
        </section>

        {/* ════ FINAL CTA ════ */}
        <section className="lp-final-cta lp-section" aria-label="Request a quote">
          <div className="lp-inner">
            <div className="lp-final-cta-inner">
              <h2 className="lp-final-cta-h">Have a property in {location.city}?</h2>
              <p className="lp-final-cta-p">Tell us what your property needs and we'll help you understand the next step.</p>
              <div className="lp-final-ctas">
                <Link to="/#contact" className="lp-btn-primary">Request a Quote</Link>
                <a href={PHONE_HREF} className="lp-final-phone">{PHONE_DISPLAY}</a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <FloatingWhatsAppButton />
      </div>
    </>
  )
}
