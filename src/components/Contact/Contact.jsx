import { useState } from 'react'

// ── Palette ──────────────────────────────────────────────────────────────────
const C = {
  cream:    '#F4F1EA',
  navy:     '#07111D',
  graphite: '#1D242C',
  stone:    '#6F7478',
  soft:     '#A8A59E',
  gold:     '#C9A24A',
  warm:     '#D8B866',
}

// ── Scoped CSS ───────────────────────────────────────────────────────────────
const SCOPED_CSS = `
  /* Service options: 2-col mobile, 3-col tablet+ */
  .io-qt-svc-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 7px;
  }
  @media (min-width: 540px) {
    .io-qt-svc-grid { grid-template-columns: repeat(3, 1fr); }
  }

  /* Property type: single col mobile, 2-col tablet+ */
  .io-qt-prop-grid {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  @media (min-width: 500px) {
    .io-qt-prop-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; }
  }

  /* Timeline chips */
  .io-qt-chips { display: flex; flex-wrap: wrap; gap: 8px; }

  /* Shared input styles */
  .io-qt-input, .io-qt-select, .io-qt-textarea {
    display: block;
    width: 100%;
    font-family: "Manrope", system-ui, sans-serif;
    color: #1D242C;
    outline: none;
    box-sizing: border-box;
    transition: border-color 180ms ease, background 180ms ease;
  }
  .io-qt-input, .io-qt-select {
    padding: 14px 16px;
    border-radius: 10px;
    border: 1.5px solid rgba(7,17,29,0.12);
    background: #F9F8F6;
    font-size: 0.88rem;
    font-weight: 500;
    -webkit-appearance: none; appearance: none;
  }
  .io-qt-select { padding-right: 40px; cursor: pointer; }
  .io-qt-textarea {
    padding: 13px 16px;
    border-radius: 10px;
    border: 1.5px solid rgba(7,17,29,0.12);
    background: #F9F8F6;
    font-size: 0.875rem; font-weight: 500;
    resize: none; min-height: 86px; line-height: 1.6;
  }
  .io-qt-input:focus,
  .io-qt-select:focus,
  .io-qt-textarea:focus {
    border-color: rgba(201,162,74,0.55);
    background: #fff;
  }
  .io-qt-input::placeholder,
  .io-qt-textarea::placeholder { color: #A8A59E; }

  /* Project size slider */
  .io-qt-slider {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 6px;
    border-radius: 3px;
    outline: none;
    cursor: pointer;
  }
  .io-qt-slider::-webkit-slider-runnable-track {
    height: 6px;
    border-radius: 3px;
  }
  .io-qt-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: #C9A24A;
    border: 3px solid #fff;
    box-shadow: 0 2px 12px rgba(201,162,74,0.50);
    cursor: pointer;
    margin-top: -10px;
    transition: transform 120ms ease;
  }
  .io-qt-slider::-webkit-slider-thumb:hover { transform: scale(1.12); }
  .io-qt-slider::-moz-range-thumb {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: #C9A24A;
    border: 3px solid #fff;
    box-shadow: 0 2px 12px rgba(201,162,74,0.50);
    cursor: pointer;
  }

  /* Option button focus ring */
  .io-qt-opt:focus-visible {
    outline: 2px solid rgba(201,162,74,0.75);
    outline-offset: 2px;
    border-radius: 10px;
  }
  .io-qt-opt { -webkit-tap-highlight-color: transparent; }

  /* Service card hover — icon always stays full color */
  .io-qt-svc-card:hover:not(.io-qt-svc-card--sel) {
    border-color: rgba(201,162,74,0.38);
    background: rgba(201,162,74,0.04);
    box-shadow: 0 2px 8px rgba(7,17,29,0.07);
  }

  /* Primary CTA */
  .io-qt-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 13px 26px;
    border-radius: 8px;
    border: none;
    background: #C9A24A;
    font-family: "Manrope", system-ui, sans-serif;
    font-size: 0.76rem; font-weight: 700;
    letter-spacing: 0.07em; text-transform: uppercase;
    color: #07111D; cursor: pointer;
    transition: background 150ms ease, transform 150ms ease, box-shadow 150ms ease;
  }
  .io-qt-btn:hover:not(:disabled) {
    background: #D8B866;
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(201,162,74,0.28);
  }
  .io-qt-btn:disabled { opacity: 0.38; cursor: not-allowed; }

  /* Back link */
  .io-qt-back {
    display: inline-flex; align-items: center; gap: 5px;
    padding: 10px 2px;
    background: none; border: none;
    font-family: "Manrope", system-ui, sans-serif;
    font-size: 0.76rem; font-weight: 600; letter-spacing: 0.04em;
    color: #A8A59E; cursor: pointer;
    transition: color 140ms ease;
  }
  .io-qt-back:hover { color: #6F7478; }

  /* Field label */
  .io-qt-label {
    font-family: "Manrope", system-ui, sans-serif;
    font-size: 0.70rem; font-weight: 700;
    letter-spacing: 0.10em; text-transform: uppercase;
    color: #1D242C; display: block; margin-bottom: 10px;
  }

  @media (prefers-reduced-motion: reduce) {
    .io-qt-btn, .io-qt-back { transition: none; }
  }
`

// ── Data ─────────────────────────────────────────────────────────────────────
const SERVICES = [
  { icon: '/img/repairs-maintenance.png',  label: 'Repairs & Maintenance'   },
  { icon: '/img/renovations.png',          label: 'Renovations'              },
  { icon: '/img/installations-upgrades.png', label: 'Installations & Upgrades' },
  { icon: '/img/construction.png',         label: 'Construction'             },
  { icon: '/img/residential-services.png', label: 'Residential Services'     },
  { icon: '/img/commercial-services.png',  label: 'Commercial Services'      },
  { icon: '/img/repairs-maintenance.png',  label: 'Building Maintenance'     },
  { icon: '/img/plumbing.png',             label: 'Plumbing'                 },
  { icon: '/img/electrical.png',           label: 'Electrical'               },
  { icon: '/img/carpentry-millwork.png',   label: 'Carpentry & Millwork'     },
  { icon: '/img/painting-finishing.png',   label: 'Painting & Finishing'     },
  { icon: '/img/flooring-tile.png',        label: 'Flooring & Tile'          },
  { icon: '/img/drywall.png',              label: 'Drywall & Repairs'        },
  { icon: '/img/exterior-improvements.png', label: 'Exterior Improvements'   },
  { icon: '/img/seasonal.png',             label: 'Seasonal Services'        },
  { icon: '/img/cctv.png',                 label: 'CCTV Installation'        },
  { icon: '/img/custom-projects.png',      label: 'Custom Projects'          },
  { icon: '/img/urgent.png',               label: 'Urgent Repairs'           },
]

const PROPERTY_TYPES = [
  { emoji: '🏠', label: 'Residential Home'                                                           },
  { emoji: '🏢', label: 'Condo / Apartment'                                                          },
  { emoji: '🏬', label: 'Commercial Building'                                                         },
  { emoji: '🏭', label: 'Industrial / Mixed-Use'                                                      },
  { emoji: '🏘', label: 'Property Management / Multi-Unit', image: '/img/property-multi-unit.jpg'    },
]

const TIMELINE = ['ASAP', 'This week', 'This month', 'Flexible']

const GTA_CITIES = [
  'Toronto','North York','Scarborough','Etobicoke',
  'Mississauga','Brampton','Vaughan','Woodbridge',
  'Markham','Richmond Hill','Thornhill',
  'Oakville','Burlington','Milton',
  'Pickering','Ajax','Whitby','Oshawa',
  'Newmarket','Aurora','Caledon','Bolton','Other',
]

// ── Sub-components ────────────────────────────────────────────────────────────

const getAreaLabel = (v) => {
  if (v <= 30)  return 'Small — about a room or two'
  if (v <= 80)  return 'Medium — a few rooms'
  if (v <= 200) return 'Large — a full unit or floor'
  if (v <= 350) return 'Very large — multiple units or levels'
  return 'Major project — full property or large site'
}

// 5-segment progress bar
const ProgressBar = ({ step }) => (
  <div style={{ marginBottom: '28px' }}>
    <p style={{
      fontFamily: '"Manrope", system-ui, sans-serif',
      fontSize: '0.58rem', fontWeight: 700,
      letterSpacing: '0.22em', textTransform: 'uppercase',
      color: C.gold, margin: '0 0 10px',
    }}>
      Step {step} of 5{step === 5 ? ' · Last bit' : ''}
    </p>
    <div style={{ display: 'flex', gap: '4px' }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} style={{
          flex: 1, height: '3px', borderRadius: '2px',
          background: i <= step ? C.gold : 'rgba(7,17,29,0.09)',
          transition: 'background 300ms ease',
        }} />
      ))}
    </div>
  </div>
)

// Bold question heading — last word rendered gold with underline
const QHead = ({ main, highlight, sub }) => (
  <div style={{ marginBottom: '22px' }}>
    <h2 style={{
      fontFamily: '"Inter Tight", Inter, Arial, sans-serif',
      fontWeight: 900,
      fontSize: 'clamp(1.65rem, 5vw, 2.15rem)',
      letterSpacing: '-0.03em', lineHeight: 1.07,
      color: C.navy, margin: '0 0 9px',
    }}>
      {main}{' '}
      <span style={{
        color: C.gold,
        textDecoration: 'underline',
        textDecorationColor: 'rgba(201,162,74,0.30)',
        textDecorationThickness: '2px',
        textUnderlineOffset: '4px',
      }}>
        {highlight}
      </span>
    </h2>
    <p style={{
      fontFamily: '"Manrope", system-ui, sans-serif',
      fontSize: '0.85rem', lineHeight: 1.56,
      color: C.stone, margin: 0,
    }}>{sub}</p>
  </div>
)

// Service option card — PNG icon + label
const SvcCard = ({ icon, label, selected, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`io-qt-opt io-qt-svc-card${selected ? ' io-qt-svc-card--sel' : ''}`}
    style={{
      display: 'flex', alignItems: 'center', gap: '10px',
      width: '100%', padding: '10px 12px',
      borderRadius: '9px', textAlign: 'left', cursor: 'pointer',
      border: selected ? '2px solid rgba(201,162,74,0.72)' : '1.5px solid rgba(7,17,29,0.09)',
      background: selected ? 'rgba(201,162,74,0.10)' : '#F9F8F6',
      boxShadow: selected ? '0 0 0 3px rgba(201,162,74,0.11), 0 4px 14px rgba(201,162,74,0.14)' : 'none',
      transition: 'border-color 140ms ease, background 140ms ease, box-shadow 140ms ease',
      fontFamily: '"Manrope", system-ui, sans-serif',
      WebkitTapHighlightColor: 'transparent',
    }}
  >
    {/* Icon — always full color, no filters */}
    <span style={{
      flexShrink: 0,
      width: '28px', height: '28px',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <img
        src={icon}
        alt=""
        aria-hidden="true"
        width="24"
        height="24"
        loading="lazy"
        decoding="async"
        style={{
          width: '24px', height: '24px',
          objectFit: 'contain', display: 'block',
        }}
      />
    </span>

    <span style={{
      fontSize: '0.77rem', fontWeight: selected ? 700 : 500,
      color: selected ? C.navy : '#3A4148', lineHeight: 1.25,
      flex: 1,
    }}>
      {label}
    </span>

    {selected && (
      <svg style={{ flexShrink: 0 }} viewBox="0 0 14 14" width="13" height="13" fill="none" stroke={C.gold} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2.5 7l3 3 6-5"/>
      </svg>
    )}
  </button>
)

// Larger option card (property type)
const PropCard = ({ emoji, label, image, selected, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="io-qt-opt"
    style={{
      display: 'flex', alignItems: 'center', gap: '13px',
      width: '100%', padding: '14px 16px',
      borderRadius: '10px', textAlign: 'left', cursor: 'pointer',
      border: `1.5px solid ${selected ? 'rgba(201,162,74,0.62)' : 'rgba(7,17,29,0.10)'}`,
      background: selected ? 'rgba(201,162,74,0.06)' : '#F9F8F6',
      transition: 'border-color 140ms ease, background 140ms ease',
      fontFamily: '"Manrope", system-ui, sans-serif',
    }}
  >
    {image ? (
      <img
        src={image}
        alt=""
        aria-hidden="true"
        style={{ width: '28px', height: '28px', borderRadius: '6px', objectFit: 'cover', flexShrink: 0 }}
      />
    ) : (
      <span style={{ fontSize: '1.25rem', lineHeight: 1, flexShrink: 0 }}>{emoji}</span>
    )}
    <span style={{
      fontSize: '0.875rem', fontWeight: selected ? 700 : 500,
      color: selected ? C.navy : '#3A4148', flex: 1,
    }}>{label}</span>
    {selected && (
      <svg viewBox="0 0 14 14" width="13" height="13" fill="none" stroke={C.gold} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.5 7l3 3 6-5"/>
      </svg>
    )}
  </button>
)

// Pill chip (timeline)
const Chip = ({ label, selected, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="io-qt-opt"
    style={{
      padding: '9px 18px', borderRadius: '100px',
      border: `1.5px solid ${selected ? C.gold : 'rgba(7,17,29,0.13)'}`,
      background: selected ? C.gold : 'transparent',
      fontFamily: '"Manrope", system-ui, sans-serif',
      fontSize: '0.82rem', fontWeight: 600,
      color: selected ? C.navy : C.stone,
      cursor: 'pointer',
      transition: 'all 140ms ease',
      whiteSpace: 'nowrap',
    }}
  >
    {label}
  </button>
)

// Arrow icon
const ArrowRight = () => (
  <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 8h8M8 4l4 4-4 4"/>
  </svg>
)
const ArrowLeft = () => (
  <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 8H4M8 12L4 8l4-4"/>
  </svg>
)

// ── Main component ────────────────────────────────────────────────────────────
const Contact = () => {
  const [step, setStep]         = useState(1)
  const [answers, setAnswers]   = useState({})
  const [notes, setNotes]       = useState('')
  const [otherCity, setOtherCity] = useState('')
  const [contact, setContact]   = useState({ name: '', phone: '', email: '' })
  const [visible, setVisible]   = useState(true)
  const [submitted, setSubmitted] = useState(false)
  const [dir, setDir]           = useState(1)

  const animateTo = (next) => {
    setDir(next > step ? 1 : -1)
    setVisible(false)
    setTimeout(() => { setStep(next); setVisible(true) }, 210)
  }

  // auto-advance after a quick pause so the selection state is visible
  const autoNext = (key, val) => {
    setAnswers((p) => ({ ...p, [key]: val }))
    setTimeout(() => animateTo(step + 1), 300)
  }

  const areaV   = answers.areaSize ?? 40
  const areaPct = ((areaV - 10) / (500 - 10)) * 100

  const canStep4 =
    !!answers.timeline &&
    !!answers.location &&
    (answers.location !== 'Other' || otherCity.trim().length > 0)

  const canSubmit = contact.name.trim().length > 0 && contact.phone.trim().length > 0

  const handleSubmit = () => {
    const loc = answers.location === 'Other' ? (otherCity.trim() || 'Other') : answers.location
    console.log('[IronOak Quote]', { ...answers, location: loc, notes, contact })
    setVisible(false)
    setTimeout(() => { setSubmitted(true); setVisible(true) }, 210)
  }

  const reset = () => {
    setVisible(false)
    setTimeout(() => {
      setStep(1); setAnswers({}); setNotes(''); setOtherCity('')
      setContact({ name: '', phone: '', email: '' }); setSubmitted(false); setVisible(true)
    }, 210)
  }

  const fadeStyle = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateX(0)' : `translateX(${dir * 18}px)`,
    transition: 'opacity 210ms ease, transform 210ms cubic-bezier(0.16,1,0.3,1)',
  }

  return (
    <>
      <style>{SCOPED_CSS}</style>

      {/* ── Quote form section ── */}
      <section
        id="contact"
        style={{ background: C.cream, padding: 'clamp(80px, 10vw, 120px) 24px', overflowX: 'clip' }}
      >
        <div style={{ maxWidth: '580px', margin: '0 auto' }}>

          {/* Section header */}
          {!submitted && (
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <p style={{
                fontFamily: '"Manrope", system-ui, sans-serif',
                fontSize: '0.62rem', fontWeight: 700,
                letterSpacing: '0.28em', textTransform: 'uppercase',
                color: C.gold, margin: '0 0 14px',
              }}>
                Request a Quote
              </p>
              <h2 style={{
                fontFamily: '"Inter Tight", Inter, Arial, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(1.85rem, 4vw, 2.8rem)',
                letterSpacing: '-0.035em', lineHeight: 1.07,
                color: C.navy, margin: '0 0 14px',
              }}>
                Get your free quote.
              </h2>
              <p style={{
                fontFamily: '"Manrope", system-ui, sans-serif',
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                lineHeight: 1.70, color: C.stone, margin: 0,
              }}>
                4 quick questions. No commitment, no fluff.
              </p>
            </div>
          )}

          {/* Animated card wrapper */}
          <div style={fadeStyle}>

            {/* ─── Success state ─── */}
            {submitted && (
              <div style={{
                background: '#fff', borderRadius: '20px',
                padding: 'clamp(32px, 5vw, 52px) clamp(24px, 5vw, 44px)',
                boxShadow: '0 4px 40px rgba(7,17,29,0.09), 0 1px 6px rgba(7,17,29,0.05)',
                textAlign: 'center',
              }}>
                <div style={{
                  width: '52px', height: '52px', borderRadius: '50%',
                  background: 'rgba(201,162,74,0.09)',
                  border: '1.5px solid rgba(201,162,74,0.32)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 24px',
                }}>
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke={C.gold} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </div>
                <h3 style={{
                  fontFamily: '"Inter Tight", Inter, Arial, sans-serif',
                  fontWeight: 900,
                  fontSize: 'clamp(1.45rem, 4vw, 1.9rem)',
                  letterSpacing: '-0.03em', lineHeight: 1.1,
                  color: C.navy, margin: '0 0 12px',
                }}>
                  We've got your request.
                </h3>
                <p style={{
                  fontFamily: '"Manrope", system-ui, sans-serif',
                  fontSize: '0.9rem', lineHeight: 1.72,
                  color: C.stone, maxWidth: '360px', margin: '0 auto 32px',
                }}>
                  Our team will review the details and reach out shortly with the next step.
                </p>
                <button type="button" onClick={reset} className="io-qt-btn">
                  Start Over
                </button>
              </div>
            )}

            {/* ─── Form card ─── */}
            {!submitted && (
              <div style={{
                background: '#fff', borderRadius: '20px',
                padding: 'clamp(24px, 4vw, 36px) clamp(20px, 4vw, 32px)',
                boxShadow: '0 4px 40px rgba(7,17,29,0.09), 0 1px 6px rgba(7,17,29,0.05)',
              }}>
                <ProgressBar step={step} />

                {/* ── STEP 1: Service ── */}
                {step === 1 && (
                  <>
                    <QHead
                      main="What do you need"
                      highlight="doing?"
                      sub="Pick the service that fits best. You can always add more later."
                    />
                    <div className="io-qt-svc-grid">
                      {SERVICES.map(({ icon, label }) => (
                        <SvcCard
                          key={label}
                          icon={icon}
                          label={label}
                          selected={answers.service === label}
                          onClick={() => autoNext('service', label)}
                        />
                      ))}
                    </div>
                  </>
                )}

                {/* ── STEP 2: Property type ── */}
                {step === 2 && (
                  <>
                    <QHead
                      main="What type of"
                      highlight="property?"
                      sub="Tell us what kind of space this is for."
                    />
                    <div className="io-qt-prop-grid">
                      {PROPERTY_TYPES.map(({ emoji, label, image }) => (
                        <PropCard
                          key={label}
                          emoji={emoji}
                          image={image}
                          label={label}
                          selected={answers.propertyType === label}
                          onClick={() => autoNext('propertyType', label)}
                        />
                      ))}
                    </div>
                  </>
                )}

                {/* ── STEP 3: Project size ── */}
                {step === 3 && (
                  <>
                    <QHead
                      main="How big is"
                      highlight="the project?"
                      sub="Best guess is fine — we'll confirm the details with you."
                    />
                    <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                      <div style={{
                        fontFamily: '"Inter Tight", Inter, Arial, sans-serif',
                        fontWeight: 900,
                        fontSize: 'clamp(2.6rem, 8vw, 3.4rem)',
                        letterSpacing: '-0.04em', lineHeight: 1,
                        color: C.navy,
                      }}>
                        {areaV}
                        <span style={{
                          fontFamily: '"Manrope", system-ui, sans-serif',
                          fontSize: '1.2rem', fontWeight: 500,
                          color: C.stone, marginLeft: '6px',
                        }}>m²</span>
                      </div>
                      <p style={{
                        fontFamily: '"Manrope", system-ui, sans-serif',
                        fontSize: '0.82rem', color: C.stone,
                        margin: '8px 0 0',
                      }}>
                        {getAreaLabel(areaV)}
                      </p>
                    </div>

                    <div>
                      <input
                        type="range"
                        min="10" max="500" step="5"
                        value={areaV}
                        className="io-qt-slider"
                        onChange={(e) => setAnswers((p) => ({ ...p, areaSize: Number(e.target.value) }))}
                        style={{
                          background: `linear-gradient(90deg, ${C.gold} ${areaPct}%, rgba(7,17,29,0.12) ${areaPct}%)`,
                        }}
                        aria-label="Project size in square metres"
                      />
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                        {['Small', 'Medium', 'Large', 'Major Project'].map((lab) => (
                          <span key={lab} style={{
                            fontFamily: '"Manrope", system-ui, sans-serif',
                            fontSize: '0.62rem', color: C.stone, fontWeight: 500,
                          }}>{lab}</span>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* ── STEP 4: Job details ── */}
                {step === 4 && (
                  <>
                    <QHead
                      main="Tell us about"
                      highlight="the job."
                      sub="Best guess is fine. We'll confirm everything with you."
                    />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>

                      {/* Timeline chips */}
                      <div>
                        <span className="io-qt-label">When do you need it?</span>
                        <div className="io-qt-chips">
                          {TIMELINE.map((t) => (
                            <Chip
                              key={t}
                              label={t}
                              selected={answers.timeline === t}
                              onClick={() => setAnswers((p) => ({ ...p, timeline: t }))}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Location */}
                      <div>
                        <span className="io-qt-label">Where is the property?</span>
                        <div style={{ position: 'relative' }}>
                          <select
                            value={answers.location || ''}
                            onChange={(e) => setAnswers((p) => ({ ...p, location: e.target.value }))}
                            className="io-qt-select"
                            style={{ color: answers.location ? C.graphite : C.soft }}
                          >
                            <option value="" disabled>Select city or area</option>
                            {GTA_CITIES.map((city) => (
                              <option key={city} value={city}>{city}</option>
                            ))}
                          </select>
                          <div style={{
                            position: 'absolute', right: '14px', top: '50%',
                            transform: 'translateY(-50%)', pointerEvents: 'none', color: C.stone,
                          }}>
                            <svg viewBox="0 0 12 8" width="11" height="8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M1 1.5L6 6.5L11 1.5"/>
                            </svg>
                          </div>
                        </div>
                        {answers.location === 'Other' && (
                          <input
                            type="text"
                            placeholder="Your city or area"
                            value={otherCity}
                            onChange={(e) => setOtherCity(e.target.value)}
                            className="io-qt-input"
                            style={{ marginTop: '8px' }}
                            autoFocus
                          />
                        )}
                      </div>

                      {/* Notes (optional) */}
                      <div>
                        <span className="io-qt-label">
                          Additional details{' '}
                          <span style={{ fontWeight: 400, color: C.soft, textTransform: 'none', letterSpacing: 0 }}>
                            (optional)
                          </span>
                        </span>
                        <textarea
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          className="io-qt-textarea"
                          placeholder="Describe the job, size, or anything helpful…"
                          rows={3}
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* ── STEP 5: Contact ── */}
                {step === 5 && (
                  <>
                    <QHead
                      main="Where do we"
                      highlight="reach you?"
                      sub="Almost there! Your quote will be ready today. Let us know how to get back to you."
                    />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <input
                        type="text"
                        placeholder="Your name"
                        value={contact.name}
                        onChange={(e) => setContact((p) => ({ ...p, name: e.target.value }))}
                        className="io-qt-input"
                        autoFocus
                        aria-label="Your name"
                      />
                      <input
                        type="tel"
                        placeholder="Mobile number"
                        value={contact.phone}
                        onChange={(e) => setContact((p) => ({ ...p, phone: e.target.value }))}
                        className="io-qt-input"
                        aria-label="Mobile number"
                      />
                      <input
                        type="email"
                        placeholder="Email address (optional)"
                        value={contact.email}
                        onChange={(e) => setContact((p) => ({ ...p, email: e.target.value }))}
                        className="io-qt-input"
                        aria-label="Email address"
                      />
                      <p style={{
                        fontFamily: '"Manrope", system-ui, sans-serif',
                        fontSize: '0.72rem', color: C.soft,
                        lineHeight: 1.55, margin: '2px 0 0',
                      }}>
                        We'll only use this to follow up on your request.
                      </p>
                    </div>
                  </>
                )}

                {/* ── Navigation ── */}
                {step > 1 && (
                  <div style={{
                    display: 'flex', alignItems: 'center',
                    justifyContent: step >= 3 ? 'space-between' : 'flex-start',
                    marginTop: '26px',
                  }}>
                    <button type="button" onClick={() => animateTo(step - 1)} className="io-qt-back">
                      <ArrowLeft /> Back
                    </button>

                    {step === 3 && (
                      <button type="button" onClick={() => animateTo(4)} className="io-qt-btn">
                        Continue <ArrowRight />
                      </button>
                    )}

                    {step === 4 && (
                      <button
                        type="button"
                        onClick={() => animateTo(5)}
                        disabled={!canStep4}
                        className="io-qt-btn"
                      >
                        Continue <ArrowRight />
                      </button>
                    )}

                    {step === 5 && (
                      <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={!canSubmit}
                        className="io-qt-btn"
                      >
                        Get My Quote <ArrowRight />
                      </button>
                    )}
                  </div>
                )}

              </div>
            )}

          </div>
        </div>
      </section>

    </>
  )
}

export default Contact
