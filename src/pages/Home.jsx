import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import LogoReveal from '../components/LogoReveal/LogoReveal.jsx'
import Hero from '../components/Hero/Hero.jsx'
import TrustStrip from '../components/TrustStrip/TrustStrip.jsx'
import Statement from '../components/Statement/Statement.jsx'
import PropertySolutions from '../components/PropertySolutions/PropertySolutions.jsx'
import PropertyTypes from '../components/PropertyTypes/PropertyTypes.jsx'
import WhyIronOak from '../components/WhyIronOak/WhyIronOak.jsx'
import HowItWorks from '../components/HowItWorks/HowItWorks.jsx'
import BuildingStatement from '../components/BuildingStatement/BuildingStatement.jsx'
import Contact from '../components/Contact/Contact.jsx'
import Reviews from '../components/Reviews/Reviews.jsx'
import AreasWeServe from '../components/AreasWeServe/AreasWeServe.jsx'
import ServicesExplorer from '../components/ServicesExplorer/ServicesExplorer.jsx'
import ContactFAQSection from '../components/ContactFAQ/ContactFAQSection.jsx'
import BlogPreview from '../components/BlogPreview/BlogPreview.jsx'
import Footer from '../components/Footer/Footer.jsx'
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton/FloatingWhatsAppButton.jsx'

const INTRO_KEY = 'io-intro-done'

const Home = () => {
  // Persist across remounts (navigating to a service page and back)
  const [introDone, setIntroDone] = useState(
    () => sessionStorage.getItem(INTRO_KEY) === '1'
  )
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const target = document.querySelector(location.hash)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [location.hash])

  return (
    <>
      <LogoReveal onComplete={() => {
        sessionStorage.setItem(INTRO_KEY, '1')
        setIntroDone(true)
      }} />
      <main>
        <Hero ready={introDone} />
        <TrustStrip />
        <Statement />
        <ServicesExplorer />
        <PropertyTypes />
        <PropertySolutions />
        <WhyIronOak />
        <HowItWorks />
        <BuildingStatement />
        <Contact />
        <Reviews />
        <AreasWeServe />
        <ContactFAQSection />
        <BlogPreview />
      </main>
      <Footer />
      {introDone && <FloatingWhatsAppButton />}
    </>
  )
}

export default Home
