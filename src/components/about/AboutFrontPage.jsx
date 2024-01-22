import Arrow from '../../assets/svg/arrow.svg'
import Github from '../../assets/svg/github.png'
import Linkedin from '../../assets/svg/Linkedin.png'
import Passport from '../../assets/images/passport.jpg'
import pdf from '../../assets/CV/AwotayoSamuelCV.pdf'
const AboutFrontPage = () => {
  return (
    <>
      <div className="lg:grid grid-cols-3 items-center mx-auto gap-10 lg:max-w-[1200px]">
        <div className="mx-auto px-4 mt-[45px] lg:mt-0 flex flex-col gap-8 col-span-2">
          <div className="w-full">
            <h1 className="text-[#fff] text-[36px] lg:text-[74px] font-Bebas_Neue font-[500] leading-[45px] lg:leading-[90%] uppercase">
              hi, i am <span className="text-[#D3E97A]">frontend</span>{' '}
              developer .
            </h1>
            <p className="text-[#C7C7C7] text-[16px] lg:text-[18px] leading-[26px] lg:leading-[150%] font-Manrope font-[400] mt-2">
              My name is Awotayo Samuel, A Nigerian based front-end developer
              passionate about building accessible and user friendly websites...{' '}
              click{' '}
              <a href="/about">
                <span className="py-4 text-[#D3E97A] hover:border-b-2 border-[#D3E97A] pb-1 cursor-pointer duration-300">
                  here
                </span>
              </a>{' '}
              to know more about me
            </p>
          </div>
          <div className="flex h-[48px] items-center gap-4">
            <a href="/contact">
              <div className="flex h-full pl-4 py-1 pr-1.5 bg-[#D3E97A] items-center gap-4 rounded-full">
                <p className="bg-[#D3E97A] font-Manrope font-[700] text-[14px]">
                  Contact Me
                </p>
                <div className="h-[40px] w-[40px] flex items-center justify-center rounded-full bg-black">
                  <img src={Arrow} alt="" />
                </div>
              </div>
            </a>
            <button className="text-[#D3E97A] hidden lg:block hover:border-b border-0 border-[#D3E97A] duration-300">
              <a href={pdf} download={'Awotayo Samuel CV'}>
                VIEW RESUME
              </a>
            </button>

            <div className="h-[40px] w-[40px] flex items-center justify-center rounded-full bg-[#222222]">
              <a href="https://github.com/awotayo20" target="_blank">
                <img src={Github} alt="" />
              </a>
            </div>
            <div className="h-[40px] w-[40px] flex items-center justify-center rounded-full bg-[#222222]">
              <a
                href="https://www.linkedin.com/in/awotayo-samuel/"
                target="_blank"
              >
                <img src={Linkedin} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="px-4 mt-10 lg:mt-0 mb-16 mx-auto">
          <img src={Passport} alt="" className=" rounded-2xl" />
        </div>
      </div>
    </>
  )
}

export default AboutFrontPage
