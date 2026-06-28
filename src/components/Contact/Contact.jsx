import { useState } from 'react'
import { IconMail, IconPhone, IconClock } from '../icons/index.jsx'

const palette = {
  navy: '#07111D',
  graphite: '#1D242C',
  stoneGray: '#6F7478',
  softGray: '#A8A59E',
  gold: '#C9A24A',
  warmGold: '#D8B866',
  offWhite: '#F4F1EA',
  sectionBg: '#DED4C2',
}

const headingGradient = {
  backgroundImage: `linear-gradient(180deg, ${palette.graphite} 0%, ${palette.navy} 50%, ${palette.graphite} 100%)`,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  color: palette.graphite,
}

const watermarkStyle = {
  WebkitMaskImage: 'url(/ironoak-logo-mask.svg)',
  maskImage: 'url(/ironoak-logo-mask.svg)',
  WebkitMaskRepeat: 'no-repeat',
  maskRepeat: 'no-repeat',
  WebkitMaskSize: 'contain',
  maskSize: 'contain',
  WebkitMaskPosition: 'center',
  maskPosition: 'center',
  backgroundColor: palette.graphite,
  aspectRatio: '1152 / 919',
}

const inputClasses =
  'w-full rounded-sm border border-[#6F7478]/35 bg-[#F4F1EA] px-4 py-3 text-sm text-[#1D242C] placeholder:text-[#6F7478] outline-none transition-colors duration-200 focus:border-[#C9A24A]'

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 sm:py-28"
      style={{ backgroundColor: palette.sectionBg }}
    >
      {/* subtle branded watermark, partially cropped off the right edge */}
      <div
        className="pointer-events-none absolute right-[-14%] top-1/2 hidden w-[460px] -translate-y-1/2 opacity-[0.08] sm:block sm:w-[560px] lg:w-[680px]"
        style={watermarkStyle}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 -top-10 w-[320px] opacity-[0.07] sm:hidden"
        style={watermarkStyle}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="font-script text-6xl leading-none sm:text-7xl"
            style={{ color: palette.gold }}
          >
            Get in touch
          </h2>
          <h3 className="mt-5 font-serif text-2xl font-bold leading-tight sm:text-3xl" style={headingGradient}>
            Let&rsquo;s talk about your property
          </h3>
          <p className="mt-5 text-base leading-relaxed sm:text-lg" style={{ color: palette.stoneGray }}>
            Need one job handled or ongoing property support? Tell us what you
            need and our team will get back to you.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
          {submitted ? (
            <div
              className="flex flex-col items-start justify-center rounded-md p-10"
              style={{ backgroundColor: palette.graphite }}
            >
              <h3 className="font-serif text-xl font-bold" style={{ color: palette.offWhite }}>
                Request received
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed" style={{ color: palette.softGray }}>
                Thank you for reaching out. Our team will review your request
                and get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Full name"
                required
                className={`${inputClasses} sm:col-span-1`}
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                required
                className={`${inputClasses} sm:col-span-1`}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                className={`${inputClasses} sm:col-span-1`}
              />
              <select name="propertyType" defaultValue="" className={`${inputClasses} sm:col-span-1`}>
                <option value="" disabled>
                  Property type
                </option>
                <option value="homeowner">Homeowner</option>
                <option value="property-manager">Property Manager</option>
                <option value="investor">Real Estate Investor</option>
                <option value="commercial">Commercial Property</option>
                <option value="residential-building">Residential Building</option>
              </select>
              <textarea
                name="message"
                placeholder="Tell us what you need"
                rows={5}
                required
                className={`${inputClasses} sm:col-span-2 resize-none`}
              />

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-sm border border-gold-400/70 bg-gradient-to-b from-gold-200 to-gold-500 px-8 py-3.5 text-sm font-semibold tracking-wide text-ink-950 shadow-[0_8px_24px_-8px_rgba(169,128,47,0.6)] transition-transform duration-300 hover:scale-[1.02] sm:col-span-2 sm:w-fit"
              >
                Send Request
              </button>
            </form>
          )}

          <div
            className="flex flex-col gap-6 rounded-md p-8"
            style={{ backgroundColor: palette.graphite }}
          >
            <div className="flex items-start gap-4">
              <IconMail className="mt-0.5 h-5 w-5 shrink-0" style={{ color: palette.gold }} />
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: palette.warmGold }}>
                  Email
                </h4>
                <a
                  href="mailto:naveed.robert@gmail.com"
                  className="mt-1.5 inline-block text-sm transition-colors duration-200"
                  style={{ color: palette.softGray }}
                >
                  naveed.robert@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <IconPhone className="mt-0.5 h-5 w-5 shrink-0" style={{ color: palette.gold }} />
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: palette.warmGold }}>
                  Phone
                </h4>
                <a
                  href="tel:+14165709074"
                  className="mt-1.5 inline-block text-sm transition-colors duration-200"
                  style={{ color: palette.softGray }}
                >
                  416-570-9074
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <IconClock className="mt-0.5 h-5 w-5 shrink-0" style={{ color: palette.gold }} />
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: palette.warmGold }}>
                  Hours
                </h4>
                <p className="mt-1.5 text-sm" style={{ color: palette.softGray }}>
                  Mon&ndash;Fri, 8am&ndash;6pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
