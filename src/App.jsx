import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ServicePage from './pages/ServicePage.jsx'
import NotFound from './pages/NotFound.jsx'
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/"                element={<Home />} />
      <Route path="/services/:slug"  element={<ServicePage />} />
      <Route path="*"                element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App
