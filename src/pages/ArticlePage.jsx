import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton/FloatingWhatsAppButton.jsx'
import NotFound from './NotFound.jsx'
import { getArticleBySlug, getRelatedArticles } from '../data/articles.js'
import { SITE_URL } from '../config/site.js'

/* ─────────────────────────────────────────────────────────────────────────
   Scoped styles — all prefixed with .ap- (article page)
   Light editorial theme, matching the homepage Insights preview section.
───────────────────────────────────────────────────────────────────────── */
const CSS = `
.ap-page { background: #F4F1EA; color: #07111D; font-family: "Manrope", system-ui, sans-serif; }
.ap-inner { max-width: 1180px; margin: 0 auto; padding: 0 clamp(20px, 5vw, 64px); box-sizing: border-box; }

/* ── Hero ──────────────────────────────────────────────────── */
.ap-hero {
  padding: clamp(112px, 14vh, 140px) 0 clamp(40px, 6vh, 56px);
  border-bottom: 1px solid rgba(9,19,31,0.08);
}
.ap-breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 22px;
  flex-wrap: wrap;
}
.ap-breadcrumb a, .ap-breadcrumb span {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-decoration: none;
  color: rgba(7,17,29,0.42);
  transition: color 180ms ease;
}
.ap-breadcrumb a:hover { color: #A9802F; }
.ap-breadcrumb a:focus-visible { outline: 2px solid rgba(201,162,74,0.6); outline-offset: 2px; border-radius: 3px; }
.ap-breadcrumb-sep { color: rgba(7,17,29,0.20); font-size: 0.65rem; }
.ap-breadcrumb-current { color: rgba(7,17,29,0.62) !important; }

.ap-cat {
  font-size: 0.62rem;
  font-weight: 800;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #A9802F;
  margin: 0 0 16px;
}
.ap-h1 {
  font-family: "Inter Tight", Inter, Arial, sans-serif;
  font-size: clamp(2rem, 4.6vw, 3.4rem);
  font-weight: 900;
  letter-spacing: -0.035em;
  line-height: 1.04;
  color: #07111D;
  margin: 0 0 20px;
  max-width: 880px;
}
.ap-intro {
  font-size: clamp(1rem, 1.5vw, 1.15rem);
  line-height: 1.68;
  color: rgba(7,17,29,0.58);
  max-width: 720px;
  margin: 0 0 28px;
}
.ap-meta-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px 18px;
  font-size: 0.80rem;
  color: rgba(7,17,29,0.45);
  margin-bottom: clamp(28px, 4vh, 40px);
}
.ap-meta-dot { color: rgba(7,17,29,0.25); }
.ap-meta-label { font-weight: 700; color: rgba(7,17,29,0.55); }

.ap-hero-img-wrap {
  width: 100%;
  aspect-ratio: 21 / 9;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(9,19,31,0.08);
}
.ap-hero-img-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; }

/* ── Body layout ───────────────────────────────────────────── */
.ap-body-section { padding: clamp(48px, 6vh, 72px) 0; }
.ap-body-grid {
  display: grid;
  grid-template-columns: minmax(0, 760px) 260px;
  gap: clamp(32px, 5vw, 64px);
  align-items: start;
}
@media (max-width: 980px) {
  .ap-body-grid { grid-template-columns: 1fr; }
  .ap-sidebar { display: none; }
}

.ap-article-col { min-width: 0; max-width: 760px; }

.ap-intro-p {
  font-size: 1.02rem;
  line-height: 1.8;
  color: rgba(7,17,29,0.68);
  margin: 0 0 20px;
}

.ap-section { margin: 0 0 clamp(36px, 5vh, 48px); }
.ap-h2 {
  font-family: "Inter Tight", Inter, Arial, sans-serif;
  font-size: clamp(1.35rem, 2.4vw, 1.7rem);
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.2;
  color: #07111D;
  margin: 0 0 18px;
  scroll-margin-top: 110px;
}
.ap-p {
  font-size: 1rem;
  line-height: 1.82;
  color: rgba(7,17,29,0.66);
  margin: 0 0 18px;
}
.ap-p:last-child { margin-bottom: 0; }
.ap-inline-link {
  color: #A9802F;
  text-decoration: underline;
  text-decoration-color: rgba(169,128,47,0.35);
  text-underline-offset: 3px;
  font-weight: 700;
  transition: color 160ms ease, text-decoration-color 160ms ease;
}
.ap-inline-link:hover { color: #07111D; text-decoration-color: rgba(7,17,29,0.4); }
.ap-inline-link:focus-visible { outline: 2px solid rgba(201,162,74,0.6); outline-offset: 2px; border-radius: 2px; }

.ap-list { margin: 0 0 18px; padding-left: 22px; }
.ap-list li {
  font-size: 1rem;
  line-height: 1.75;
  color: rgba(7,17,29,0.66);
  margin-bottom: 8px;
}

/* ── Sidebar ───────────────────────────────────────────────── */
.ap-sidebar { position: sticky; top: 100px; }
.ap-sidebar-card {
  background: #FDFCF8;
  border: 1px solid rgba(9,19,31,0.08);
  border-radius: 12px;
  padding: 22px;
}
.ap-sidebar-label {
  font-size: 0.62rem;
  font-weight: 800;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #A9802F;
  margin: 0 0 14px;
}
.ap-sidebar-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px; }
.ap-sidebar-list a {
  display: block;
  font-size: 0.84rem;
  line-height: 1.4;
  font-weight: 600;
  color: rgba(7,17,29,0.55);
  text-decoration: none;
  transition: color 160ms ease;
}
.ap-sidebar-list a:hover { color: #A9802F; }
.ap-sidebar-list a:focus-visible { outline: 2px solid rgba(201,162,74,0.6); outline-offset: 2px; border-radius: 3px; }

/* ── Related services / articles ──────────────────────────── */
.ap-related { padding: clamp(48px, 6vh, 72px) 0; border-top: 1px solid rgba(9,19,31,0.08); }
.ap-related-label {
  font-size: 0.62rem;
  font-weight: 800;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  color: #A9802F;
  margin: 0 0 24px;
}
.ap-related-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(12px, 2vw, 18px);
}
@media (max-width: 760px) { .ap-related-grid { grid-template-columns: 1fr; } }
@media (max-width: 980px) and (min-width: 761px) { .ap-related-grid { grid-template-columns: repeat(2, 1fr); } }

.ap-related-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: clamp(18px, 2.2vw, 24px);
  border: 1px solid rgba(9,19,31,0.08);
  border-radius: 10px;
  background: #FDFCF8;
  text-decoration: none;
  transition: border-color 200ms ease, transform 200ms ease;
}
.ap-related-card:hover { border-color: rgba(169,128,47,0.35); transform: translateY(-2px); }
.ap-related-card:focus-visible { outline: 2px solid rgba(201,162,74,0.6); outline-offset: 3px; }
.ap-related-cat { font-size: 0.64rem; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: rgba(7,17,29,0.35); }
.ap-related-title { font-family: "Inter Tight", Inter, Arial, sans-serif; font-size: 1.02rem; font-weight: 800; letter-spacing: -0.02em; line-height: 1.3; color: #07111D; }
.ap-related-excerpt { font-size: 0.84rem; line-height: 1.6; color: rgba(7,17,29,0.5); }
.ap-related-arrow { font-size: 0.78rem; color: #A9802F; margin-top: auto; transition: transform 200ms ease; }
.ap-related-card:hover .ap-related-arrow { transform: translateX(4px); }

/* ── Final CTA ─────────────────────────────────────────────── */
.ap-final-cta {
  background: linear-gradient(180deg, rgba(201,162,74,0.06) 0%, transparent 100%);
  border-top: 1px solid rgba(201,162,74,0.18);
  padding: clamp(56px, 7vh, 84px) 0;
  text-align: center;
}
.ap-final-cta-inner { max-width: 520px; margin: 0 auto; }
.ap-final-cta-h {
  font-family: "Inter Tight", Inter, Arial, sans-serif;
  font-size: clamp(1.55rem, 3vw, 2.2rem);
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: #07111D;
  margin: 0 0 14px;
}
.ap-final-cta-p { font-size: 0.95rem; line-height: 1.68; color: rgba(7,17,29,0.55); margin: 0 0 28px; }

.ap-btn-primary {
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
  box-shadow: 0 3px 18px rgba(169,128,47,0.28);
  transition: transform 200ms ease, box-shadow 200ms ease;
}
.ap-btn-primary:hover { transform: translateY(-1px) scale(1.015); box-shadow: 0 6px 24px rgba(169,128,47,0.4); }
.ap-btn-primary:focus-visible { outline: 2px solid rgba(201,162,74,0.7); outline-offset: 3px; }

@media (max-width: 600px) {
  .ap-hero-img-wrap { aspect-ratio: 4 / 3; }
}
`

/* ─── Inline-link paragraph renderer ─────────────────────────────────── */
const Runs = ({ runs }) =>
  runs.map((run, i) =>
    typeof run === 'string'
      ? <span key={i}>{run}</span>
      : <Link key={i} to={run.to} className="ap-inline-link">{run.text}</Link>
  )

const slugifyHeading = (text) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

const formatDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })

/* ─────────────────────────────────────────────────────────────────────────
   ArticlePage component
───────────────────────────────────────────────────────────────────────── */
export default function ArticlePage() {
  const { slug } = useParams()
  const article = getArticleBySlug(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (!article) return

    document.title = article.metaTitle

    const setMeta = (selector, attr, name, content) => {
      let el = document.querySelector(selector)
      if (!el) { el = document.createElement('meta'); el.setAttribute(attr, name); document.head.appendChild(el) }
      el.setAttribute('content', content)
    }
    setMeta('meta[name="description"]', 'name', 'description', article.metaDescription)
    setMeta('meta[property="og:type"]', 'property', 'og:type', 'article')
    setMeta('meta[property="og:title"]', 'property', 'og:title', article.metaTitle)
    setMeta('meta[property="og:description"]', 'property', 'og:description', article.metaDescription)
    setMeta('meta[property="og:image"]', 'property', 'og:image', `${SITE_URL}${article.featuredImage}`)
    setMeta('meta[property="og:url"]', 'property', 'og:url', `${SITE_URL}/insights/${article.slug}`)
    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image')
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', article.metaTitle)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', article.metaDescription)
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', `${SITE_URL}${article.featuredImage}`)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel', 'canonical'); document.head.appendChild(canonical) }
    canonical.setAttribute('href', `${SITE_URL}/insights/${article.slug}`)

    const ldJson = document.createElement('script')
    ldJson.type = 'application/ld+json'
    ldJson.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: article.title,
      description: article.metaDescription,
      image: `${SITE_URL}${article.featuredImage}`,
      datePublished: article.publishedDate,
      dateModified: article.modifiedDate,
      author: { '@type': 'Organization', name: 'IronOak Property Services' },
      publisher: {
        '@type': 'Organization',
        name: 'IronOak Property Services Inc.',
        logo: { '@type': 'ImageObject', url: `${SITE_URL}/ironoak-logo.svg` },
      },
      mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/insights/${article.slug}` },
    })
    document.head.appendChild(ldJson)

    const breadcrumbJson = document.createElement('script')
    breadcrumbJson.type = 'application/ld+json'
    breadcrumbJson.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Insights', item: `${SITE_URL}/insights` },
        { '@type': 'ListItem', position: 3, name: article.title, item: `${SITE_URL}/insights/${article.slug}` },
      ],
    })
    document.head.appendChild(breadcrumbJson)

    return () => {
      ldJson.remove()
      breadcrumbJson.remove()
    }
  }, [slug, article])

  if (!article) return <NotFound />

  const related = getRelatedArticles(article)

  return (
    <>
      <style>{CSS}</style>
      <div className="ap-page">
        <Header ready={true} />

        {/* ════ HERO ════ */}
        <section className="ap-hero" aria-labelledby="ap-title">
          <div className="ap-inner">
            <nav className="ap-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="ap-breadcrumb-sep" aria-hidden="true">/</span>
              <Link to="/insights">Insights</Link>
              <span className="ap-breadcrumb-sep" aria-hidden="true">/</span>
              <span className="ap-breadcrumb-current" aria-current="page">{article.shortTitle || article.title}</span>
            </nav>

            <p className="ap-cat">{article.category}</p>
            <h1 className="ap-h1" id="ap-title">{article.title}</h1>
            <p className="ap-intro">{article.excerpt}</p>

            <div className="ap-meta-row">
              <span><span className="ap-meta-label">Published</span> <time dateTime={article.publishedDate}>{formatDate(article.publishedDate)}</time></span>
              <span className="ap-meta-dot" aria-hidden="true">&middot;</span>
              <span>{article.readingTime}</span>
              <span className="ap-meta-dot" aria-hidden="true">&middot;</span>
              <span>By {article.author}</span>
            </div>

            <div className="ap-hero-img-wrap">
              <img src={article.featuredImage} alt={article.featuredImageAlt} loading="eager" decoding="async" fetchPriority="high" />
            </div>
          </div>
        </section>

        {/* ════ BODY ════ */}
        <section className="ap-body-section">
          <div className="ap-inner ap-body-grid">
            <article className="ap-article-col">
              <header>
                {article.introduction.map((p, i) => (
                  <p key={i} className="ap-intro-p"><Runs runs={p} /></p>
                ))}
              </header>

              {article.sections.map((s) => (
                <section key={s.heading} className="ap-section" aria-labelledby={slugifyHeading(s.heading)}>
                  <h2 className="ap-h2" id={slugifyHeading(s.heading)}>{s.heading}</h2>
                  {s.paragraphs.map((p, i) => (
                    <p key={i} className="ap-p"><Runs runs={p} /></p>
                  ))}
                  {s.list && (
                    <ul className="ap-list">
                      {s.list.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  )}
                </section>
              ))}

              <section className="ap-section" aria-labelledby="ap-conclusion">
                <h2 className="ap-h2" id="ap-conclusion">Final Thoughts</h2>
                {article.conclusion.map((p, i) => (
                  <p key={i} className="ap-p"><Runs runs={p} /></p>
                ))}
              </section>
            </article>

            {/* ── Sidebar: in this guide ── */}
            <nav className="ap-sidebar" aria-label="In this guide">
              <div className="ap-sidebar-card">
                <p className="ap-sidebar-label">In This Guide</p>
                <ul className="ap-sidebar-list">
                  {article.sections.map((s) => (
                    <li key={s.heading}><a href={`#${slugifyHeading(s.heading)}`}>{s.heading}</a></li>
                  ))}
                  <li><a href="#ap-conclusion">Final Thoughts</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </section>

        {/* ════ RELATED SERVICES ════ */}
        <div className="ap-related">
          <div className="ap-inner">
            <p className="ap-related-label">Related Services</p>
            <div className="ap-related-grid">
              {article.relatedServices.map((rel) => (
                <Link key={rel.slug} to={`/services/${rel.slug}`} className="ap-related-card">
                  <span className="ap-related-title">{rel.label}</span>
                  <span className="ap-related-arrow" aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ════ RELATED ARTICLES ════ */}
        {related.length > 0 && (
          <div className="ap-related">
            <div className="ap-inner">
              <p className="ap-related-label">Related Articles</p>
              <div className="ap-related-grid">
                {related.map((rel) => (
                  <Link key={rel.slug} to={`/insights/${rel.slug}`} className="ap-related-card">
                    <span className="ap-related-cat">{rel.category}</span>
                    <span className="ap-related-title">{rel.shortTitle || rel.title}</span>
                    <span className="ap-related-excerpt">{rel.excerpt}</span>
                    <span className="ap-related-arrow" aria-hidden="true">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ════ FINAL CTA ════ */}
        <section className="ap-final-cta" aria-label="Request a quote">
          <div className="ap-inner">
            <div className="ap-final-cta-inner">
              <h2 className="ap-final-cta-h">{article.finalCta.heading}</h2>
              <p className="ap-final-cta-p">{article.finalCta.body}</p>
              <Link to="/#contact" className="ap-btn-primary">{article.finalCta.buttonLabel}</Link>
            </div>
          </div>
        </section>

        <Footer />
        <FloatingWhatsAppButton />
      </div>
    </>
  )
}
