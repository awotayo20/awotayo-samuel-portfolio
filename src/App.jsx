import AboutFrontPage from '../src/components/about/AboutFrontPage'
import { AboutMe } from './components/about/AboutPage'
import Contact from './components/contact/ContactFrontPage'
import Header from './components/landingPage/Header'
import Projects from './components/work/ProjectsFrontPage'
function App() {
  return (
    <>
      <div>
        <Header />
        <main>
          <AboutFrontPage />
          <hr />
          <Projects />
          <hr />
          <Contact />
        </main>
      </div>
    </>
  )
}

export default App
