import Image from 'next/image'
import React from 'react'

function AboutCard({icon, count, name}) {
  return (
    <div className='flex items-center gap-5'>
      <div className='border p-4 rounded-full border-gray-200'>
        <Image src={icon} width={50} height={50} alt='about image 1'/>
      </div>
      <div>
        <p className='text-[#07a698] text-5xl font-semibold'>{count}</p>
        <p className='text-gray-500 text-sm'>{name}</p>
      </div>
    </div>
  )
}

export default AboutCard
