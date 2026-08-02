import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  IllustrationMaintenance,
  IllustrationRenovations,
  IllustrationInterior,
  IllustrationInstallations,
  IllustrationExterior,
  IllustrationSpecialty,
  SVG_ANIM_CSS,
} from '../ServicesIllustrations/index.jsx'

gsap.registerPlugin(ScrollTrigger)

const SCROLL_PER = 680   // px per service; (N-1) × 680 = 4080px total pin

/* ─────────────────────────────────────────────────────────────────
   Service data
   Renovations & Remodeling removed from this explorer; its icon
   (IllustrationRenovations) now represents Capital Projects below.
───────────────────────────────────────────────────────────────── */
const SERVICES = [
  {
    id:          'property-maintenance-repairs',
    num:         '01',
    category:    'Property Maintenance',
    title:       'Property Maintenance & Repairs',
    slug:        '/services/property-maintenance-repairs',
    description: 'Reliable repairs, preventative maintenance, and ongoing property support to keep residential, commercial, and condominium spaces performing at their best.',
  },
  {
    id:          'interior-finishing',
    num:         '02',
    category:    'Interior Finishing',
    title:       'Interior Finishing',
    slug:        '/services/interior-finishing',
    description: 'Professional finishing work for flooring, carpet replacement, wallcoverings, painting, and complete interior refreshes.',
  },
  {
    id:          'capital-project-management',
    num:         '03',
    category:    'Capital Projects',
    title:       'Capital Projects & Project Management',
    slug:        '/services/capital-project-management',
    description: 'Structured planning, multi-trade coordination, and dependable delivery for commercial, condominium, hospitality, and multi-site property improvements.',
  },
  {
    id:          'installations-property-systems',
    num:         '04',
    category:    'Property Systems',
    title:       'Installations & Property Systems',
    slug:        '/services/installations-property-systems',
    description: 'Clean, dependable installation of CCTV systems, retrofit lighting, fixtures, equipment, and essential property upgrades.',
  },
  {
    id:          'exterior-outdoor-improvements',
    num:         '05',
    category:    'Exterior Improvements',
    title:       'Exterior & Outdoor Improvements',
    slug:        '/services/exterior-outdoor-improvements',
    description: 'Exterior upgrades and outdoor property improvements designed to improve function, appearance, and long-term value.',
  },
  {
    id:          'specialty-custom-projects',
    num:         '06',
    category:    'Custom Projects',
    title:       'Specialty & Custom Projects',
    slug:        '/services/specialty-custom-projects',
    description: 'Custom-scoped solutions for unique commercial, condominium, multi-site, and operational property requirements.',
  },
]

const N = SERVICES.length

/* Illustrations — index-matched to SERVICES above. Capital Projects uses
   IllustrationRenovations (its own icon) now that Renovations & Remodeling
   has been removed from this explorer. */
const ILLUSTRATION_LIST = [
  IllustrationMaintenance,
  IllustrationInterior,
  IllustrationRenovations,
  IllustrationInstallations,
  IllustrationExterior,
  IllustrationSpecialty,
]
const ILLUSTRATIONS = ILLUSTRATION_LIST.map((Comp, i) => <Comp key={i} />)

/* ─────────────────────────────────────────────────────────────────
   CSS — scoped to io-pin-* and io-mob-* prefixes
───────────────────────────────────────────────────────────────── */
const CSS = `
/* ── Desktop sticky section ───────────────────────────────────── */
.io-pin-section {
  background: #07111D;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

/* Persistent top label */
.io-pin-topbar {
  position: absolute;
  top: 0; left: 0; right: 0;
  padding: clamp(18px,2.2vh,28px) clamp(24px,5vw,80px);
  z-index: 3;
  pointer-events: none;
}
.io-pin-toplabel {
  font-family: "Manrope", system-ui, sans-serif;
  font-size: 0.58rem; font-weight: 700;
  letter-spacing: 0.30em; text-transform: uppercase;
  color: rgba(201,162,74,0.55);
}

/* Two-column body */
.io-pin-body {
  flex: 1;
  display: flex;
  align-items: center;
  gap: clamp(40px, 5vw, 72px);
  padding:
    clamp(80px, 10vh, 112px)
    clamp(24px, 5vw, 80px)
    clamp(64px, 8vh, 88px);
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
}

/* Left column: all panels stacked in same grid cell */
.io-pin-left {
  flex: 0 0 46%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  align-items: center;
}
.io-pin-panel {
  grid-column: 1;
  grid-row: 1;
  will-change: opacity, transform;
  pointer-events: none;    /* hidden panels: block all events */
  position: relative;
  z-index: 1;
}
/* Active panel: re-enable pointer events so CTA is clickable */
.io-pin-panel:not([aria-hidden]) {
  pointer-events: auto;
  z-index: 2;
}
/* CTA always clickable + above any stacking context */
.io-pin-cta-wrap {
  position: relative;
  z-index: 3;
}

/* Typography */
.io-pin-cat {
  font-family: "Manrope", system-ui, sans-serif;
  font-size: 0.59rem; font-weight: 700;
  letter-spacing: 0.26em; text-transform: uppercase;
  color: rgba(201,162,74,0.72); margin: 0 0 18px;
}
.io-pin-title {
  font-family: "Inter Tight", Inter, Arial, sans-serif;
  font-size: clamp(2.5rem, 5.0vw, 4.8rem);
  font-weight: 900; letter-spacing: -0.04em; line-height: 0.96;
  color: #F4F1EA; margin: 0 0 24px;
}
.io-pin-desc {
  font-family: "Manrope", system-ui, sans-serif;
  font-size: clamp(0.875rem, 1.3vw, 0.975rem);
  line-height: 1.74; color: rgba(244,241,234,0.50);
  max-width: 400px; margin: 0 0 30px;
}
.io-pin-cta {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: "Manrope", system-ui, sans-serif;
  font-size: 0.70rem; font-weight: 800;
  letter-spacing: 0.18em; text-transform: uppercase;
  color: rgba(201,162,74,0.80); text-decoration: none;
  border-bottom: 1.5px solid rgba(201,162,74,0.28);
  padding-bottom: 3px;
  transition: color 200ms ease, gap 220ms ease, border-color 200ms ease;
}
.io-pin-cta:hover { color: #C9A24A; gap: 14px; border-color: rgba(201,162,74,0.65); }
.io-pin-cta:focus-visible {
  outline: 2px solid rgba(201,162,74,0.60); outline-offset: 4px; border-radius: 2px;
}
.io-pin-arr { display: inline-block; transition: transform 220ms ease; }
.io-pin-cta:hover .io-pin-arr { transform: translateX(4px); }

/* Right column: all SVGs stacked in same grid cell — never intercept clicks */
.io-pin-right {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  align-items: center;
  justify-items: center;
  pointer-events: none;
}
.io-pin-illus {
  grid-column: 1;
  grid-row: 1;
  width: 100%;
  max-width: 580px;
  will-change: opacity;
  pointer-events: none;
}

/* Progress indicator */
.io-pin-foot {
  position: absolute;
  bottom: clamp(18px, 2.2vh, 28px);
  left: 50%; transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; gap: 10px;
  z-index: 3; pointer-events: none;
}
.io-pin-track {
  width: 64px; height: 1.5px;
  background: rgba(244,241,234,0.09);
  border-radius: 1px; overflow: hidden;
}
.io-pin-fill {
  height: 100%; border-radius: 1px;
  background: #C9A24A;
  transition: width 320ms cubic-bezier(0.4, 0, 0.2, 1);
}
.io-pin-count {
  font-family: "Manrope", system-ui, sans-serif;
  font-size: 0.58rem; font-weight: 700; letter-spacing: 0.20em;
  color: rgba(244,241,234,0.26);
  font-variant-numeric: tabular-nums;
}

/* ── Mobile: stacked editorial panels ─────────────────────────── */
.io-pin-mobile {
  display: none;
  background: #07111D;
  flex-direction: column;
}
.io-mob-eyebrow {
  font-family: "Manrope", system-ui, sans-serif;
  font-size: 0.58rem; font-weight: 700;
  letter-spacing: 0.30em; text-transform: uppercase;
  color: rgba(201,162,74,0.55);
  padding: clamp(56px,8vw,80px) clamp(20px,6vw,48px) 0;
  margin: 0;
}
.io-mob-panel {
  padding: clamp(48px,7vw,72px) clamp(20px,6vw,48px);
  border-bottom: 1px solid rgba(244,241,234,0.06);
}
.io-mob-panel:last-child { border-bottom: none; }
.io-mob-cat {
  font-family: "Manrope", system-ui, sans-serif;
  font-size: 0.58rem; font-weight: 700;
  letter-spacing: 0.24em; text-transform: uppercase;
  color: rgba(201,162,74,0.65); margin: 0 0 16px;
}
.io-mob-title {
  font-family: "Inter Tight", Inter, Arial, sans-serif;
  font-size: clamp(2.0rem, 7.5vw, 2.8rem);
  font-weight: 900; letter-spacing: -0.035em; line-height: 0.97;
  color: #F4F1EA; margin: 0 0 28px;
}
.io-mob-svg {
  max-width: min(340px, 80vw);
  margin-bottom: 24px;
}
.io-mob-desc {
  font-family: "Manrope", system-ui, sans-serif;
  font-size: clamp(0.875rem, 4.2vw, 1rem);
  line-height: 1.72; color: rgba(244,241,234,0.50);
  margin: 0 0 22px;
}
.io-mob-cta {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: "Manrope", system-ui, sans-serif;
  font-size: 0.68rem; font-weight: 800;
  letter-spacing: 0.18em; text-transform: uppercase;
  color: rgba(201,162,74,0.80); text-decoration: none;
  border-bottom: 1.5px solid rgba(201,162,74,0.28);
  padding-bottom: 3px;
}

/* ── Responsive breakpoints ───────────────────────────────────── */
@media (max-width: 1023px) {
  .io-pin-section { display: none; }
  .io-pin-mobile  { display: flex; }
}

}
`

/* ─────────────────────────────────────────────────────────────────
   Helper: restart CSS draw animations on an SVG wrapper
   (called when a service's illustration becomes active)
───────────────────────────────────────────────────────────────── */
function restartSVGAnims(wrapper) {
  if (!wrapper) return
  wrapper.querySelectorAll('.io-svc-svg-primary, .io-svc-svg-secondary').forEach(el => {
    const delay = el.style.animationDelay
    el.style.animation = 'none'
    void el.getBoundingClientRect()  // force reflow
    el.style.animation = ''
    el.style.animationDelay = delay  // restore inline delay
  })
}

/* ─────────────────────────────────────────────────────────────────
   Main component
───────────────────────────────────────────────────────────────── */
/* Illustrations built from PlayOnVisibleSvg (<object> embeds, e.g. cabin.svg's
   frame-animation) must never be `display:none` — that stops the browser from
   decoding them in the background, so the heavy ones sit blank for seconds the
   moment they're revealed. CSS draw-in illustrations still need display:none
   to stop their keyframe animation from running early, so only skip it here. */
const hideIllus = (el) => {
  if (!el) return
  if (!el.querySelector('object')) el.style.display = 'none'
}
const showIllus = (el) => {
  if (!el) return
  el.style.display = ''
}

export default function ServicesExplorer() {
  const sectionRef   = useRef(null)
  const contentRefs  = useRef([])   // 7 panel divs (left column)
  const svgRefs      = useRef([])   // 7 illus divs (right column)
  const activeRef    = useRef(0)    // avoids stale closure in onUpdate
  const [activeIdx, setActiveIdx]   = useState(0)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const mm = gsap.matchMedia()

    mm.add('(min-width: 1024px)', () => {
      /* ── Initialize all panels ── */
      contentRefs.current.forEach((el, i) => {
        if (!el) return
        gsap.set(el, { opacity: i === 0 ? 1 : 0, y: 0 })
      })
      svgRefs.current.forEach((el, i) => {
        if (!el) return
        if (i === 0) {
          gsap.set(el, { opacity: 1 })
          // SVG 0 CSS animation plays normally on mount
        } else {
          gsap.set(el, { opacity: 0 })
          hideIllus(el)  // prevents CSS draw animation from playing early (object embeds excluded)
        }
      })
      activeRef.current = 0
      setActiveIdx(0)

      /* ── ScrollTrigger pin ── */
      const st = ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: `+=${(N - 1) * SCROLL_PER}`,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        onUpdate(self) {
          const newIdx = Math.min(N - 1, Math.floor(self.progress * N))
          if (newIdx === activeRef.current) return

          const oldIdx = activeRef.current
          const dir    = newIdx > oldIdx ? 1 : -1
          activeRef.current = newIdx

          // Kill any in-flight tweens on the four affected elements
          gsap.killTweensOf([
            contentRefs.current[oldIdx],
            contentRefs.current[newIdx],
            svgRefs.current[oldIdx],
            svgRefs.current[newIdx],
          ].filter(Boolean))

          if (rm) {
            /* Reduced motion: instant swap */
            gsap.set(contentRefs.current[oldIdx], { opacity: 0 })
            gsap.set(svgRefs.current[oldIdx], { opacity: 0 })
            hideIllus(svgRefs.current[oldIdx])

            gsap.set(contentRefs.current[newIdx], { opacity: 1, y: 0 })
            if (svgRefs.current[newIdx]) {
              showIllus(svgRefs.current[newIdx])
              gsap.set(svgRefs.current[newIdx], { opacity: 1 })
            }
          } else {
            /* ── Outgoing ── */
            gsap.to(contentRefs.current[oldIdx], {
              opacity: 0, y: dir * -28,
              duration: 0.28, ease: 'power2.in',
            })
            gsap.to(svgRefs.current[oldIdx], {
              opacity: 0, duration: 0.22, ease: 'power1.in',
              onComplete() {
                hideIllus(svgRefs.current[oldIdx])
              },
            })

            /* ── Incoming ── */
            const svgIn = svgRefs.current[newIdx]
            if (svgIn) {
              showIllus(svgIn)            // removing display:none restarts CSS anims
              restartSVGAnims(svgIn)       // explicit restart for revisits
              gsap.fromTo(svgIn,
                { opacity: 0 },
                { opacity: 1, duration: 0.40, ease: 'power2.out', delay: 0.20 }
              )
            }

            gsap.set(contentRefs.current[newIdx], { y: dir * 30 })
            gsap.to(contentRefs.current[newIdx], {
              opacity: 1, y: 0,
              duration: 0.40, ease: 'power2.out', delay: 0.16,
            })
          }

          setActiveIdx(newIdx)
        },
      })

      /* ── Cleanup ── */
      return () => {
        st.kill()
        svgRefs.current.forEach(el => { if (el) el.style.display = '' })
        gsap.killTweensOf([
          ...contentRefs.current,
          ...svgRefs.current,
        ].filter(Boolean))
      }
    })

    return () => mm.revert()
  }, [])

  return (
    <>
      <style>{CSS}{SVG_ANIM_CSS}</style>

      {/* ════ DESKTOP: sticky cinematic section ════ */}
      <section
        ref={sectionRef}
        id="services-explorer"
        className="io-pin-section"
        aria-label="Services"
      >
        {/* Persistent label */}
        <div className="io-pin-topbar" aria-hidden="true">
          <span className="io-pin-toplabel">Our Services</span>
        </div>

        {/* Two-column body */}
        <div className="io-pin-body">
          {/* Left: stacked content panels */}
          <div className="io-pin-left">
            {SERVICES.map((svc, i) => (
              <div
                key={svc.id}
                ref={el => { contentRefs.current[i] = el }}
                className="io-pin-panel"
                aria-hidden={i !== activeIdx ? 'true' : undefined}
              >
                <p className="io-pin-cat">
                  {svc.num} — {svc.category.toUpperCase()}
                </p>
                <h2 className="io-pin-title">{svc.title}</h2>
                <p className="io-pin-desc">{svc.description}</p>
                <div className="io-pin-cta-wrap">
                  <Link
                    to={svc.slug}
                    className="io-pin-cta"
                    tabIndex={i !== activeIdx ? -1 : 0}
                    aria-label={`Explore ${svc.title}`}
                  >
                    Explore Service
                    <span className="io-pin-arr" aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Right: stacked SVG illustrations */}
          <div className="io-pin-right" aria-hidden="true">
            {ILLUSTRATIONS.map((illus, i) => (
              <div
                key={i}
                ref={el => { svgRefs.current[i] = el }}
                className="io-pin-illus"
              >
                {illus}
              </div>
            ))}
          </div>
        </div>

        {/* Progress */}
        <div className="io-pin-foot" aria-hidden="true">
          <div className="io-pin-track">
            <div
              className="io-pin-fill"
              style={{ width: `${((activeIdx + 1) / N) * 100}%` }}
            />
          </div>
          <span className="io-pin-count">
            {String(activeIdx + 1).padStart(2, '0')}&thinsp;/&thinsp;{String(N).padStart(2, '0')}
          </span>
        </div>
      </section>

      {/* ════ MOBILE: stacked editorial panels ════ */}
      <section className="io-pin-mobile" id="services-explorer-mobile" aria-label="Services">
        <p className="io-mob-eyebrow">Our Services</p>
        {SERVICES.map((svc, i) => (
          <article key={svc.id} className="io-mob-panel">
            <p className="io-mob-cat">{svc.num} — {svc.category.toUpperCase()}</p>
            <h2 className="io-mob-title">{svc.title}</h2>
            <div className="io-mob-svg" aria-hidden="true">
              {ILLUSTRATIONS[i]}
            </div>
            <p className="io-mob-desc">{svc.description}</p>
            <Link to={svc.slug} className="io-mob-cta">
              Explore Service <span aria-hidden="true">→</span>
            </Link>
          </article>
        ))}
      </section>
    </>
  )
}
