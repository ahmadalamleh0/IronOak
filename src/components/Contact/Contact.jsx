import { useState } from 'react'
import { IconMail, IconPhone, IconClock } from '../icons/index.jsx'
import SectionHeading from '../SectionHeading/SectionHeading.jsx'

// ── Palette ────────────────────────────────────────────────────────────────────
const pal = {
  navy:     '#07111D',
  graphite: '#1D242C',
  stone:    '#6F7478',
  soft:     '#A8A59E',
  gold:     '#C9A24A',
  warm:     '#D8B866',
  cream:    '#F4F1EA',
  sand:     '#DED4C2',
  card:     'rgba(255,255,255,0.97)',
}

// ── Scoped styles — only targets class names prefixed "propertyRequest" ─────────
const SCOPED_CSS = `
  .propertyRequestSlider {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 6px;
    border-radius: 3px;
    outline: none;
    cursor: pointer;
  }
  .propertyRequestSlider::-webkit-slider-runnable-track {
    height: 6px;
    border-radius: 3px;
  }
  .propertyRequestSlider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #C9A24A;
    border: 3px solid #fff;
    box-shadow: 0 2px 12px rgba(201,162,74,0.55);
    cursor: pointer;
    margin-top: -11px;
    transition: transform 120ms ease, box-shadow 120ms ease;
  }
  .propertyRequestSlider::-webkit-slider-thumb:hover {
    transform: scale(1.12);
    box-shadow: 0 4px 18px rgba(201,162,74,0.65);
  }
  .propertyRequestSlider::-moz-range-thumb {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #C9A24A;
    border: 3px solid #fff;
    box-shadow: 0 2px 12px rgba(201,162,74,0.55);
    cursor: pointer;
  }

  .propertyRequestDropdown {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    padding: 15px 44px 15px 18px;
    border-radius: 12px;
    border: 1.5px solid rgba(29,36,44,0.14);
    background: rgba(255,255,255,0.92);
    font-size: 0.9rem;
    font-weight: 500;
    color: #1D242C;
    cursor: pointer;
    outline: none;
    font-family: inherit;
    box-sizing: border-box;
    transition: border-color 200ms ease, background 200ms ease;
  }
  .propertyRequestDropdown:focus {
    border-color: rgba(201,162,74,0.65);
    background: #fff;
  }

  .propertyRequestOtherInput {
    display: block;
    width: 100%;
    margin-top: 10px;
    padding: 15px 18px;
    border-radius: 12px;
    border: 1.5px solid rgba(29,36,44,0.14);
    background: rgba(255,255,255,0.92);
    font-size: 0.9rem;
    font-weight: 500;
    color: #1D242C;
    outline: none;
    font-family: inherit;
    box-sizing: border-box;
    transition: border-color 200ms ease, background 200ms ease;
  }
  .propertyRequestOtherInput:focus {
    border-color: rgba(201,162,74,0.65);
    background: #fff;
  }
  .propertyRequestOtherInput::placeholder { color: #6F7478; }

  .propertyRequestInput {
    display: block;
    width: 100%;
    padding: 15px 18px;
    border-radius: 12px;
    border: 1.5px solid rgba(29,36,44,0.14);
    background: rgba(255,255,255,0.92);
    font-size: 0.9rem;
    font-weight: 500;
    color: #1D242C;
    outline: none;
    font-family: inherit;
    box-sizing: border-box;
    transition: border-color 200ms ease, background 200ms ease;
  }
  .propertyRequestInput:focus {
    border-color: rgba(201,162,74,0.65);
    background: #fff;
  }
  .propertyRequestInput::placeholder { color: #6F7478; }

  /* Responsive option grids */
  .propertyRequestServiceGrid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 9px;
  }
  @media (min-width: 520px) {
    .propertyRequestServiceGrid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .propertyRequestChoiceGrid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 9px;
  }
  @media (min-width: 480px) {
    .propertyRequestChoiceGrid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`

// ── Step-1 service icons (inline SVG) ─────────────────────────────────────────
const IcoMove = () => (
  <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="7" height="7" rx="1.5"/>
    <rect x="11" y="10" width="7" height="7" rx="1.5"/>
    <path d="M13 3h4v4M17 3L12 8"/>
  </svg>
)
const IcoWall = () => (
  <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="16" height="14" rx="1.5"/>
    <line x1="2" y1="8" x2="18" y2="8"/>
    <line x1="2" y1="13" x2="18" y2="13"/>
    <line x1="7" y1="3" x2="7" y2="8"/>
    <line x1="12" y1="8" x2="12" y2="13"/>
    <line x1="7" y1="13" x2="7" y2="17"/>
  </svg>
)
const IcoCam = () => (
  <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 7.5h9l4-3v9l-4-3H2z"/>
    <circle cx="14.5" cy="8" r="0.7" fill="currentColor"/>
  </svg>
)
const IcoWrench = () => (
  <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2a4 4 0 0 0-3.46 6L3 15.5 4.5 17l7.5-7.54A4 4 0 1 0 14 2z"/>
  </svg>
)
const IcoGrid4 = () => (
  <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="6.5" height="6.5" rx="1.5"/>
    <rect x="11.5" y="2" width="6.5" height="6.5" rx="1.5"/>
    <rect x="2" y="11.5" width="6.5" height="6.5" rx="1.5"/>
    <rect x="11.5" y="11.5" width="6.5" height="6.5" rx="1.5"/>
  </svg>
)
const IcoQ = () => (
  <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="10" cy="10" r="8"/>
    <path d="M8 8.5a2 2 0 0 1 4 0c0 1.2-1.2 1.8-2 2.5"/>
    <circle cx="10" cy="14.5" r="0.6" fill="currentColor"/>
  </svg>
)

// ── Data ───────────────────────────────────────────────────────────────────────
const SERVICE_OPTIONS = [
  { value: 'Building / Floor-to-Floor Moves',  desc: 'Moves within buildings, floors, or units', Icon: IcoMove   },
  { value: 'Wall Coverings / Wallpaper',        desc: 'Wallpaper, wall finishes, and coverings',  Icon: IcoWall   },
  { value: 'CCTV / Camera Installation',        desc: 'Security cameras and setup',               Icon: IcoCam    },
  { value: 'General Property Services',         desc: 'Repairs, support, and property work',      Icon: IcoWrench },
  { value: 'Multiple Services',                 desc: 'More than one service needed',              Icon: IcoGrid4  },
  { value: 'Not Sure Yet',                      desc: "We'll help guide you",                      Icon: IcoQ      },
]

const GTA_CITIES = [
  'Toronto','North York','Scarborough','Etobicoke',
  'Mississauga','Brampton','Vaughan','Woodbridge',
  'Markham','Richmond Hill','Thornhill',
  'Oakville','Burlington','Milton',
  'Pickering','Ajax','Whitby','Oshawa',
  'Newmarket','Aurora','Caledon','Bolton',
  'Other',
]

const STEPS = [
  {
    id: 1,  key: 'service',
    intro:  "let's get your request started →",
    q:      'What do you need help with?',
    helper: 'Pick the service that fits best.',
    type:   'service',
    note:   "Tap one and we'll move to the next question.",
  },
  {
    id: 2,  key: 'areaSize',
    intro:  'roughly →',
    q:      'How big is the area?',
    helper: "Best guess is fine — we'll confirm the details on site.",
    type:   'slider',
    note:   "We'll confirm the exact area on site.",
  },
  {
    id: 3,  key: 'propertyType',
    q:      'What type of property is this for?',
    type:   'choice',
    options: ['Residential Building','Commercial Property','Condo / Apartment Building','Office / Retail Space','Industrial / Warehouse','Other'],
  },
  {
    id: 4,  key: 'timeline',
    q:      'When do you need this done?',
    type:   'choice',
    options: ['ASAP','This week','Within 2–4 weeks','This month','Just planning ahead'],
  },
  {
    id: 5,  key: 'location',
    q:      'Where is the property located?',
    type:   'dropdown',
  },
  {
    id: 6,  key: 'contact',
    q:      'Where should our team reach you?',
    helper: "We'll only use this to follow up about your property request.",
    type:   'contact',
  },
]

const TOTAL = STEPS.length

// Connect to backend / email service here when ready
const handlePropertyRequestSubmit = (payload) => {
  console.log('[IronOak] Property Request Payload:', payload)
  // TODO: POST to backend or email service
}

// ── Helpers ────────────────────────────────────────────────────────────────────
const getAreaLabel = (v) => {
  if (v <= 30)  return 'about a small room'
  if (v <= 70)  return 'about a few rooms'
  if (v <= 150) return 'about a small floor/unit'
  if (v <= 300) return 'about a large unit or floor'
  return 'large property area'
}

// ── Shared button styles ───────────────────────────────────────────────────────
const btnPrimary = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
  borderRadius: '8px',
  border: '1px solid rgba(201,162,74,0.7)',
  background: 'linear-gradient(to bottom, #dbb96a, #a9802f)',
  padding: '13px 30px',
  fontSize: '0.76rem', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase',
  color: pal.navy, cursor: 'pointer', fontFamily: 'inherit',
  boxShadow: '0 6px 20px -6px rgba(169,128,47,0.55)',
  transition: 'transform 180ms ease, box-shadow 180ms ease',
}
const btnBack = {
  display: 'inline-flex', alignItems: 'center', gap: '6px',
  padding: '10px 0',
  fontSize: '0.75rem', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase',
  color: pal.stone, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit',
  transition: 'color 160ms ease',
}

// ── Sub-components ─────────────────────────────────────────────────────────────
const ProgressDots = ({ step, total }) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '7px', marginBottom: '28px' }}>
    {Array.from({ length: total }).map((_, i) => {
      const active = i === step - 1
      const done   = i < step - 1
      return (
        <div
          key={i}
          style={{
            height: '8px',
            width:  active ? '22px' : '8px',
            borderRadius: '4px',
            background: active
              ? `linear-gradient(90deg, ${pal.gold}, ${pal.warm})`
              : done ? pal.gold : 'rgba(29,36,44,0.15)',
            transition: 'width 300ms cubic-bezier(0.16,1,0.3,1), background 280ms ease',
          }}
        />
      )
    })}
  </div>
)

const ServiceCard = ({ opt, selected, onClick }) => {
  const { value, desc, Icon } = opt
  return (
    <button
      type="button"
      onClick={onClick}
      className="propertyRequestOption"
      style={{
        display: 'flex', alignItems: 'center', gap: '14px', width: '100%',
        borderRadius: '12px', textAlign: 'left', cursor: 'pointer',
        padding: '14px 16px',
        border: `1.5px solid ${selected ? 'rgba(201,162,74,0.72)' : 'rgba(29,36,44,0.1)'}`,
        background: selected ? 'rgba(201,162,74,0.07)' : 'rgba(255,255,255,0.82)',
        boxShadow: selected ? '0 2px 14px rgba(201,162,74,0.13)' : '0 1px 4px rgba(7,17,29,0.05)',
        transition: 'all 160ms ease',
      }}
    >
      <div style={{
        flexShrink: 0, width: '38px', height: '38px', borderRadius: '10px',
        border: `1px solid ${selected ? 'rgba(201,162,74,0.45)' : 'rgba(29,36,44,0.09)'}`,
        background: selected ? 'rgba(201,162,74,0.11)' : 'rgba(29,36,44,0.04)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: selected ? pal.gold : pal.stone,
        transition: 'all 160ms ease',
      }}>
        <Icon />
      </div>
      <div style={{ minWidth: 0, flex: 1 }}>
        <div style={{ fontSize: '0.875rem', fontWeight: '600', color: pal.graphite, lineHeight: '1.3' }}>{value}</div>
        <div style={{ fontSize: '0.74rem', color: pal.stone, marginTop: '3px', lineHeight: '1.4' }}>{desc}</div>
      </div>
      {selected && (
        <svg style={{ flexShrink: 0 }} viewBox="0 0 16 16" width="16" height="16" fill="none" stroke={pal.gold} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 8l3.5 3.5L13 5"/>
        </svg>
      )}
    </button>
  )
}

const ChoiceCard = ({ label, selected, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="propertyRequestOption"
    style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      width: '100%', borderRadius: '12px', cursor: 'pointer',
      padding: '14px 16px',
      border: `1.5px solid ${selected ? 'rgba(201,162,74,0.72)' : 'rgba(29,36,44,0.1)'}`,
      background: selected ? 'rgba(201,162,74,0.07)' : 'rgba(255,255,255,0.82)',
      fontSize: '0.875rem', fontWeight: selected ? '600' : '500',
      color: selected ? pal.graphite : '#3a4148', textAlign: 'left',
      boxShadow: selected ? '0 2px 14px rgba(201,162,74,0.13)' : '0 1px 4px rgba(7,17,29,0.05)',
      transition: 'all 160ms ease',
      fontFamily: 'inherit',
    }}
  >
    {label}
    {selected && (
      <svg style={{ flexShrink: 0, marginLeft: '8px' }} viewBox="0 0 16 16" width="15" height="15" fill="none" stroke={pal.gold} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 8l3.5 3.5L13 5"/>
      </svg>
    )}
  </button>
)

// ── Contact details — separate section ────────────────────────────────────────
const ContactDetails = () => (
  <section
    id="contact-info"
    className="relative py-16 sm:py-20"
    style={{ backgroundColor: pal.graphite }}
  >
    <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          { Icon: IconMail,  label: 'Email', value: 'naveed.robert@gmail.com', href: 'mailto:naveed.robert@gmail.com' },
          { Icon: IconPhone, label: 'Phone', value: '416-570-9074',            href: 'tel:+14165709074'               },
          { Icon: IconClock, label: 'Hours', value: 'Mon–Fri, 8am–6pm',        href: null                             },
        ].map(({ Icon, label, value, href }) => (
          <div
            key={label}
            style={{
              display: 'flex', alignItems: 'flex-start', gap: '16px',
              padding: '24px', borderRadius: '10px',
              border: '1px solid rgba(201,162,74,0.1)',
              background: 'rgba(255,255,255,0.03)',
            }}
          >
            <div style={{
              flexShrink: 0, width: '36px', height: '36px', borderRadius: '50%',
              border: '1px solid rgba(201,162,74,0.22)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px',
            }}>
              <Icon className="h-4 w-4" style={{ color: pal.gold }} />
            </div>
            <div>
              <p style={{ fontSize: '0.65rem', fontWeight: '700', letterSpacing: '0.22em', textTransform: 'uppercase', color: pal.warm, marginBottom: '6px' }}>
                {label}
              </p>
              {href
                ? <a href={href} style={{ fontSize: '0.875rem', color: pal.soft, textDecoration: 'none', lineHeight: '1.5' }}>{value}</a>
                : <p style={{ fontSize: '0.875rem', color: pal.soft, lineHeight: '1.5' }}>{value}</p>
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

// ── Main component ─────────────────────────────────────────────────────────────
const Contact = () => {
  const [quizStarted, setQuizStarted]   = useState(false)
  const [step, setStep]                 = useState(1)
  const [answers, setAnswers]           = useState({ areaSize: 40 })
  const [contactFields, setContactFields] = useState({ name: '', phone: '', email: '' })
  const [otherCity, setOtherCity]       = useState('')
  const [visible, setVisible]           = useState(true)
  const [submitted, setSubmitted]       = useState(false)
  const [direction, setDirection]       = useState(1) // 1 = forward, -1 = back

  const animateTo = (nextStep) => {
    setDirection(nextStep > step ? 1 : -1)
    setVisible(false)
    setTimeout(() => { setStep(nextStep); setVisible(true) }, 220)
  }

  const handleStart = () => {
    setDirection(1)
    setVisible(false)
    setTimeout(() => { setQuizStarted(true); setStep(1); setVisible(true) }, 220)
  }

  const selectChoice = (key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }))
    setTimeout(() => animateTo(step + 1), 320)
  }

  const goNext = () => { if (step < TOTAL) animateTo(step + 1) }
  const goBack = () => { if (step > 1)    animateTo(step - 1) }

  const handleSubmit = () => {
    const resolvedLocation =
      answers.location === 'Other' ? (otherCity.trim() || 'Other') : (answers.location || '')
    handlePropertyRequestSubmit({
      service:      answers.service,
      areaSize:     `${answers.areaSize ?? 40} m²`,
      propertyType: answers.propertyType,
      timeline:     answers.timeline,
      location:     resolvedLocation,
      otherCity:    answers.location === 'Other' ? otherCity.trim() : undefined,
      contact:      contactFields,
    })
    setDirection(1)
    setVisible(false)
    setTimeout(() => { setSubmitted(true); setVisible(true) }, 220)
  }

  const resetFlow = () => {
    setVisible(false)
    setTimeout(() => {
      setSubmitted(false); setQuizStarted(false); setStep(1)
      setAnswers({ areaSize: 40 }); setContactFields({ name: '', phone: '', email: '' })
      setOtherCity(''); setVisible(true)
    }, 210)
  }

  const s     = STEPS[step - 1]
  const areaV = answers.areaSize ?? 40
  const areaPct = ((areaV - 10) / (500 - 10)) * 100

  const canNextDropdown =
    !!answers.location &&
    (answers.location !== 'Other' || otherCity.trim().length > 0)
  const canSubmit =
    contactFields.name.trim().length > 0 && contactFields.phone.trim().length > 0

  const fade = {
    opacity:   visible ? 1 : 0,
    transform: visible ? 'translateX(0)' : `translateX(${direction * 22}px)`,
    transition: 'opacity 220ms ease, transform 220ms cubic-bezier(0.16,1,0.3,1)',
  }

  return (
    <>
      <style>{SCOPED_CSS}</style>

      {/* ── Section 1: Quiz ── */}
      <section
        id="contact"
        className="propertyRequestSection relative overflow-hidden py-24 sm:py-28"
        style={{ backgroundColor: pal.sand }}
      >
        {/* Watermark */}
        <div
          className="pointer-events-none absolute right-[-14%] top-1/2 hidden w-[460px] -translate-y-1/2 opacity-[0.05] sm:block sm:w-[560px] lg:w-[680px]"
          style={{
            WebkitMaskImage: 'url(/ironoak-logo-mask.svg)', maskImage: 'url(/ironoak-logo-mask.svg)',
            WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat',
            WebkitMaskSize: 'contain', maskSize: 'contain',
            WebkitMaskPosition: 'center', maskPosition: 'center',
            backgroundColor: pal.graphite, aspectRatio: '1152 / 919',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
          {/* Pre-quiz heading + badges */}
          {!quizStarted && !submitted && (
            <>
              <SectionHeading
                label="Get In Touch"
                title="Start Your Property Request"
                description="Answer a few questions about your property and we'll review your request, understand what you need, and reach out with the next step."
                theme="light"
              />
              <div style={{ display: 'flex', justifyContent: 'center', gap: '48px', marginTop: '28px', flexWrap: 'wrap' }}>
                {[['6', 'Questions'], ['< 30 sec', 'To complete']].map(([val, lab]) => (
                  <div key={lab} style={{ textAlign: 'center' }}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', letterSpacing: '0.04em', color: pal.graphite, lineHeight: '1' }}>{val}</div>
                    <div style={{ fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.22em', color: pal.stone, fontWeight: '600', marginTop: '5px' }}>{lab}</div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Centered quiz column */}
          <div style={{ maxWidth: '680px', margin: '0 auto', marginTop: !quizStarted && !submitted ? '40px' : '0' }}>
            <div style={fade}>

              {/* ── Success ── */}
              {submitted && (
                <div
                  className="propertyRequestSuccess"
                  style={{ background: pal.graphite, borderRadius: '20px', padding: '48px 40px' }}
                >
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1.5px solid rgba(201,162,74,0.38)', background: 'rgba(201,162,74,0.09)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke={pal.gold} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', letterSpacing: '0.04em', lineHeight: '1.1', color: pal.cream, marginBottom: '14px' }}>
                    Green light — your request is in.
                  </h3>
                  <p style={{ fontSize: '0.9rem', lineHeight: '1.75', color: pal.soft, maxWidth: '420px', marginBottom: '36px' }}>
                    We've received your property details. Our team will review your request and reach out shortly with the next step.
                  </p>
                  <button type="button" onClick={resetFlow} style={btnPrimary}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 10px 28px -8px rgba(169,128,47,0.65)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 6px 20px -6px rgba(169,128,47,0.55)' }}
                  >
                    Back to Home
                  </button>
                </div>
              )}

              {/* ── Pre-quiz start card ── */}
              {!quizStarted && !submitted && (
                <div
                  className="propertyRequestCard"
                  style={{ background: 'rgba(29,36,44,0.07)', border: '1.5px solid rgba(29,36,44,0.11)', borderRadius: '16px', padding: '32px', textAlign: 'center' }}
                >
                  <button type="button" onClick={handleStart} style={btnPrimary}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 10px 28px -8px rgba(169,128,47,0.65)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 6px 20px -6px rgba(169,128,47,0.55)' }}
                  >
                    Start Now
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8h10M9 4l4 4-4 4"/>
                    </svg>
                  </button>
                </div>
              )}

              {/* ── Active quiz card ── */}
              {quizStarted && !submitted && (
                <div
                  className="propertyRequestQuiz"
                  style={{ background: pal.card, borderRadius: '20px', padding: '36px 32px', boxShadow: '0 4px 36px rgba(7,17,29,0.1), 0 1px 4px rgba(7,17,29,0.06)' }}
                >
                  <ProgressDots step={step} total={TOTAL} />

                  {/* Intro line */}
                  {s.intro && (
                    <p style={{ fontSize: '0.7rem', fontWeight: '700', letterSpacing: '0.2em', textTransform: 'uppercase', color: pal.gold, marginBottom: '10px' }}>
                      {s.intro}
                    </p>
                  )}

                  {/* Question */}
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.6rem, 4.5vw, 2.1rem)', letterSpacing: '0.03em', lineHeight: '1.08', color: pal.graphite, marginBottom: s.helper ? '8px' : '22px' }}>
                    {s.q}
                  </h3>

                  {/* Helper */}
                  {s.helper && (
                    <p style={{ fontSize: '0.82rem', color: pal.stone, lineHeight: '1.55', marginBottom: '22px' }}>
                      {s.helper}
                    </p>
                  )}

                  {/* ── Step 1: Service cards ── */}
                  {s.type === 'service' && (
                    <>
                      <div className="propertyRequestServiceGrid">
                        {SERVICE_OPTIONS.map((opt) => (
                          <ServiceCard
                            key={opt.value}
                            opt={opt}
                            selected={answers.service === opt.value}
                            onClick={() => selectChoice('service', opt.value)}
                          />
                        ))}
                      </div>
                      <p style={{ fontSize: '0.72rem', color: pal.stone, textAlign: 'center', marginTop: '16px' }}>
                        {s.note}
                      </p>
                    </>
                  )}

                  {/* ── Step 2: Area slider ── */}
                  {s.type === 'slider' && (
                    <>
                      <div style={{ textAlign: 'center', marginBottom: '28px' }}>
                        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '3.4rem', letterSpacing: '0.02em', color: pal.graphite, lineHeight: '1' }}>
                          {areaV}
                          <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: pal.stone, marginLeft: '6px' }}>m²</span>
                        </div>
                        <div style={{ fontSize: '0.8rem', color: pal.stone, marginTop: '6px' }}>
                          {getAreaLabel(areaV)}
                        </div>
                      </div>

                      <div style={{ padding: '4px 0 4px' }}>
                        <input
                          type="range"
                          min="10" max="500" step="5"
                          value={areaV}
                          className="propertyRequestSlider"
                          onChange={(e) => setAnswers((prev) => ({ ...prev, areaSize: Number(e.target.value) }))}
                          style={{ background: `linear-gradient(90deg, ${pal.gold} ${areaPct}%, rgba(29,36,44,0.13) ${areaPct}%)` }}
                          aria-label="Area size in square metres"
                        />
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
                          {['10m²', '100m²', '500m²+'].map((lab) => (
                            <span key={lab} style={{ fontSize: '0.68rem', color: pal.stone, fontWeight: '500' }}>{lab}</span>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {/* ── Steps 3 & 4: Choice cards ── */}
                  {s.type === 'choice' && (
                    <div className="propertyRequestChoiceGrid">
                      {s.options.map((opt) => (
                        <ChoiceCard
                          key={opt}
                          label={opt}
                          selected={answers[s.key] === opt}
                          onClick={() => selectChoice(s.key, opt)}
                        />
                      ))}
                    </div>
                  )}

                  {/* ── Step 5: Location dropdown ── */}
                  {s.type === 'dropdown' && (
                    <div>
                      <div style={{ position: 'relative' }}>
                        <select
                          value={answers.location || ''}
                          onChange={(e) => setAnswers((prev) => ({ ...prev, location: e.target.value }))}
                          className="propertyRequestDropdown"
                          style={{ color: answers.location ? pal.graphite : pal.stone }}
                          aria-label="Select city or area"
                        >
                          <option value="" disabled>Select city or area</option>
                          {GTA_CITIES.map((city) => (
                            <option key={city} value={city}>{city}</option>
                          ))}
                        </select>
                        <div style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: pal.stone }}>
                          <svg viewBox="0 0 12 8" width="12" height="8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M1 1.5L6 6.5L11 1.5"/>
                          </svg>
                        </div>
                      </div>
                      {answers.location === 'Other' && (
                        <input
                          type="text"
                          placeholder="Enter your city or area"
                          value={otherCity}
                          onChange={(e) => setOtherCity(e.target.value)}
                          className="propertyRequestOtherInput"
                          autoFocus
                          aria-label="Other city or area"
                        />
                      )}
                    </div>
                  )}

                  {/* ── Step 6: Contact fields ── */}
                  {s.type === 'contact' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <input type="text" placeholder="Name" required value={contactFields.name}
                        onChange={(e) => setContactFields((prev) => ({ ...prev, name: e.target.value }))}
                        className="propertyRequestInput" autoFocus aria-label="Your name" />
                      <div>
                        <input type="tel" placeholder="Phone number" required value={contactFields.phone}
                          onChange={(e) => setContactFields((prev) => ({ ...prev, phone: e.target.value }))}
                          className="propertyRequestInput" aria-label="Phone number" />
                        {s.helper && (
                          <p style={{ fontSize: '0.72rem', color: pal.stone, marginTop: '7px', lineHeight: '1.5' }}>{s.helper}</p>
                        )}
                      </div>
                      <input type="email" placeholder="Email (optional)" value={contactFields.email}
                        onChange={(e) => setContactFields((prev) => ({ ...prev, email: e.target.value }))}
                        className="propertyRequestInput" aria-label="Email address (optional)" />
                    </div>
                  )}

                  {/* ── Navigation ── */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '28px', minHeight: '44px' }}>
                    {step > 1 ? (
                      <button type="button" onClick={goBack} style={btnBack}
                        onMouseEnter={(e) => (e.currentTarget.style.color = pal.graphite)}
                        onMouseLeave={(e) => (e.currentTarget.style.color = pal.stone)}
                      >
                        <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M13 8H3M7 12L3 8l4-4"/>
                        </svg>
                        Back
                      </button>
                    ) : <div />}

                    {(s.type === 'slider' || s.type === 'dropdown') && (
                      <button
                        type="button"
                        onClick={goNext}
                        disabled={s.type === 'dropdown' ? !canNextDropdown : false}
                        style={{
                          ...btnPrimary,
                          opacity: s.type === 'dropdown' && !canNextDropdown ? 0.42 : 1,
                          cursor:  s.type === 'dropdown' && !canNextDropdown ? 'not-allowed' : 'pointer',
                        }}
                        onMouseEnter={(e) => {
                          const ok = s.type !== 'dropdown' || canNextDropdown
                          if (ok) { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 10px 28px -8px rgba(169,128,47,0.65)' }
                        }}
                        onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 6px 20px -6px rgba(169,128,47,0.55)' }}
                      >
                        Next
                        <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 8h10M9 4l4 4-4 4"/>
                        </svg>
                      </button>
                    )}

                    {s.type === 'contact' && (
                      <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={!canSubmit}
                        style={{ ...btnPrimary, opacity: canSubmit ? 1 : 0.42, cursor: canSubmit ? 'pointer' : 'not-allowed' }}
                        onMouseEnter={(e) => {
                          if (canSubmit) { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 10px 28px -8px rgba(169,128,47,0.65)' }
                        }}
                        onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 6px 20px -6px rgba(169,128,47,0.55)' }}
                      >
                        Submit Request
                      </button>
                    )}
                  </div>

                  {/* Step note under nav (slider only) */}
                  {s.note && s.type === 'slider' && (
                    <p style={{ fontSize: '0.72rem', color: pal.stone, textAlign: 'center', marginTop: '14px' }}>{s.note}</p>
                  )}
                </div>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Contact Details ── */}
      <ContactDetails />
    </>
  )
}

export default Contact
