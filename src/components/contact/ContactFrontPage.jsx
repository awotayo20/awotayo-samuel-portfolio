import Github from '../../assets/svg/github.svg'
import Linkedin from '../../assets/svg/linkedin.svg'
import pdf from '../../assets/CV/AwotayoSamuelCV.pdf'
import { Form } from './Form'

const Contact = () => {
  return (
    <>
      <div className="px-4 my-16 lg:grid grid-cols-3 max-w-[1200px] mx-auto">
        <div>
          <div>
            <h2 className="text-white uppercase text-[43px] font-normal font-Bebas_Neue tracking-tighter">
              Let’s connect
            </h2>
            <p className="text-[#C7C7C7] font-Manrope text-base font-normal ">
              Say hello at{' '}
              <span className="text-white border-b border-[#D3E97A]">
                sammy4gsus@gmail.com
              </span>
            </p>
            <p className="text-[#C7C7C7] font-Manrope text-base font-normal mt-2">
              For more info, here’s my{' '}
              <span className=" font-bold text-white border-b border-[#D3E97A]">
                <a href={pdf} download={'Awotayo Samuel CV'}>
                  resume
                </a>
              </span>
            </p>
          </div>
          <div className="flex items-center gap-7 py-4 max-w-[230px] lg:mt-6">
            <a href="https://github.com/awotayo20" target="_blank">
              <img src={Github} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/awotayo-samuel/"
              target="_blank"
            >
              <img src={Linkedin} alt="" />
            </a>
          </div>
        </div>
        <div className=" col-span-2">
          <Form />
        </div>
      </div>
    </>
  )
}

export default Contact
