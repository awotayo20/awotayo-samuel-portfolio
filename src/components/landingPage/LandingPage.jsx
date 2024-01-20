import Header from './Header'
import Projects from '../work/ProjectsFrontPage'
import Contact from '../contact/ContactFrontPage'
import AboutFrontPage from '../about/AboutFrontPage'
import Stacks from '../about/Stacks'

const LandingPage = () => {
  return (
    <div>
      <Header />
      <main>
        <AboutFrontPage />
        <hr />
        <Projects />
        <hr />
        <Stacks />
        <hr />
        <Contact />
      </main>
    </div>
  )
}

export default LandingPage
