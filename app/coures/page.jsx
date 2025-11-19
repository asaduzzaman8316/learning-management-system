import Heading from '@/components/share/Heading'
import Heading2 from '@/components/share/Heading2'
import React from 'react'
import CourseCard from '../HomeComponents/Courses/CourseCard'

function page() {
  return (
    <div className='w-full lg:w-[70%] mx-auto px-4 pt-20 flex items-center justify-center flex-col gap-8'>
      <Heading name={'Top Class Courses'} />
      <Heading2 name={'Explore Featured Courses'} color={'text-gray-800'} />
      <div>
        <CourseCard cid={0} range={12} />
      </div>
    </div>
  )
}

export default page
