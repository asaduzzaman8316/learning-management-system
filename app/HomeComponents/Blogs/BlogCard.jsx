import Image from 'next/image'
import React from 'react'
import { FaRegClock } from 'react-icons/fa'
import { IoFolderOutline } from 'react-icons/io5'

function BlogCard({image, name}) {
  return (
    <div data-aos='zoom-in-up' data-aos-duration='1500' className='relative lg:mx-0 mx-8'>
      <Image src={image} width={600} height={600} alt='post image' className=' rounded-xl  '/>
      <div className='absolute h-full opacity-90 w-full  top-0 left-0 bg-linear-to-t from-gray-900  from-10% '></div>
      <div className='space-y-6 absolute  bottom-10 px-12'>
        <p className='bg-white w-fit text-[#07a698]  uppercase px-6 py-1 rounded-full'>learning</p>
        <h1 className='text-2xl text-white font-semibold cursor-pointer hover:underline w-fit'>{name}</h1>
        <div className='flex items-center justify-between gap-10 w-fit'>
            <p className='flex items-center gap-2 text-gray-200 '><FaRegClock /> November 20, 2025</p>
            <p className='flex items-center gap-2 text-gray-200 '> <IoFolderOutline /> Marketing</p>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
