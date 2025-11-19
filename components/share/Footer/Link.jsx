import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function Link({name}) {
  return (
    <div className='hover:text-[#07a698] cursor-pointer duration-500 w-fit text-white flex items-center gap-4'>
      <FaArrowRight />
      {name}
    </div>
  )
}

export default Link
