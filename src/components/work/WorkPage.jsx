import { ProjectSample } from './ProjectsFrontPage'
import projectStore from './../../ProjectStore'
import Header from '../landingPage/Header'

const WorkPage = () => {
  return (
    <>
      <Header />
      <div className="mx-4 max-w-[1200px] lg:mx-auto">
        <div className="mt-9 mx-auto">
          <div>
            <h2 className="text-white font-Bebas_Neue text-3xl lg:text-[56px] font-normal uppercase ">
              Featured Projects
            </h2>
            <p className="mt-[12px] font-Manrope text-base text-white leading-[160%]">
              Here are some of the selected projects that showcase my passion
              for front-end development.
            </p>
          </div>
        </div>
        <div>
          {projectStore.map((project) => {
            return <ProjectSample {...project} />
          })}
        </div>
      </div>
    </>
  )
}

export default WorkPage
