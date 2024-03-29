import Arrow from '../../assets/svg/arrow.svg'
import GitHub from '../../assets/svg/github.svg'
import LoopstudioImage from '../../assets/images/projectImages/LoopstudioProject.png'
import SamfoodImage from '../../assets/images/projectImages/samFoodPic.jpeg'
const Projects = () => {
  return (
    <div className="mx-4 max-w-[1200px] lg:mx-auto">
      <div className="mt-9 mx-auto">
        <div>
          <h2 className="text-white font-Bebas_Neue text-3xl lg:text-[56px] font-normal uppercase ">
            Featured Projects
          </h2>
          <p className="mt-[12px] font-Manrope text-base text-white leading-[160%]">
            Here are some of the selected projects that showcase my passion for
            front-end development.
          </p>
        </div>
        <ProjectSample
          title={'SamFood'}
          picture={SamfoodImage}
          subtitle={
            'This is a food store website that I created using ReactJS and Redux Toolkit. It is a responsive and user-friendly e-commerce platform that allows customers to browse. The website features: A modern and attractive UI design with animations and carousels, A product catalog with categories, filters, and search functionality.'
          }
          Role={'Front-end Developer'}
          year={'2023'}
          githubLink={'https://github.com/awotayo20/samFood'}
          liveLink={'https://samfood.vercel.app/'}
        />
        <ProjectSample
          title={'Loopstudios landing page'}
          picture={LoopstudioImage}
          subtitle={
            "This challenge focuses mostly on HTML & CSS. There's a tiny bit of JS included for the mobile navigation toggle. This challenge was set to perfect CSS Grid and also to practice my layout skills!"
          }
          Role={'Front-end Developer'}
          year={'2023'}
          githubLink={'https://github.com/awotayo20/Loopstudios-landing-page'}
          liveLink={'https://guileless-dango-a2353c.netlify.app/'}
        />
        <div>
          <p className="text-white text-center my-9">
            Click{' '}
            <a
              href="/work"
              className="text-[#D3E97A] hover:underline underline-offset-8 duration-300"
            >
              here
            </a>{' '}
            to view more
          </p>
        </div>
      </div>
    </div>
  )
}

export default Projects

export const ProjectSample = ({
  title,
  picture,
  subtitle,
  Role,
  year,
  liveLink,
  githubLink,
}) => {
  return (
    <div className="text-white my-20 lg:grid grid-cols-2 gap-12">
      <div className="max-w-[576px] max-h-[428px] overflow-hidden rounded-xl">
        <img
          src={picture}
          alt={title}
          className="rounded-lg mx-auto object-fill"
        />
      </div>
      <div>
        <h3 className=" font-Manrope text-2xl font-medium mt-4">{title}</h3>
        <p className=" text-base font-Manrope font-normal mt-4 leading-[26px]">
          {subtitle}
        </p>
        <div className="mt-8">
          <h4 className="text-[16px] font-semibold font-Manrope uppercase mb-4">
            Project Info
          </h4>
          <hr />
          <div className="flex justify-between items-center py-4">
            <h5>Role</h5>
            <p>{Role}</p>
          </div>
          <hr />
          <div className="flex justify-between items-center py-4">
            <h5>Year</h5>
            <p>{year}</p>
          </div>
          <hr />
          <div className="flex justify-between items-center py-4 text-[#D3E97A]">
            <a href={liveLink} target="_blank">
              <button className="flex gap-2 items-center uppercase hover:border-b-2 border-[#D3E97A] pb-1 duration-200">
                Live Demo <img src={Arrow} alt="" />
              </button>
            </a>
            <a href={githubLink} target="_blank">
              <button className="flex gap-2 items-center uppercase hover:border-b-2 border-[#D3E97A] pb-1 duration-200">
                See on Github <img src={GitHub} alt="" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
