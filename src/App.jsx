import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ServiceComingSoon from './pages/ServiceComingSoon.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services/:slug" element={<ServiceComingSoon />} />
    </Routes>
  )
}

export default App
