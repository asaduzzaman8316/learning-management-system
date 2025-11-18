import React from 'react'
import SectionLeft from './SectionLeft'
import SectionRight from './SectionRight'

function SectionSecond() {
  return (
    <div className='w-full grid grid-cols-2 items-center lg:w-[70%] px-4 mx-auto py-16'>
      <SectionLeft/>
      <SectionRight/>
    </div>
  )
}

export default SectionSecond
