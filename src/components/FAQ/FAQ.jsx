import { useEffect, useRef, useState } from 'react'

const RM   = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
const EASE = 'cubic-bezier(0.16,1,0.3,1)'

const FAQS = [
  {
    q: 'What types of projects does IronOak handle?',
    a: 'IronOak supports a wide range of property needs, including repairs, maintenance, installations, exterior work, renovations, and custom improvements. Share the full scope of your project and our team will confirm the best approach.',
  },
  {
    q: 'Do you work with both residential and commercial properties?',
    a: 'Yes. We work with homeowners, landlords, property managers, commercial spaces, condos, apartments, and multi-unit properties.',
  },
  {
    q: 'Which areas do you serve?',
    a: 'We serve Toronto and surrounding communities throughout the Greater Toronto Area. Availability may vary depending on the project type and scope.',
  },
  {
    q: 'Can IronOak coordinate projects involving multiple trades?',
    a: "Yes. One of IronOak's main advantages is the ability to coordinate several property services through one dependable team and one clear point of contact.",
  },
  {
    q: 'How quickly can the work begin?',
    a: 'Scheduling depends on the scope, location, materials, and current availability. If the project is urgent or time-sensitive, include that information in your request.',
  },
]

const CSS = `
  .io-faq-item {
    border-bottom: 1px solid rgba(7,17,29,0.09);
  }
  .io-faq-item:first-child {
    border-top: 1px solid rgba(7,17,29,0.09);
  }

  .io-faq-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    width: 100%;
    padding: 22px 0;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
    -webkit-tap-highlight-color: transparent;
  }
  .io-faq-btn:focus-visible {
    outline: 2px solid rgba(201,162,74,0.70);
    outline-offset: 3px;
    border-radius: 4px;
  }

  .io-faq-icon {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1.5px solid rgba(7,17,29,0.16);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: border-color 200ms ease, background 200ms ease;
  }
  .io-faq-btn[aria-expanded="true"] .io-faq-icon {
    border-color: rgba(201,162,74,0.55);
    background: rgba(201,162,74,0.08);
  }

  /* CSS grid trick for smooth height animation — no JS height measurement */
  .io-faq-body-wrap {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 280ms cubic-bezier(0.16,1,0.3,1);
  }
  .io-faq-body-wrap.io-faq-open {
    grid-template-rows: 1fr;
  }
  .io-faq-body-inner {
    overflow: hidden;
    min-height: 0;
  }
  .io-faq-body-content {
    padding-bottom: 22px;
  }
`

const useInView = (threshold = 0.1) => {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return [ref, inView]
}

const PlusMinusIcon = ({ open }) => (
  <svg
    width="10" height="10" viewBox="0 0 10 10"
    fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
    aria-hidden="true"
    style={{ color: open ? '#C9A24A' : '#07111D' }}
  >
    {/* Horizontal bar — always visible */}
    <line x1="1" y1="5" x2="9" y2="5" />
    {/* Vertical bar — visible when closed, fades when open */}
    <line
      x1="5" y1="1" x2="5" y2="9"
      style={{
        opacity: open ? 0 : 1,
        transition: RM ? 'none' : 'opacity 180ms ease',
      }}
    />
  </svg>
)

const FAQ = () => {
  const [openIdx, setOpenIdx]  = useState(null)
  const [headRef, headInView]  = useInView()
  const [listRef, listInView]  = useInView(0.06)

  const toggle = (i) => setOpenIdx(prev => (prev === i ? null : i))

  return (
    <section style={{ background: '#F4F1EA', padding: 'clamp(80px, 10vw, 120px) 24px' }}>
      <style>{CSS}</style>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>

        {/* ── Header ── */}
        <div
          ref={headRef}
          style={{
            marginBottom: '52px',
            opacity:    RM || headInView ? 1 : 0,
            transform:  RM || headInView ? 'translateY(0)' : 'translateY(16px)',
            transition: RM ? 'none' : `opacity 650ms ${EASE}, transform 650ms ${EASE}`,
          }}
        >
          <p style={{
            fontFamily: '"Manrope", system-ui, sans-serif',
            fontSize: '0.62rem', fontWeight: 700,
            letterSpacing: '0.30em', textTransform: 'uppercase',
            color: '#C9A24A', margin: '0 0 14px',
          }}>
            Questions, Answered
          </p>

          <h2 style={{
            fontFamily: '"Inter Tight", Inter, Arial, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(1.85rem, 4vw, 2.8rem)',
            letterSpacing: '-0.035em', lineHeight: 1.07,
            color: '#07111D', margin: '0 0 16px',
          }}>
            Frequently asked questions.
          </h2>

          <p style={{
            fontFamily: '"Manrope", system-ui, sans-serif',
            fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
            lineHeight: 1.74, color: '#6F7478',
            margin: 0, maxWidth: '520px',
          }}>
            Everything you need to know before starting your next property project with IronOak.
          </p>
        </div>

        {/* ── Accordion ── */}
        <div
          ref={listRef}
          style={{
            opacity:    RM || listInView ? 1 : 0,
            transform:  RM || listInView ? 'translateY(0)' : 'translateY(14px)',
            transition: RM ? 'none' : `opacity 620ms ${EASE} 80ms, transform 620ms ${EASE} 80ms`,
          }}
        >
          {FAQS.map(({ q, a }, i) => (
            <div key={i} className="io-faq-item">

              <button
                className="io-faq-btn"
                onClick={() => toggle(i)}
                aria-expanded={openIdx === i}
                aria-controls={`faq-a-${i}`}
                id={`faq-q-${i}`}
              >
                <span style={{
                  fontFamily: '"Inter Tight", Inter, Arial, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(0.92rem, 1.6vw, 1.02rem)',
                  letterSpacing: '-0.01em',
                  lineHeight: 1.35,
                  color: '#07111D',
                }}>
                  {q}
                </span>
                <span className="io-faq-icon">
                  <PlusMinusIcon open={openIdx === i} />
                </span>
              </button>

              <div
                id={`faq-a-${i}`}
                role="region"
                aria-labelledby={`faq-q-${i}`}
                className={`io-faq-body-wrap${openIdx === i ? ' io-faq-open' : ''}`}
              >
                <div className="io-faq-body-inner">
                  <div className="io-faq-body-content">
                    <p style={{
                      fontFamily: '"Manrope", system-ui, sans-serif',
                      fontSize: '0.925rem',
                      lineHeight: 1.74,
                      color: '#6F7478',
                      margin: 0,
                    }}>
                      {a}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default FAQ
