import React from 'react'

const Stacks = () => {
  return (
    <div className="my-16">
      <div className="px-4 my-16 lg:grid grid-cols-3 max-w-[1200px] mx-auto">
        <h2 className="text-white uppercase text-[43px] font-normal font-Bebas_Neue tracking-tighter">
          Tech Stack
        </h2>
        <div className="my-[64px] lg:my-0 col-span-2 flex flex-wrap gap-3">
          <StackButton title={'HTML'} />
          <StackButton title={'CSS'} />
          <StackButton title={'Tailwind CSS'} />
          <StackButton title={'Bootstrap'} />
          <StackButton title={'JavaScript'} />
          <StackButton title={'React'} />
          <StackButton title={'Redux'} />
          <StackButton title={'Next.js'} />
          <StackButton title={'TypeScript'} />
          <StackButton title={'Figma'} />
        </div>
      </div>
    </div>
  )
}

export default Stacks

function StackButton({ title }) {
  return (
    <button className="px-10 py-3 rounded-full text-center font-Manrope font-[700] text-[#c7c7c7] border-[1px] border-[#484848]">
      {title}
    </button>
  )
}
