import Download from './../../assets/svg/download.svg'
import Linkedin from './../../assets/svg/Linkedin.png'
import Github from './../../assets/svg/github.svg'
import Passport from './../../assets/images/passportNBg.png'
import Stacks from './Stacks'
import Contact from '../contact/ContactFrontPage'
import Header from '../HomePage/Header'

const AboutPage = () => {
  return (
    <>
      <Header />
      <div className="px-4">
        <AboutMe />
        <hr />
        <MyPic Passport={Passport} />
        <hr />
        <MyStacks />
        <hr />
        <Contact />
      </div>
    </>
  )
}

export default AboutPage

export const AboutMe = () => {
  return (
    <div className="grid lg:grid-cols-3 max-w-[1200px] mx-auto my-10">
      <h2 className=" uppercase font-Bebas_Neue text-5xl text-white">
        About me
      </h2>
      <div className="col-span-2 mt-4 lg:mt-0 lg:mt0">
        <h4 className="text-white text-2xl font-Manrope font-medium leading-[34px]">
          I am a front-end developer based in Nigeria. Has Materials and
          Metallurgical Engineering background.
        </h4>
        <p className="text-[#C7C7C7] mt-2 text-base font-Manrope font-normal leading-7z">
          I am a front-end developer based in Nigeria looking for exciting
          opportunities. Has Materials and metallurgical Engineering background.
          Likes to focus on accessibility when developing. Passionate and
          curious about solving problems. Currently, I’m exploring Reactjs,
          Webflow and a bit of Designing. While I am not programming, I enjoy
          playing video games, photography and playing musical instrument.
          Learning more to improve skill.
        </p>
        <div className="flex items-center gap-3 mt-10">
          <button className="w-[212px] h-[48px] bg-[#D3E97A] flex justify-between px-2 rounded-full gap-[12] items-center ">
            <span>DOWNLOAD RESUME</span>{' '}
            <img
              src={Download}
              alt="resume"
              className="bg-black p-2 rounded-full"
            />
          </button>
          <img
            src={Github}
            alt="github"
            className="bg-[#222222] p-2 rounded-full"
          />
          <img
            src={Linkedin}
            alt="linkedin"
            className="bg-[#222222] p-2 rounded-full"
          />
        </div>
      </div>
    </div>
  )
}

export const MyPic = ({ Passport }) => {
  return (
    <div className="px-4 my-16 max-w-[1200px] mx-auto bg-[#C7C7C7] rounded-xl">
      <img
        src={Passport}
        alt=""
        className="rounded-xl lg:h-[100vh] mx-auto bg-[#C7C7C7]"
      />
    </div>
  )
}
export const MyStacks = () => {
  return (
    <div>
      <Stacks />
    </div>
  )
}
