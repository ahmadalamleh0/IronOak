import { Link } from 'react-router-dom'
import {
  IllustrationMaintenance,
  IllustrationRenovations,
  IllustrationInterior,
  IllustrationInstallations,
  IllustrationExterior,
  SVG_ANIM_CSS,
} from '../ServicesIllustrations/index.jsx'

/* ─────────────────────────────────────────────────────────────────
   Service data — order, names, descriptions and links preserved from
   the previous pinned-scroll version. Each `image` is the same hero
   photograph already used on that service's own page (servicePages.js
   richContent.heroImage), reused here rather than duplicated content.
───────────────────────────────────────────────────────────────── */
const SERVICES = [
  {
    id:          'interior-finishing',
    title:       'Interior Finishing',
    slug:        '/services/interior-finishing',
    description: 'Professional finishing work for flooring, carpet replacement, wallcoverings, painting, and complete interior refreshes.',
    image:       '/services/interior-finishing-hero.webp',
    imageAlt:    'Bright commercial office space mid-renovation with exposed ceiling, city views and flooring materials staged on site',
  },
  {
    id:          'exterior-outdoor-improvements',
    title:       'Exterior & Outdoor Improvements',
    slug:        '/services/exterior-outdoor-improvements',
    description: 'Exterior upgrades and outdoor property improvements designed to improve function, appearance, and long-term value.',
    image:       '/services/exterior-outdoor-improvements-hero.webp',
    imageAlt:    'Modern office building entrance at night with an illuminated glass canopy and landscaped walkway',
  },
  {
    id:          'installations-property-systems',
    title:       'Installations & Building Systems',
    slug:        '/services/installations-property-systems',
    description: 'Clean, dependable installation of CCTV systems, retrofit lighting, fixtures, equipment, and essential property upgrades.',
    image:       '/services/installations-property-systems-hero.webp',
    imageAlt:    'Elevated view of a modern glass building entrance with automated pedestrian doors',
  },
  {
    id:          'capital-project-management',
    title:       'Capital Projects & Custom Solutions',
    slug:        '/services/capital-project-management',
    description: 'Coordinated capital improvements, multi-site rollout programs and custom property solutions delivered with consistent scope, scheduling and execution.',
    image:       '/services/capital-project-management-hero.jpg',
    imageAlt:    'Looking up at a modern glass office tower with a construction crane reflected in the facade against a blue sky',
  },
  {
    id:          'property-maintenance-repairs',
    title:       'Property Maintenance & Handyman',
    slug:        '/services/property-maintenance-repairs',
    description: 'Reliable repairs, preventative maintenance, and ongoing property support to keep residential, commercial, and condominium spaces performing at their best.',
    image:       '/services/property-maintenance-homepage.webp',
    imageAlt:    'Maintenance crew cleaning a glossy commercial lobby floor with a mop and cleaning cart',
  },
]

/* Small animated accents — same illustrations as before, index-matched
   to SERVICES, now sized down to sit beside each title instead of
   filling their own panel. */
const ILLUSTRATIONS = [
  <IllustrationInterior key="interior-finishing" />,
  <IllustrationExterior key="exterior-outdoor-improvements" />,
  <IllustrationInstallations key="installations-property-systems" />,
  <IllustrationRenovations key="capital-project-management" />,
  <IllustrationMaintenance key="property-maintenance-repairs" />,
]

/* ─────────────────────────────────────────────────────────────────
   CSS — scoped to io-svc-*
───────────────────────────────────────────────────────────────── */
const CSS = `
.io-svc-section {
  background: #07111D;
  padding: clamp(48px, 7vh, 84px) 0;
}
.io-svc-inner {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 clamp(20px, 5vw, 64px);
  box-sizing: border-box;
}
.io-svc-eyebrow {
  font-family: "Manrope", system-ui, sans-serif;
  font-size: 0.60rem; font-weight: 700;
  letter-spacing: 0.28em; text-transform: uppercase;
  color: rgba(201,162,74,0.65);
  margin: 0 0 clamp(20px, 3vh, 30px);
}

.io-svc-list {
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(244,241,234,0.08);
}
.io-svc-row {
  display: flex;
  align-items: center;
  gap: clamp(20px, 3vw, 36px);
  padding: clamp(16px, 2.4vh, 24px) 4px;
  border-bottom: 1px solid rgba(244,241,234,0.08);
  text-decoration: none;
  color: inherit;
  transition: background 180ms ease, padding-left 180ms ease;
}
.io-svc-row:hover, .io-svc-row:focus-visible {
  background: rgba(244,241,234,0.025);
  padding-left: 10px;
}
.io-svc-row:focus-visible {
  outline: 2px solid rgba(201,162,74,0.65);
  outline-offset: -2px;
}

/* Photograph */
.io-svc-img-wrap {
  flex: 0 0 clamp(150px, 20vw, 216px);
  aspect-ratio: 16 / 9;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid rgba(244,241,234,0.08);
}
.io-svc-img-wrap img {
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: center 35%;
  display: block;
  transition: transform 450ms ease;
}
.io-svc-row:hover .io-svc-img-wrap img { transform: scale(1.04); }

/* Content */
.io-svc-content { flex: 1; min-width: 0; }
.io-svc-title-row {
  display: flex; align-items: center; gap: 12px;
  margin-bottom: 6px;
}
.io-svc-icon {
  flex-shrink: 0;
  height: clamp(40px, 8vw, 52px);
  width: auto;
  max-width: 60px;
  display: flex; align-items: center; justify-content: center;
  overflow: hidden;
}
.io-svc-icon svg, .io-svc-icon object, .io-svc-icon img {
  width: 100% !important; height: 100% !important;
  object-fit: contain !important;
  display: block;
}
/* The camera illustration sits high in its own viewBox; nudge it down
   slightly so it reads as centered next to the title. */
.io-svc-icon--camera { margin-top: 20px; }
.io-svc-title {
  font-family: "Inter Tight", Inter, Arial, sans-serif;
  font-weight: 900; letter-spacing: -0.02em;
  font-size: clamp(1.05rem, 2vw, 1.3rem);
  line-height: 1.2;
  color: #F4F1EA;
  margin: 0;
}
.io-svc-desc {
  font-family: "Manrope", system-ui, sans-serif;
  font-size: clamp(0.82rem, 1.2vw, 0.88rem);
  line-height: 1.62;
  color: rgba(244,241,234,0.50);
  max-width: 540px;
  margin: 0 0 12px;
}
.io-svc-link {
  display: inline-flex; align-items: center; gap: 7px;
  font-family: "Manrope", system-ui, sans-serif;
  font-size: 0.66rem; font-weight: 800;
  letter-spacing: 0.14em; text-transform: uppercase;
  color: rgba(201,162,74,0.80);
  border-bottom: 1.5px solid rgba(201,162,74,0.28);
  padding-bottom: 2px;
  width: fit-content;
  transition: color 180ms ease, gap 180ms ease, border-color 180ms ease;
}
.io-svc-row:hover .io-svc-link, .io-svc-row:focus-visible .io-svc-link {
  color: #C9A24A; gap: 12px; border-color: rgba(201,162,74,0.65);
}
.io-svc-link-arr { display: inline-block; }

/* ── Mobile: stack photo above content ──────────────────────── */
@media (max-width: 720px) {
  .io-svc-row { flex-direction: column; align-items: stretch; gap: 14px; }
  .io-svc-img-wrap { flex-basis: auto; width: 100%; }
  .io-svc-row:hover, .io-svc-row:focus-visible { padding-left: 4px; }
}

@media (prefers-reduced-motion: reduce) {
  .io-svc-row, .io-svc-link, .io-svc-img-wrap img { transition: none; }
  .io-svc-row:hover .io-svc-img-wrap img { transform: none; }
}
`

export default function ServicesExplorer() {
  return (
    <>
      <style>{CSS}{SVG_ANIM_CSS}</style>

      <section
        id="services-explorer"
        className="io-svc-section"
        data-navbar="invert"
        aria-label="Services"
      >
        <div className="io-svc-inner">
          <p className="io-svc-eyebrow">Our Services</p>

          <div className="io-svc-list">
            {SERVICES.map((svc, i) => (
              <Link
                key={svc.id}
                to={svc.slug}
                className="io-svc-row"
                aria-label={`Explore ${svc.title}`}
              >
                <div className="io-svc-img-wrap">
                  <img
                    src={svc.image}
                    alt={svc.imageAlt}
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="io-svc-content">
                  <div className="io-svc-title-row">
                    <span
                      className={`io-svc-icon${svc.id === 'installations-property-systems' ? ' io-svc-icon--camera' : ''}`}
                      aria-hidden="true"
                    >
                      {ILLUSTRATIONS[i]}
                    </span>
                    <h3 className="io-svc-title">{svc.title}</h3>
                  </div>
                  <p className="io-svc-desc">{svc.description}</p>
                  <span className="io-svc-link" aria-hidden="true">
                    Explore Service
                    <span className="io-svc-link-arr">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
