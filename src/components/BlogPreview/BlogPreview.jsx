import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { getFeaturedArticles } from '../../data/articles.js'

const ARTICLES = getFeaturedArticles(3)

const CSS = `
.io-blog-section {
  background: #F4F1EA;
  padding: clamp(72px, 9vw, 108px) clamp(20px, 6vw, 96px);
  border-bottom: 1px solid rgba(9,19,31,0.09);
}
.io-blog-inner {
  max-width: 1140px;
  margin: 0 auto;
}
.io-blog-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
  flex-wrap: wrap;
  margin-bottom: clamp(36px, 5vw, 52px);
}
.io-blog-head-left {}
.io-blog-eyebrow {
  font-family: "Manrope", system-ui, sans-serif;
  font-size: 0.60rem;
  font-weight: 700;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #C9A24A;
  margin: 0 0 14px;
}
.io-blog-h2 {
  font-family: "Inter Tight", Inter, Arial, sans-serif;
  font-size: clamp(1.8rem, 3.2vw, 2.45rem);
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1.12;
  color: #07111D;
  margin: 0 0 14px;
}
.io-blog-desc {
  font-family: "Manrope", system-ui, sans-serif;
  font-size: clamp(0.88rem, 1.3vw, 0.95rem);
  line-height: 1.65;
  color: rgba(7,17,29,0.54);
  margin: 0;
  max-width: 480px;
}
.io-blog-view-all {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-family: "Manrope", system-ui, sans-serif;
  font-size: 0.73rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #07111D;
  text-decoration: none;
  white-space: nowrap;
  padding-bottom: 3px;
  border-bottom: 1.5px solid rgba(201,162,74,0.55);
  transition: color 180ms ease, border-color 180ms ease, gap 200ms ease;
}
.io-blog-view-all:hover {
  color: #C9A24A;
  border-color: #C9A24A;
  gap: 11px;
}

/* Grid */
.io-blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(14px, 2.2vw, 24px);
}
@media (max-width: 860px) {
  .io-blog-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 540px) {
  .io-blog-grid {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 6px;
    scrollbar-width: none;
  }
  .io-blog-grid::-webkit-scrollbar { display: none; }
  .io-blog-card {
    flex: 0 0 86%;
    scroll-snap-align: start;
  }
}

/* Card */
.io-blog-card {
  background: #FDFCF8;
  border-radius: 18px;
  border: 1px solid rgba(9,19,31,0.08);
  box-shadow: 0 1px 3px rgba(0,0,0,0.05), 0 4px 14px rgba(0,0,0,0.06);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  transition: transform 260ms ease, box-shadow 260ms ease, border-color 260ms ease;
}
.io-blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.08), 0 14px 32px rgba(0,0,0,0.09);
  border-color: rgba(9,19,31,0.14);
}
.io-blog-card:focus-within {
  outline: 2px solid rgba(201,162,74,0.60);
  outline-offset: 2px;
}

/* Image */
.io-blog-img-wrap {
  aspect-ratio: 16 / 10;
  overflow: hidden;
  flex-shrink: 0;
}
.io-blog-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 420ms ease;
}
.io-blog-card:hover .io-blog-img-wrap img {
  transform: scale(1.05);
}

/* Body */
.io-blog-body {
  padding: clamp(18px, 2.4vw, 26px) clamp(18px, 2.2vw, 24px);
  display: flex;
  flex-direction: column;
  flex: 1;
}
.io-blog-cat {
  font-family: "Manrope", system-ui, sans-serif;
  font-size: 0.595rem;
  font-weight: 800;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: #C9A24A;
  margin: 0 0 11px;
}
.io-blog-title {
  font-family: "Inter Tight", Inter, Arial, sans-serif;
  font-size: clamp(0.97rem, 1.55vw, 1.06rem);
  font-weight: 800;
  letter-spacing: -0.022em;
  line-height: 1.28;
  color: #07111D;
  margin: 0 0 11px;
  text-decoration: none;
  display: block;
  transition: color 200ms ease;
}
.io-blog-card:hover .io-blog-title {
  color: #4D3510;
}
.io-blog-excerpt {
  font-family: "Manrope", system-ui, sans-serif;
  font-size: clamp(0.83rem, 1.15vw, 0.875rem);
  line-height: 1.66;
  color: rgba(7,17,29,0.54);
  margin: 0;
  flex: 1;
}

/* Footer row */
.io-blog-card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 18px;
  padding-top: 14px;
  border-top: 1px solid rgba(9,19,31,0.07);
}
.io-blog-meta {
  font-family: "Manrope", system-ui, sans-serif;
  font-size: 0.73rem;
  color: rgba(7,17,29,0.34);
}
.io-blog-read {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-family: "Manrope", system-ui, sans-serif;
  font-size: 0.70rem;
  font-weight: 800;
  letter-spacing: 0.10em;
  text-transform: uppercase;
  color: #C9A24A;
  text-decoration: none;
}
.io-blog-read:focus-visible {
  outline: 2px solid rgba(201,162,74,0.65);
  border-radius: 4px;
  outline-offset: 2px;
}
.io-blog-arrow {
  display: inline-block;
  transition: transform 220ms ease;
}
.io-blog-card:hover .io-blog-arrow {
  transform: translateX(4px);
}
`

export default function BlogPreview() {
  const gridRef = useRef(null)

  useEffect(() => {
    const cards = Array.from(gridRef.current?.querySelectorAll('.io-blog-card') ?? [])
    if (!cards.length) return

    cards.forEach((card, i) => {
      card.style.opacity = '0'
      card.style.transform = 'translateY(24px)'
      card.style.transition = `opacity 0.5s ease ${i * 0.12}s, transform 0.5s ease ${i * 0.12}s`
    })

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cards.forEach((card) => {
              card.style.opacity = '1'
              card.style.transform = 'none'
            })
            io.disconnect()
          }
        })
      },
      { threshold: 0.1 },
    )
    if (gridRef.current) io.observe(gridRef.current)
    return () => io.disconnect()
  }, [])

  return (
    <>
      <style>{CSS}</style>
      <section className="io-blog-section" aria-labelledby="blog-preview-heading">
        <div className="io-blog-inner">
          <div className="io-blog-head">
            <div className="io-blog-head-left">
              <p className="io-blog-eyebrow">Insights &amp; Property Guides</p>
              <h2 className="io-blog-h2" id="blog-preview-heading">
                Practical advice for better properties.
              </h2>
              <p className="io-blog-desc">
                Explore helpful insights on property maintenance, repairs, renovations,
                and protecting the long-term value of your property.
              </p>
            </div>
            <Link to="/insights" className="io-blog-view-all" aria-label="View all articles">
              View All Articles
              <span className="io-blog-arrow" aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="io-blog-grid" ref={gridRef}>
            {ARTICLES.map((article) => (
              <article key={article.slug} className="io-blog-card">
                <div className="io-blog-img-wrap">
                  <img
                    src={article.featuredImage}
                    alt={article.featuredImageAlt}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="io-blog-body">
                  <p className="io-blog-cat">{article.category}</p>
                  <Link to={`/insights/${article.slug}`} className="io-blog-title">
                    {article.shortTitle || article.title}
                  </Link>
                  <p className="io-blog-excerpt">{article.excerpt}</p>
                  <div className="io-blog-card-footer">
                    <span className="io-blog-meta">{article.readingTime}</span>
                    <Link to={`/insights/${article.slug}`} className="io-blog-read">
                      Read Article
                      <span className="io-blog-arrow" aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
