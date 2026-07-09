import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import LogoReveal from '../components/LogoReveal/LogoReveal.jsx'
import Hero from '../components/Hero/Hero.jsx'
import TrustStrip from '../components/TrustStrip/TrustStrip.jsx'
import Statement from '../components/Statement/Statement.jsx'
import PropertySolutions from '../components/PropertySolutions/PropertySolutions.jsx'
import PropertyTypes from '../components/PropertyTypes/PropertyTypes.jsx'
import Reviews from '../components/Reviews/Reviews.jsx'
import WhyIronOak from '../components/WhyIronOak/WhyIronOak.jsx'
import BuildingStatement from '../components/BuildingStatement/BuildingStatement.jsx'
import AreasWeServe from '../components/AreasWeServe/AreasWeServe.jsx'
import WaysToConnect from '../components/WaysToConnect/WaysToConnect.jsx'
import Contact from '../components/Contact/Contact.jsx'
import LocationMap from '../components/LocationMap/LocationMap.jsx'
import Footer from '../components/Footer/Footer.jsx'
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton/FloatingWhatsAppButton.jsx'

const Home = () => {
  const [introDone, setIntroDone] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const target = document.querySelector(location.hash)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [location.hash])

  return (
    <>
      <LogoReveal onComplete={() => setIntroDone(true)} />
      <main>
        <Hero ready={introDone} />
        <TrustStrip />
        <Statement />
        <PropertySolutions />
        <PropertyTypes />
        <WhyIronOak />
        <BuildingStatement />
        <Contact />
        <Reviews />
        <AreasWeServe />
        <WaysToConnect />
        <LocationMap />
      </main>
      <Footer />
      {introDone && <FloatingWhatsAppButton />}
    </>
  )
}

export default Home
