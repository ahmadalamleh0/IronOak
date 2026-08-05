import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ServicePage from './pages/ServicePage.jsx'
import InsightsPage from './pages/InsightsPage.jsx'
import ArticlePage from './pages/ArticlePage.jsx'
import NotFound from './pages/NotFound.jsx'
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/"                element={<Home />} />
      <Route path="/services/:slug"  element={<ServicePage />} />
      {/* Old slugs — redirect to the renamed/combined canonical route, no duplicate indexable page */}
      <Route path="/services/construction-project-management" element={<Navigate to="/services/capital-project-management" replace />} />
      <Route path="/services/specialty-custom-projects" element={<Navigate to="/services/capital-project-management" replace />} />
      <Route path="/insights"        element={<InsightsPage />} />
      <Route path="/insights/:slug"  element={<ArticlePage />} />
      <Route path="*"                element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App
