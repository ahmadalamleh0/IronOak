import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import LogoReveal from '../components/LogoReveal/LogoReveal.jsx'
import Hero from '../components/Hero/Hero.jsx'
import TrustStrip from '../components/TrustStrip/TrustStrip.jsx'
import Services from '../components/Services/Services.jsx'
import WhyIronOak from '../components/WhyIronOak/WhyIronOak.jsx'
import PropertyTypes from '../components/PropertyTypes/PropertyTypes.jsx'
import CTASection from '../components/CTASection/CTASection.jsx'
import Contact from '../components/Contact/Contact.jsx'
import AreasWeServe from '../components/AreasWeServe/AreasWeServe.jsx'
import LocationMap from '../components/LocationMap/LocationMap.jsx'
import Footer from '../components/Footer/Footer.jsx'

const Home = () => {
  const [introDone, setIntroDone] = useState(false)
  const location = useLocation()

  // when arriving from another page with a #hash (e.g. /services/x -> /#contact),
  // scroll to that section once the homepage has mounted
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
        <Services />
        <WhyIronOak />
        <PropertyTypes />
        <AreasWeServe />
        <CTASection />
        <Contact />
        <LocationMap />
      </main>
      <Footer />
    </>
  )
}

export default Home
