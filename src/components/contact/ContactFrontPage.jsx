import Github from '../../assets/svg/github.svg'
import Linkedin from '../../assets/svg/linkedin.svg'
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
              <span className="text-white border-b border-[#D3E97A]">
                resume
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

export const Form = () => {
  return (
    <div className="my-[64px] lg:my-0">
      <form action="">
        <div className="form">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="" />
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
            <input type="text" name="subject" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea name="" rows="5"></textarea>
          </div>
          <button
            type="submit"
            className="px-10 py-3 bg-[#D3E97A] font-Manrope font-bold rounded-full max-w-[140px]"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
