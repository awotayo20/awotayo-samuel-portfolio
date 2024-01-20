import { useState } from 'react'

const Header = () => {
  const [toggle, setToggle] = useState(false)
  console.log(toggle)
  return (
    <>
      <div className="flex relative z-10 w-full h-[76px] lg:h-[96px] items-center justify-between px-4 lg:px-16">
        <h2 className="font-Bebas_Neue text-[#C7C7C7] text-[28px] lg:text-[32px]">
          <a href="/">A S.</a>
        </h2>
        <div className=" hidden lg:block nav-items">
          <ul className="flex gap-8">
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a href={`/work`}>Work</a>
            </li>

            <li>
              <a href="/about">About</a>
            </li>

            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div
          className="flex flex-col h-5 w-8 justify-between cursor-pointer lg:hidden"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? (
            <>
              <span className="w-full h-0.5 bg-[#D3E97A] rotate-[35deg] origin-left duration-300"></span>
              <span className="w-full h-0.5 bg-[#D3E97A] -rotate-[35deg] origin-left duration-300"></span>
            </>
          ) : (
            <>
              <span className="w-full h-0.5 bg-[#D3E97A] duration-300"></span>
              <span className="w-full h-0.5 bg-[#D3E97A] duration-300"></span>
            </>
          )}
          {/*  */}
        </div>
      </div>
      {toggle && (
        <div className="fixed top-0 right-0 left-0 bottom-0 bg-black w-full h-full">
          <div className="flex items-center justify-center h-full text-center">
            <ul className=" leading-[80px] text-white">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/work">Work</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
