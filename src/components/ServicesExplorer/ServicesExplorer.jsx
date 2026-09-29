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
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px 32px;
}
@media (min-width: 721px) {
  .io-svc-list { grid-template-columns: repeat(2, 1fr); }
  /* Odd item out (5 services in a 2-up grid) — center it instead of
     leaving it stuck in the left column with an empty slot beside it. */
  .io-svc-list > .io-svc-row:last-child:nth-child(odd) {
    grid-column: 1 / -1;
    width: calc((100% - 32px) / 2);
    margin: 0 auto;
  }
}

.io-svc-row {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 18px;
  text-decoration: none;
  color: inherit;
  transition: transform 240ms ease;
}
.io-svc-row:hover, .io-svc-row:focus-visible {
  transform: translateY(-4px);
}
.io-svc-row:focus-visible {
  outline: 2px solid rgba(201,162,74,0.65);
  outline-offset: 6px;
  border-radius: 14px;
}

/* Photograph — big, card-style; way more prominent than the old
   small side thumbnail so it carries real visual weight in a 2-up grid. */
.io-svc-img-wrap {
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(244,241,234,0.08);
  box-shadow: 0 12px 32px rgba(0,0,0,0.24);
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
.io-svc-content { min-width: 0; }
.io-svc-title-row {
  display: flex; align-items: center; gap: 14px;
  margin-bottom: 8px;
}
.io-svc-icon {
  flex-shrink: 0;
  /* Definite width AND height (not width:auto) — an inline SVG forced to
     width:100% while its parent's width is itself "auto" is a circular
     sizing reference. Browsers resolve that by falling back to the SVG's
     native pixel size (its viewBox dimensions), which is far bigger than
     this box, so overflow:hidden was clipping most of it — including
     whichever part the CCTV camera's rotate() animation swung into at
     any given moment. A fixed square box removes the ambiguity, and
     preserveAspectRatio (SVG default: meet) letterboxes non-square
     artwork inside it without cropping anything. */
  width: clamp(64px, 10vw, 84px);
  height: clamp(64px, 10vw, 84px);
  display: flex; align-items: center; justify-content: center;
  /* Visible, not hidden: some of these illustrations animate (rotate,
     translate) beyond their own viewBox, so a hard clip can still cut
     off part of the motion even once sizing is correct. There's enough
     surrounding gap in the row that a small icon briefly exceeding its
     box during motion reads as intentional, not broken. */
  overflow: visible;
}
.io-svc-icon svg, .io-svc-icon object, .io-svc-icon img {
  width: 100% !important; height: 100% !important;
  object-fit: contain !important;
  display: block;
}
.io-svc-title {
  font-family: "Inter Tight", Inter, Arial, sans-serif;
  font-weight: 900; letter-spacing: -0.02em;
  font-size: clamp(1.2rem, 2.3vw, 1.5rem);
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

@media (prefers-reduced-motion: reduce) {
  .io-svc-row, .io-svc-link, .io-svc-img-wrap img { transition: none; }
  .io-svc-row:hover, .io-svc-row:focus-visible { transform: none; }
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
                    <span className="io-svc-icon" aria-hidden="true">
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
