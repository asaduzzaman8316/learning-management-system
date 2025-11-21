import Heading from '@/components/share/Heading'
import Heading2 from '@/components/share/Heading2'
import React from 'react'
import CategoryShow from './CategoryShow'

function Courses() {
  return (
    <div className='bg-[#f2f4f7]'>
      <div className='w-full 2xl:w-[70%]  flex flex-col justify-center items-center gap-4 mx-auto px-4 py-16'>
        <Heading name={'Top Class Courses'} />
        <Heading2 name={'Explore Freatured Courses'} color={'text-black'} />
        <CategoryShow />
      </div>
    </div>
  )
}

export default Courses
