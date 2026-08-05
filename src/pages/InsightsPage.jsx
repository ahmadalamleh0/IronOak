import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton/FloatingWhatsAppButton.jsx'
import { ARTICLES } from '../data/articles.js'
import { SITE_URL } from '../config/site.js'

/* ─────────────────────────────────────────────────────────────────────────
   Scoped styles — all prefixed with .ip- (insights page)
───────────────────────────────────────────────────────────────────────── */
const CSS = `
.ip-page { background: #F4F1EA; color: #07111D; font-family: "Manrope", system-ui, sans-serif; min-height: 100dvh; }
.ip-inner { max-width: 1180px; margin: 0 auto; padding: 0 clamp(20px, 5vw, 64px); box-sizing: border-box; }

/* ── Hero ──────────────────────────────────────────────────── */
.ip-hero {
  padding: clamp(112px, 14vh, 140px) 0 clamp(40px, 5vh, 56px);
  border-bottom: 1px solid rgba(9,19,31,0.08);
}
.ip-eyebrow {
  font-size: 0.62rem;
  font-weight: 800;
  letter-spacing: 0.30em;
  text-transform: uppercase;
  color: #A9802F;
  margin: 0 0 16px;
}
.ip-h1 {
  font-family: "Inter Tight", Inter, Arial, sans-serif;
  font-size: clamp(2rem, 4.4vw, 3.1rem);
  font-weight: 900;
  letter-spacing: -0.035em;
  line-height: 1.06;
  color: #07111D;
  margin: 0 0 18px;
  max-width: 720px;
}
.ip-hero-desc {
  font-size: clamp(0.95rem, 1.3vw, 1.05rem);
  line-height: 1.68;
  color: rgba(7,17,29,0.55);
  max-width: 620px;
  margin: 0;
}

/* ── Grid ──────────────────────────────────────────────────── */
.ip-grid-section { padding: clamp(48px, 6vh, 72px) 0 clamp(64px, 8vh, 96px); }
.ip-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(16px, 2.2vw, 26px);
}
@media (max-width: 860px) { .ip-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px) { .ip-grid { grid-template-columns: 1fr; } }

.ip-card {
  background: #FDFCF8;
  border-radius: 16px;
  border: 1px solid rgba(9,19,31,0.08);
  box-shadow: 0 1px 3px rgba(0,0,0,0.05), 0 4px 14px rgba(0,0,0,0.05);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease;
}
.ip-card:hover { transform: translateY(-4px); box-shadow: 0 4px 10px rgba(0,0,0,0.07), 0 14px 30px rgba(0,0,0,0.08); border-color: rgba(9,19,31,0.14); }
.ip-card:focus-within { outline: 2px solid rgba(201,162,74,0.6); outline-offset: 2px; }

.ip-card-img-wrap { aspect-ratio: 16 / 10; overflow: hidden; flex-shrink: 0; }
.ip-card-img-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 400ms ease; }
.ip-card:hover .ip-card-img-wrap img { transform: scale(1.05); }

.ip-card-body { padding: clamp(18px, 2.2vw, 24px); display: flex; flex-direction: column; flex: 1; }
.ip-card-cat { font-size: 0.60rem; font-weight: 800; letter-spacing: 0.22em; text-transform: uppercase; color: #A9802F; margin: 0 0 11px; }
.ip-card-title-link { text-decoration: none; color: inherit; }
.ip-card-title {
  font-family: "Inter Tight", Inter, Arial, sans-serif;
  font-size: clamp(1rem, 1.5vw, 1.1rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.28;
  color: #07111D;
  margin: 0 0 11px;
  transition: color 180ms ease;
}
.ip-card-title-link:hover .ip-card-title { color: #A9802F; }
.ip-card-title-link:focus-visible { outline: 2px solid rgba(201,162,74,0.6); outline-offset: 3px; border-radius: 4px; }
.ip-card-excerpt { font-size: 0.85rem; line-height: 1.65; color: rgba(7,17,29,0.54); margin: 0; flex: 1; }

.ip-card-footer { display: flex; align-items: center; justify-content: space-between; margin-top: 18px; padding-top: 14px; border-top: 1px solid rgba(9,19,31,0.07); }
.ip-card-meta { font-size: 0.72rem; color: rgba(7,17,29,0.38); display: flex; gap: 8px; align-items: center; }
.ip-card-meta-dot { color: rgba(7,17,29,0.22); }
.ip-card-read { display: inline-flex; align-items: center; gap: 5px; font-size: 0.70rem; font-weight: 800; letter-spacing: 0.10em; text-transform: uppercase; color: #A9802F; text-decoration: none; }
.ip-card-read:focus-visible { outline: 2px solid rgba(201,162,74,0.65); border-radius: 4px; outline-offset: 2px; }
.ip-card-arrow { display: inline-block; transition: transform 220ms ease; }
.ip-card:hover .ip-card-arrow { transform: translateX(4px); }
`

const formatDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })

export default function InsightsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Property Insights & Maintenance Guides | IronOak'

    const setMeta = (selector, attr, name, content) => {
      let el = document.querySelector(selector)
      if (!el) { el = document.createElement('meta'); el.setAttribute(attr, name); document.head.appendChild(el) }
      el.setAttribute('content', content)
    }
    const description = 'Explore practical IronOak guides on property maintenance, capital projects, renovations, condominium care, interior finishing, and multi-site improvements.'
    setMeta('meta[name="description"]', 'name', 'description', description)
    setMeta('meta[property="og:type"]', 'property', 'og:type', 'website')
    setMeta('meta[property="og:title"]', 'property', 'og:title', 'Property Insights & Maintenance Guides | IronOak')
    setMeta('meta[property="og:description"]', 'property', 'og:description', description)
    setMeta('meta[property="og:url"]', 'property', 'og:url', `${SITE_URL}/insights`)
    setMeta('meta[property="og:image"]', 'property', 'og:image', `${SITE_URL}/images/ironoak-social-preview-v2.jpg`)
    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image')
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', 'Property Insights & Maintenance Guides | IronOak')
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description)
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', `${SITE_URL}/images/ironoak-social-preview-v2.jpg`)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel', 'canonical'); document.head.appendChild(canonical) }
    canonical.setAttribute('href', `${SITE_URL}/insights`)
  }, [])

  return (
    <>
      <style>{CSS}</style>
      <div className="ip-page">
        <Header ready={true} />

        {/* ════ HERO ════ */}
        <section className="ip-hero" aria-labelledby="ip-title">
          <div className="ip-inner">
            <p className="ip-eyebrow">Insights &amp; Property Guides</p>
            <h1 className="ip-h1" id="ip-title">Practical advice for better properties.</h1>
            <p className="ip-hero-desc">
              Explore useful guidance for maintaining, improving, and managing residential, condominium, commercial, and multi-site properties.
            </p>
          </div>
        </section>

        {/* ════ ARTICLE GRID ════ */}
        <section className="ip-grid-section" aria-label="All articles">
          <div className="ip-inner">
            <div className="ip-grid">
              {ARTICLES.map((article) => (
                <article key={article.slug} className="ip-card">
                  <div className="ip-card-img-wrap">
                    <img src={article.featuredImage} alt={article.featuredImageAlt} loading="lazy" decoding="async" />
                  </div>
                  <div className="ip-card-body">
                    <p className="ip-card-cat">{article.category}</p>
                    <Link to={`/insights/${article.slug}`} className="ip-card-title-link">
                      <h2 className="ip-card-title">{article.shortTitle || article.title}</h2>
                    </Link>
                    <p className="ip-card-excerpt">{article.excerpt}</p>
                    <div className="ip-card-footer">
                      <span className="ip-card-meta">
                        <time dateTime={article.publishedDate}>{formatDate(article.publishedDate)}</time>
                        <span className="ip-card-meta-dot" aria-hidden="true">&middot;</span>
                        <span>{article.readingTime}</span>
                      </span>
                      <Link to={`/insights/${article.slug}`} className="ip-card-read">
                        Read Article
                        <span className="ip-card-arrow" aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Footer />
        <FloatingWhatsAppButton />
      </div>
    </>
  )
}
