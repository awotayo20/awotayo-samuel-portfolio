import Contact from '../contact/ContactFrontPage'
import Projects from '../work/ProjectsFrontPage'
import AboutFrontPage from './../about/AboutFrontPage'
import Header from './Header'
const HomePage = () => {
  return (
    <>
      <div>
        <Header />
        <AboutFrontPage />
        <hr />
        <Projects />
        <hr />
        <Contact />
      </div>
    </>
  )
}

export default HomePage
