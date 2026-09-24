import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton/FloatingWhatsAppButton.jsx'
import RichServiceTemplate from '../components/ServicePage/RichServiceTemplate.jsx'
import { SERVICE_PAGES } from '../data/servicePages.js'
import { getArticleBySlug } from '../data/articles.js'
import { ILLUSTRATION_COMPONENTS, SVG_ANIM_CSS } from '../components/ServicesIllustrations/index.jsx'
import { SITE_URL, BUSINESS_NAME, SERVICE_AREA_CITIES } from '../config/site.js'

/* ─────────────────────────────────────────────────────────────────────────
   Scoped styles — all prefixed with .sp- (service page)
───────────────────────────────────────────────────────────────────────── */
const CSS = `
/* ── Reset / base ─────────────────────────────────────────── */
.sp-page { background: #07111D; color: #F4F1EA; font-family: "Manrope", system-ui, sans-serif; }
.sp-inner { max-width: 1260px; margin: 0 auto; padding: 0 clamp(20px, 5vw, 72px); box-sizing: border-box; }

/* ── Hero ──────────────────────────────────────────────────── */
.sp-hero {
  background: #07111D;
  padding: clamp(112px, 14vh, 148px) 0 clamp(64px, 8vh, 96px);
  border-bottom: 1px solid rgba(244,241,234,0.06);
  position: relative;
  overflow: hidden;
}
.sp-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 60% 50% at 70% 50%, rgba(201,162,74,0.04) 0%, transparent 70%);
  pointer-events: none;
}
.sp-hero-inner {
  display: flex;
  align-items: center;
  gap: clamp(48px, 6vw, 88px);
}
.sp-hero-left  { flex: 1; min-width: 0; }
.sp-hero-right {
  flex: 0 0 clamp(280px, 38vw, 480px);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Breadcrumb */
.sp-breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 22px;
  flex-wrap: wrap;
}
.sp-breadcrumb a, .sp-breadcrumb span {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-decoration: none;
  color: rgba(244,241,234,0.35);
  transition: color 180ms ease;
  white-space: nowrap;
}
.sp-breadcrumb a:hover { color: rgba(201,162,74,0.80); }
.sp-breadcrumb-sep { color: rgba(244,241,234,0.20); font-size: 0.65rem; }
.sp-breadcrumb-current { color: rgba(244,241,234,0.55) !important; }

/* Category label */
.sp-cat {
  font-size: 0.60rem;
  font-weight: 800;
  letter-spacing: 0.30em;
  text-transform: uppercase;
  color: rgba(201,162,74,0.72);
  margin-bottom: 16px;
}

/* H1 */
.sp-h1 {
  font-family: "Inter Tight", Inter, Arial, sans-serif;
  font-size: clamp(2.4rem, 5.5vw, 4.4rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 0.96;
  color: #F4F1EA;
  margin: 0 0 clamp(18px, 2.4vh, 26px);
}

/* Description */
.sp-hero-desc {
  font-size: clamp(0.94rem, 1.4vw, 1.05rem);
  line-height: 1.72;
  color: rgba(244,241,234,0.52);
  max-width: 500px;
  margin: 0 0 clamp(28px, 3.6vh, 38px);
}

/* CTA row */
.sp-ctas { display: flex; align-items: center; gap: 20px; flex-wrap: wrap; }

.sp-btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0 28px;
  height: 48px;
  border-radius: 4px;
  background: linear-gradient(to bottom, #dbb96a, #a9802f);
  border: 1px solid rgba(201,162,74,0.45);
  font-family: "Manrope", system-ui, sans-serif;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #07111D;
  text-decoration: none;
  white-space: nowrap;
  box-shadow: 0 3px 18px rgba(169,128,47,0.38);
  transition: transform 200ms ease, box-shadow 200ms ease;
}
.sp-btn-primary:hover {
  transform: translateY(-1px) scale(1.015);
  box-shadow: 0 6px 24px rgba(169,128,47,0.54);
}
.sp-btn-primary:focus-visible { outline: 2px solid rgba(201,162,74,0.7); outline-offset: 3px; }

.sp-btn-back {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-family: "Manrope", system-ui, sans-serif;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(244,241,234,0.40);
  text-decoration: none;
  padding-bottom: 2px;
  border-bottom: 1px solid rgba(244,241,234,0.10);
  transition: color 180ms ease, border-color 180ms ease;
  white-space: nowrap;
}
.sp-btn-back:hover { color: rgba(244,241,234,0.75); border-color: rgba(244,241,234,0.30); }

/* ── Content sections ──────────────────────────────────────── */
.sp-section { padding: clamp(56px, 7vh, 80px) 0; border-bottom: 1px solid rgba(244,241,234,0.05); }
.sp-section:last-of-type { border-bottom: none; }
.sp-section-alt { background: rgba(13,25,36,0.50); }

.sp-section-num {
  font-size: 0.55rem;
  font-weight: 800;
  letter-spacing: 0.30em;
  text-transform: uppercase;
  color: rgba(201,162,74,0.45);
  margin-bottom: 10px;
}
.sp-section-h {
  font-family: "Inter Tight", Inter, Arial, sans-serif;
  font-size: clamp(1.35rem, 2.5vw, 1.85rem);
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.12;
  color: #F4F1EA;
  margin: 0 0 20px;
}
.sp-section-body {
  font-size: clamp(0.88rem, 1.3vw, 0.97rem);
  line-height: 1.78;
  color: rgba(244,241,234,0.48);
  max-width: 640px;
}

/* Includes grid */
.sp-includes-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 24px;
  max-width: 640px;
}
@media (max-width: 500px) { .sp-includes-grid { grid-template-columns: 1fr; } }

.sp-include-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 6px;
  border: 1px solid rgba(244,241,234,0.06);
  background: rgba(244,241,234,0.02);
}
.sp-include-dot {
  flex-shrink: 0;
  width: 6px; height: 6px;
  border-radius: 50%;
  background: rgba(201,162,74,0.55);
}
.sp-include-label {
  font-size: 0.83rem;
  font-weight: 600;
  color: rgba(244,241,234,0.65);
  line-height: 1.4;
}

/* Process steps */
.sp-process-row {
  display: flex;
  gap: clamp(0px, 2vw, 0px);
  margin-top: 28px;
  flex-wrap: wrap;
  max-width: 680px;
}
.sp-process-step {
  flex: 1;
  min-width: 120px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-right: 20px;
  position: relative;
}
.sp-process-step:not(:last-child)::after {
  content: '';
  position: absolute;
  top: 11px;
  right: 0;
  width: 14px; height: 1px;
  background: rgba(201,162,74,0.25);
}
.sp-process-n {
  font-size: 0.60rem;
  font-weight: 800;
  letter-spacing: 0.20em;
  color: rgba(201,162,74,0.55);
  margin-bottom: 8px;
}
.sp-process-label {
  font-size: 0.84rem;
  font-weight: 700;
  color: rgba(244,241,234,0.70);
  line-height: 1.35;
}

/* FAQ */
.sp-faq-list { margin-top: 24px; display: flex; flex-direction: column; gap: 16px; max-width: 640px; }
.sp-faq-item {
  border: 1px solid rgba(244,241,234,0.07);
  border-radius: 8px;
  padding: 20px 22px;
  background: rgba(244,241,234,0.02);
}
.sp-faq-q {
  font-size: 0.90rem;
  font-weight: 700;
  color: rgba(244,241,234,0.82);
  margin: 0 0 10px;
  line-height: 1.45;
}
.sp-faq-a {
  font-size: 0.84rem;
  line-height: 1.72;
  color: rgba(244,241,234,0.44);
  margin: 0;
}

/* ── Related services ──────────────────────────────────────── */
.sp-related { padding: clamp(56px, 7vh, 80px) 0; border-top: 1px solid rgba(244,241,234,0.06); }
.sp-related-label {
  font-size: 0.60rem;
  font-weight: 800;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: rgba(201,162,74,0.55);
  margin-bottom: 28px;
}
.sp-related-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(12px, 2vw, 20px);
}
@media (max-width: 700px) { .sp-related-grid { grid-template-columns: 1fr; } }
@media (max-width: 900px) and (min-width: 701px) { .sp-related-grid { grid-template-columns: repeat(2, 1fr); } }

.sp-related-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: clamp(18px, 2.2vw, 26px);
  border: 1px solid rgba(244,241,234,0.07);
  border-radius: 8px;
  background: rgba(244,241,234,0.02);
  text-decoration: none;
  transition: border-color 200ms ease, background 200ms ease, transform 200ms ease;
}
.sp-related-card:hover {
  border-color: rgba(201,162,74,0.30);
  background: rgba(201,162,74,0.03);
  transform: translateY(-2px);
}
.sp-related-card:focus-visible { outline: 2px solid rgba(201,162,74,0.6); outline-offset: 3px; border-radius: 8px; }
.sp-related-num {
  font-size: 0.56rem;
  font-weight: 800;
  letter-spacing: 0.22em;
  color: rgba(201,162,74,0.50);
}
.sp-related-cat {
  font-size: 0.64rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(244,241,234,0.35);
}
.sp-related-title {
  font-family: "Inter Tight", Inter, Arial, sans-serif;
  font-size: clamp(0.97rem, 1.6vw, 1.10rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.25;
  color: rgba(244,241,234,0.78);
}
.sp-related-arrow {
  font-size: 0.78rem;
  color: rgba(201,162,74,0.45);
  margin-top: auto;
  transition: transform 200ms ease, color 200ms ease;
}
.sp-related-card:hover .sp-related-arrow { transform: translateX(4px); color: rgba(201,162,74,0.80); }

/* ── Final CTA ─────────────────────────────────────────────── */
.sp-final-cta {
  background: linear-gradient(180deg, rgba(201,162,74,0.04) 0%, transparent 100%);
  border-top: 1px solid rgba(201,162,74,0.12);
  padding: clamp(64px, 8vh, 96px) 0;
  text-align: center;
}
.sp-final-cta-inner { max-width: 520px; margin: 0 auto; }
.sp-final-cta-h {
  font-family: "Inter Tight", Inter, Arial, sans-serif;
  font-size: clamp(1.7rem, 3.4vw, 2.5rem);
  font-weight: 900;
  letter-spacing: -0.035em;
  line-height: 1.08;
  color: #F4F1EA;
  margin: 0 0 16px;
}
.sp-final-cta-p {
  font-size: clamp(0.88rem, 1.3vw, 0.97rem);
  line-height: 1.72;
  color: rgba(244,241,234,0.45);
  margin: 0 0 32px;
}

/* ── Not-found state ───────────────────────────────────────── */
.sp-notfound {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 120px 24px 80px;
  text-align: center;
  background: #07111D;
}
.sp-notfound-code { font-size: 0.60rem; font-weight: 800; letter-spacing: 0.30em; text-transform: uppercase; color: rgba(201,162,74,0.55); margin: 0 0 20px; }
.sp-notfound-h { font-family: "Inter Tight", Inter, Arial, sans-serif; font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 900; letter-spacing: -0.04em; line-height: 0.98; color: #F4F1EA; margin: 0 0 20px; }
.sp-notfound-p { font-size: 0.97rem; line-height: 1.72; color: rgba(244,241,234,0.45); max-width: 380px; margin: 0 auto 36px; }

/* ── Responsive ────────────────────────────────────────────── */
@media (max-width: 880px) {
  .sp-hero-inner { flex-direction: column-reverse; align-items: flex-start; gap: 36px; }
  .sp-hero-right { flex: none; width: 100%; max-width: 380px; align-self: center; }
  .sp-hero-desc  { max-width: 100%; }
}
@media (max-width: 600px) {
  .sp-hero-right { max-width: 300px; }
  .sp-process-row { gap: 0; flex-direction: column; gap: 20px; }
  .sp-process-step::after { display: none; }
}
`

/* ─────────────────────────────────────────────────────────────────────────
   ServicePage component
───────────────────────────────────────────────────────────────────────── */
export default function ServicePage() {
  const { slug } = useParams()
  const service   = SERVICE_PAGES.find((s) => s.slug === slug)
  const Illus     = service ? ILLUSTRATION_COMPONENTS[service.illustrationIndex] : null

  /* Scroll to top + update <title> / meta description on mount / slug change */
  useEffect(() => {
    window.scrollTo(0, 0)
    if (!service) {
      document.title = 'Service Not Found | IronOak Property Services'
      return
    }
    document.title = service.meta.title

    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.setAttribute('name', 'description')
      document.head.appendChild(metaDesc)
    }
    metaDesc.setAttribute('content', service.meta.description)

    /* Open Graph */
    const setOG = (prop, val) => {
      let el = document.querySelector(`meta[property="${prop}"]`)
      if (!el) { el = document.createElement('meta'); el.setAttribute('property', prop); document.head.appendChild(el) }
      el.setAttribute('content', val)
    }
    const ogImage = service.richContent?.heroImage ? `${SITE_URL}${service.richContent.heroImage}` : `${SITE_URL}/images/ironoak-social-preview-v2.jpg`

    setOG('og:type',        'website')
    setOG('og:title',       service.meta.title)
    setOG('og:description', service.meta.description)
    setOG('og:url',         `${SITE_URL}/services/${service.slug}`)
    setOG('og:image',       ogImage)

    const setTwitter = (name, val) => {
      let el = document.querySelector(`meta[name="${name}"]`)
      if (!el) { el = document.createElement('meta'); el.setAttribute('name', name); document.head.appendChild(el) }
      el.setAttribute('content', val)
    }
    setTwitter('twitter:card',        'summary_large_image')
    setTwitter('twitter:title',       service.meta.title)
    setTwitter('twitter:description', service.meta.description)
    setTwitter('twitter:image',       ogImage)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel', 'canonical'); document.head.appendChild(canonical) }
    canonical.setAttribute('href', `${SITE_URL}/services/${service.slug}`)

    const breadcrumbJson = document.createElement('script')
    breadcrumbJson.type = 'application/ld+json'
    breadcrumbJson.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/#services-explorer` },
        { '@type': 'ListItem', position: 3, name: service.title, item: `${SITE_URL}/services/${service.slug}` },
      ],
    })
    document.head.appendChild(breadcrumbJson)

    const serviceJson = document.createElement('script')
    serviceJson.type = 'application/ld+json'
    serviceJson.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.title,
      description: service.meta.description,
      provider: { '@type': 'Organization', name: BUSINESS_NAME, url: SITE_URL },
      areaServed: SERVICE_AREA_CITIES.map((name) => ({ '@type': 'City', name })),
      url: `${SITE_URL}/services/${service.slug}`,
    })
    document.head.appendChild(serviceJson)

    return () => { breadcrumbJson.remove(); serviceJson.remove() }
  }, [slug, service])

  /* ── Invalid slug → not-found state ── */
  if (!service) {
    return (
      <>
        <style>{CSS}</style>
        <Header ready={true} />
        <div className="sp-notfound">
          <p className="sp-notfound-code">Service Not Found</p>
          <h1 className="sp-notfound-h">We couldn't find that service.</h1>
          <p className="sp-notfound-p">The link may be broken or the service page may have moved. Head back to explore everything we offer.</p>
          <Link to="/#services-explorer" className="sp-btn-primary" style={{ margin: '0 auto' }}>
            View All Services
          </Link>
        </div>
        <Footer />
      </>
    )
  }

  const relatedServices = service.related.map((i) => SERVICE_PAGES[i])

  /* ── Premium light-theme master template (data-driven via richContent) ── */
  if (service.richContent) {
    const relatedArticle = service.richContent.relatedArticleSlug
      ? getArticleBySlug(service.richContent.relatedArticleSlug)
      : null
    return (
      <RichServiceTemplate
        service={service}
        relatedServices={relatedServices}
        relatedArticle={relatedArticle}
      />
    )
  }

  const { sections } = service

  return (
    <>
      <style>{CSS}{SVG_ANIM_CSS}</style>
      <div className="sp-page">
        <Header ready={true} />

        {/* ════ HERO ════ */}
        <section className="sp-hero" aria-labelledby="sp-page-title">
          <div className="sp-inner sp-hero-inner">

            {/* Left: text */}
            <div className="sp-hero-left">
              {/* Breadcrumb */}
              <nav className="sp-breadcrumb" aria-label="Breadcrumb">
                <Link to="/">Home</Link>
                <span className="sp-breadcrumb-sep" aria-hidden="true">/</span>
                <Link to="/#services-explorer">Services</Link>
                <span className="sp-breadcrumb-sep" aria-hidden="true">/</span>
                <span className="sp-breadcrumb-current" aria-current="page">{service.title}</span>
              </nav>

              <p className="sp-cat">{service.category}</p>
              <h1 className="sp-h1" id="sp-page-title">{service.title}</h1>
              <p className="sp-hero-desc">{service.description}</p>

              <div className="sp-ctas">
                <Link to="/#contact" className="sp-btn-primary">
                  Request a Quote
                </Link>
                <Link to="/#services-explorer" className="sp-btn-back">
                  <span aria-hidden="true">←</span> Back to All Services
                </Link>
              </div>
            </div>

            {/* Right: SVG illustration — swap Illus component for final artwork */}
            <div className="sp-hero-right" aria-hidden="true">
              {Illus && <Illus />}
            </div>
          </div>
        </section>

        {/* ════ CONTENT PLACEHOLDER SECTIONS ════ */}

        {/* 1 — Service Overview */}
        <section className="sp-section sp-section-alt" aria-label="Service overview">
          <div className="sp-inner">
            <p className="sp-section-num">01 — Overview</p>
            <h2 className="sp-section-h">About This Service</h2>
            <p className="sp-section-body">{sections.overview}</p>
          </div>
        </section>

        {/* 2 — What This Service Includes */}
        <section className="sp-section" aria-label="What this service includes">
          <div className="sp-inner">
            <p className="sp-section-num">02 — Scope</p>
            <h2 className="sp-section-h">What This Service Includes</h2>
            <p className="sp-section-body">A summary of what falls within this service scope. Final detail will be added as we build out this page.</p>
            <div className="sp-includes-grid" role="list">
              {sections.includes.map((item, i) => (
                <div key={i} className="sp-include-item" role="listitem">
                  <span className="sp-include-dot" aria-hidden="true" />
                  <span className="sp-include-label">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3 — Properties and Clients We Support */}
        <section className="sp-section sp-section-alt" aria-label="Properties and clients we support">
          <div className="sp-inner">
            <p className="sp-section-num">03 — Who We Support</p>
            <h2 className="sp-section-h">Properties &amp; Clients We Support</h2>
            <p className="sp-section-body">{sections.properties}</p>
            <p className="sp-section-body" style={{ marginTop: 16 }}>
              Additional details about client types and property categories will be added here.
            </p>
          </div>
        </section>

        {/* 4 — Our Process */}
        <section className="sp-section" aria-label="Our process">
          <div className="sp-inner">
            <p className="sp-section-num">04 — Process</p>
            <h2 className="sp-section-h">Our Process</h2>
            <p className="sp-section-body">How we approach this type of work — from initial contact through to completion. Full process detail will be added shortly.</p>
            <div className="sp-process-row" role="list">
              {sections.process.map((step, i) => (
                <div key={i} className="sp-process-step" role="listitem">
                  <span className="sp-process-n">{String(i + 1).padStart(2, '0')}</span>
                  <span className="sp-process-label">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5 — Related Project Types (placeholder) */}
        <section className="sp-section sp-section-alt" aria-label="Related project types">
          <div className="sp-inner">
            <p className="sp-section-num">05 — Project Types</p>
            <h2 className="sp-section-h">Related Project Types</h2>
            <p className="sp-section-body">
              Examples of specific project types that fall within this service category will be listed here as we prepare the full page content.
            </p>
          </div>
        </section>

        {/* 6 — Frequently Asked Questions */}
        <section className="sp-section" aria-label="Frequently asked questions">
          <div className="sp-inner">
            <p className="sp-section-num">06 — FAQ</p>
            <h2 className="sp-section-h">Frequently Asked Questions</h2>
            <div className="sp-faq-list">
              {sections.faq.map((item, i) => (
                <div key={i} className="sp-faq-item">
                  <p className="sp-faq-q">{item.q}</p>
                  <p className="sp-faq-a">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════ RELATED SERVICES ════ */}
        <div className="sp-related">
          <div className="sp-inner">
            <p className="sp-related-label">Related Services</p>
            <div className="sp-related-grid">
              {relatedServices.map((rel) => (
                <Link key={rel.slug} to={`/services/${rel.slug}`} className="sp-related-card">
                  <span className="sp-related-num">{rel.num}</span>
                  <span className="sp-related-cat">{rel.category}</span>
                  <span className="sp-related-title">{rel.title}</span>
                  <span className="sp-related-arrow" aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ════ FINAL CTA ════ */}
        <section className="sp-final-cta" aria-label="Request a quote">
          <div className="sp-inner">
            <div className="sp-final-cta-inner">
              <h2 className="sp-final-cta-h">Have a project in mind?</h2>
              <p className="sp-final-cta-p">
                Tell us what your property needs and we'll help you understand the next step.
              </p>
              <Link to="/#contact" className="sp-btn-primary">
                Request a Quote
              </Link>
            </div>
          </div>
        </section>

        <Footer />
        <FloatingWhatsAppButton />
      </div>
    </>
  )
}
