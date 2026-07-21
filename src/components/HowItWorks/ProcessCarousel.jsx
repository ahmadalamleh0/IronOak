import { useCallback, useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'

// ── Icons ─────────────────────────────────────────────────────────────────────
const IconClipboard = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="9" y="2" width="6" height="4" rx="1.5"/>
    <path d="M9 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2h-3"/>
    <line x1="9" y1="12" x2="15" y2="12"/>
    <line x1="9" y1="16" x2="13" y2="16"/>
  </svg>
)
const IconSearch = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="7"/>
    <path d="M21 21l-4.35-4.35"/>
    <line x1="9" y1="11" x2="13" y2="11"/>
    <line x1="11" y1="9" x2="11" y2="13"/>
  </svg>
)
const IconDocument = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <path d="M9 15l2 2 4-4"/>
  </svg>
)
const IconCalendar = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <path d="M16 2v4M8 2v4M3 10h18"/>
    <circle cx="8"  cy="15" r=".6" fill="currentColor"/>
    <circle cx="12" cy="15" r=".6" fill="currentColor"/>
    <circle cx="16" cy="15" r=".6" fill="currentColor"/>
    <circle cx="8"  cy="19" r=".6" fill="currentColor"/>
    <circle cx="12" cy="19" r=".6" fill="currentColor"/>
  </svg>
)

const ICON_MAP = { clipboard: IconClipboard, search: IconSearch, document: IconDocument, calendar: IconCalendar }

// ── Data ──────────────────────────────────────────────────────────────────────
const processSteps = [
  { number: '01', eyebrow: 'STEP 01', headline: 'Tell Us What You Need',  text: 'Share your project details through the quote form, by phone, or by email.',                                            icon: 'clipboard' },
  { number: '02', eyebrow: 'STEP 02', headline: 'We Review the Scope',    text: 'We review the requirements, ask any necessary questions, and arrange a site visit when needed.',                       icon: 'search'    },
  { number: '03', eyebrow: 'STEP 03', headline: 'Receive a Clear Quote',  text: 'We confirm the scope, expected timeline, and pricing before work begins.',                                             icon: 'document'  },
  { number: '04', eyebrow: 'STEP 04', headline: 'We Schedule the Work',   text: 'Once approved, we coordinate the work and keep you informed from start to completion.',                               icon: 'calendar'  },
]

const N              = processSteps.length
const DRAG_THRESHOLD = 56
const INACTIVE_SCALE = 0.84
const ANIM_EASE      = [0.4, 0, 0.2, 1]
const ANIM_DURATION  = 0.42

function clamp(v, lo, hi) { return Math.min(Math.max(v, lo), hi) }

function getOffset(index, activeIndex) {
  let d = index - activeIndex
  if (d >  N / 2) d -= N
  if (d < -N / 2) d += N
  return d
}

// ── Scoped CSS ────────────────────────────────────────────────────────────────
const CSS = `
  .pc-card {
    height: 100%;
    box-sizing: border-box;
    border-radius: 28px;
    background: #091827;
    border: 1px solid rgba(201,162,74,0.16);
    box-shadow:
      0 1px 4px rgba(0,0,0,0.08),
      0 4px 18px rgba(0,0,0,0.11),
      inset 0 1px 0 rgba(255,255,255,0.04);
    padding: 28px 28px 24px;
    display: flex;
    flex-direction: column;
    user-select: none;
    -webkit-user-select: none;
  }
  .pc-card--active {
    border-color: rgba(201,162,74,0.28);
    box-shadow:
      0 2px 8px rgba(0,0,0,0.10),
      0 8px 26px rgba(0,0,0,0.14),
      0 0 0 1px rgba(201,162,74,0.07),
      inset 0 1px 0 rgba(255,255,255,0.05);
  }
  .pc-icon-box {
    width: 38px; height: 38px;
    border-radius: 10px;
    background: rgba(201,162,74,0.10);
    border: 1px solid rgba(201,162,74,0.22);
    display: flex; align-items: center; justify-content: center;
    color: #C9A24A;
    flex-shrink: 0;
    margin-bottom: 16px;
  }
  .pc-indicators {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-top: 22px;
  }
  .pc-dot {
    height: 6px;
    border: none;
    border-radius: 999px;
    padding: 0;
    cursor: pointer;
    transition: width 0.4s ease, background-color 0.3s ease;
  }
  .pc-dot:focus-visible {
    outline: 2px solid rgba(201,162,74,0.7);
    outline-offset: 3px;
  }
  @media (prefers-reduced-motion: reduce) {
    .pc-dot { transition: none; }
  }
`

// ── Card inner ────────────────────────────────────────────────────────────────
function StepCard({ step, isActive }) {
  const Icon = ICON_MAP[step.icon] || IconClipboard
  return (
    <div className={`pc-card${isActive ? ' pc-card--active' : ''}`}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18, flexShrink: 0 }}>
        <span style={{ fontFamily: '"Manrope",system-ui,sans-serif', fontSize: '0.57rem', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#C9A24A' }}>
          {step.eyebrow}
        </span>
        <span style={{ fontFamily: '"Manrope",system-ui,sans-serif', fontSize: '0.64rem', fontWeight: 500, letterSpacing: '0.06em', color: 'rgba(247,243,234,0.18)' }}>
          {step.number} / 04
        </span>
      </div>

      <div style={{ fontFamily: '"Inter Tight",Inter,Arial,sans-serif', fontWeight: 900, fontSize: '3.5rem', letterSpacing: '-0.055em', lineHeight: 1, color: '#FFFFFF', marginBottom: 14, flexShrink: 0, userSelect: 'none' }}>
        {step.number}
      </div>

      <div className="pc-icon-box"><Icon /></div>

      <h3 style={{ fontFamily: '"Inter Tight",Inter,Arial,sans-serif', fontWeight: 900, fontSize: '1.28rem', letterSpacing: '-0.02em', lineHeight: 1.22, color: '#F7F3EA', margin: '0 0 12px', flexShrink: 0 }}>
        {step.headline}
      </h3>

      <p style={{ fontFamily: '"Manrope",system-ui,sans-serif', fontSize: '0.925rem', lineHeight: 1.72, color: 'rgba(247,243,234,0.72)', margin: 0, flex: 1 }}>
        {step.text}
      </p>

      <div style={{ height: 1, background: 'linear-gradient(90deg,rgba(201,162,74,0.28),rgba(201,162,74,0.06))', marginTop: 20, flexShrink: 0 }} />
    </div>
  )
}

// ── Main component — activeIndex controlled externally (scroll-driven) ────────
export default function ProcessCarousel({ activeIndex, onNavigate }) {
  const reduceMotion = useReducedMotion()
  const [dragging, setDragging] = useState(false)
  const [vw,       setVw]       = useState(() => window.innerWidth)

  useEffect(() => {
    const fn = () => setVw(window.innerWidth)
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])

  const isMobile = vw < 640
  const isTablet = vw >= 640 && vw < 1024

  const cardWidth  = isMobile ? Math.min(vw - 68, 330) : isTablet ? 330 : 360
  const cardHeight = isMobile ? 410 : isTablet ? 420 : 440
  const spacing    = isMobile ? cardWidth * 0.88 : isTablet ? 175 : 205
  const stageH     = cardHeight + 64

  const previous = useCallback(() => onNavigate(i => (i === 0 ? N - 1 : i - 1)), [onNavigate])
  const next     = useCallback(() => onNavigate(i => (i === N - 1 ? 0 : i + 1)), [onNavigate])
  const goTo     = useCallback((i) => onNavigate(clamp(i, 0, N - 1)), [onNavigate])

  const handleDragEnd = useCallback((_e, info) => {
    if (info.offset.x >  DRAG_THRESHOLD) previous()
    else if (info.offset.x < -DRAG_THRESHOLD) next()
  }, [previous, next])

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowLeft')  { e.preventDefault(); previous() }
    if (e.key === 'ArrowRight') { e.preventDefault(); next() }
  }, [previous, next])

  return (
    <div
      role="region"
      aria-label="How it works — process steps"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      style={{ outline: 'none' }}
    >
      <style>{CSS}</style>

      <div style={{ maxWidth: 900, margin: '0 auto', overflow: 'hidden', position: 'relative', height: stageH }}>
        <motion.div
          drag={reduceMotion ? false : 'x'}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.16}
          onDragStart={() => setDragging(true)}
          onDragEnd={(e, info) => { setDragging(false); handleDragEnd(e, info) }}
          style={{ width: '100%', height: '100%', overflow: 'visible', touchAction: 'pan-y', cursor: dragging ? 'grabbing' : 'grab' }}
        >
          {processSteps.map((step, index) => {
            const distance    = getOffset(index, activeIndex)
            const absDistance = Math.abs(distance)
            const isActive    = distance === 0
            const x           = distance * spacing

            return (
              <motion.div
                key={step.number}
                animate={{
                  x,
                  scale:   isActive ? 1 : INACTIVE_SCALE,
                  opacity: absDistance >= 2 ? 0 : 1,
                }}
                transition={{
                  duration: reduceMotion ? 0 : ANIM_DURATION,
                  ease:     ANIM_EASE,
                }}
                style={{
                  position:      'absolute',
                  left:          '50%',
                  top:           '50%',
                  width:         cardWidth,
                  height:        cardHeight,
                  marginLeft:    -cardWidth  / 2,
                  marginTop:     -cardHeight / 2,
                  zIndex:        isActive ? 50 : 50 - absDistance,
                  cursor:        isActive ? 'inherit' : 'pointer',
                  pointerEvents: absDistance >= 2 ? 'none' : 'auto',
                  borderRadius:  28,
                  overflow:      'hidden',
                  outline:       'none',
                }}
                role={isActive ? 'group' : 'button'}
                tabIndex={isActive ? -1 : 0}
                aria-label={isActive ? step.headline : `Go to step ${index + 1}: ${step.headline}`}
                onClick={() => { if (!isActive) goTo(index) }}
                onKeyDown={(e) => {
                  if (!isActive && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault(); goTo(index)
                  }
                }}
              >
                <StepCard step={step} isActive={isActive} />
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Step indicators */}
      <div className="pc-indicators" role="group" aria-label="Step navigation">
        {processSteps.map((step, index) => (
          <button
            key={index}
            className="pc-dot"
            onClick={() => goTo(index)}
            aria-label={`Go to step ${index + 1}: ${step.headline}`}
            aria-current={index === activeIndex ? 'true' : undefined}
            style={{
              width:           index === activeIndex ? 28 : 8,
              backgroundColor: index === activeIndex ? '#C9A24A' : 'rgba(7,17,29,0.18)',
            }}
          />
        ))}
      </div>
    </div>
  )
}
