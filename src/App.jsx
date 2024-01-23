import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import WorkPage from './components/work/WorkPage'
import AboutPage from './components/about/AboutPage'
import ContactPage from './components/contact/ContactPage'
import SuccessMessage from './components/contact/SuccessMessage'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  )
}

export default App
