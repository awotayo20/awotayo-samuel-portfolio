import React from 'react'

const SuccessMessage = () => {
  return (
    <div className="fixed bg-black/50 top-0 bottom-0 right-0 left-0">
      <div className="absolute top-10 right-[50%] translate-x-1/2 bg-white w-[90%] max-w-[450px] p-5 rounded-3xl">
        <h2 className=" font-extrabold text-2xl">Thank you!</h2>
        <p className="py-5">The form was submitted Successfully</p>
        <button className=" text-lg text-orange-500 hover:text-orange-700 font-semibold">
          <a href="/">Go back</a>
        </button>
      </div>
    </div>
  )
}

export default SuccessMessage
