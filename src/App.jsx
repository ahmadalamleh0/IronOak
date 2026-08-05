import { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx'

// Route-specific pages are code-split out of the homepage's startup bundle —
// none of this (RichServiceTemplate, article/insights rendering) is needed
// until the visitor actually navigates there.
const ServicePage  = lazy(() => import('./pages/ServicePage.jsx'))
const InsightsPage = lazy(() => import('./pages/InsightsPage.jsx'))
const ArticlePage  = lazy(() => import('./pages/ArticlePage.jsx'))

function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={null}>
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
      </Suspense>
    </>
  )
}

export default App
