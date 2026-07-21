import { useEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

const SCROLL_KEY = 'io-scroll'

export default function ScrollToTop() {
  const location = useLocation()
  const navType  = useNavigationType()

  // Save current scroll position before leaving this location
  useEffect(() => {
    return () => {
      sessionStorage.setItem(`${SCROLL_KEY}-${location.key}`, String(window.scrollY))
    }
  }, [location.key])

  // On route change: restore position for back/forward, scroll top for clicks
  useEffect(() => {
    if (navType === 'POP') {
      const saved = sessionStorage.getItem(`${SCROLL_KEY}-${location.key}`)
      if (saved) {
        // Wait one frame so the DOM is laid out (GSAP ScrollTrigger may refresh)
        requestAnimationFrame(() => {
          window.scrollTo(0, parseInt(saved, 10))
        })
      }
      return
    }
    // PUSH or REPLACE — always go to top
    try { window.scrollTo({ top: 0, left: 0, behavior: 'instant' }) }
    catch { window.scrollTo(0, 0) }
  }, [location.key, navType])

  return null
}
