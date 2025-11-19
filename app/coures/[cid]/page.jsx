
import Image from 'next/image';
import React from 'react'
import { CiCalendar } from 'react-icons/ci';
import { FaRegStar, FaTags } from 'react-icons/fa';
import AddCart from './AddCart';
import CourseInfo from './CourseInfo';

async function page({ params }) {
    const { cid } = await params;
    const baseurl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    const res = await fetch(`${baseurl}/data.json`)
    const courses = await res.json()
    const course = courses.find(item => item.id == cid)
    return (
        <div className='w-full lg:w-[70%] mx-auto px-4 py-20'>
            <div className=' grid grid-cols-12 gap-8'>
                <div className='border border-gray-200 rounded-2xl shadow-sm col-span-9 p-7'>
                    <Image src={course.course_image} width={1000} height={400} alt='course image' className=' rounded-md' />
                    <div className='flex items-center gap-6 py-6 '>
                        <p className='text-white bg-[#07a698] w-fit px-5 rounded-full py-0.5'>Best Seler</p>
                        <p className='text-white bg-[#07a698] w-fit px-5 rounded-full py-0.5'>Latest</p>
                    </div>
                    <h1 className='text-4xl font-semibold text-gray-800'>{course.course_title}</h1>

                    <div className='flex items-center divide-gray-200 divide-x justify-between py-6'>
                        <div className='flex items-center gap-3 pr-4'>
                            <Image src={course.instructor.image} width={70} height={100} alt='instructor image' className='h-auto w-auto' />
                            <p className='font-medium'><span className='text-[#07a698]'>Instructor: </span>{course.instructor.name}</p>
                        </div>

                        <div className='flex items-center gap-3 pr-4 '>
                            <FaTags className='text-[#07a698]' />
                            <p className=' font-medium'>Web Development</p>
                        </div>

                        <div className='flex items-center gap-3 pr-4 '>
                            <CiCalendar className='text-[#07a698] text-xl' />
                            <p className=' font-medium'>20 November 2025</p>
                        </div>

                        <div className='flex items-center gap-3 pr-4 '>
                            <div className='flex items-center gap-2'>
                                <FaRegStar className='text-[#07a698] text-lg' />
                                <FaRegStar className='text-[#07a698] text-lg' />
                                <FaRegStar className='text-[#07a698] text-lg' />
                                <FaRegStar className='text-[#07a698] text-lg' />
                                <FaRegStar className='text-[#07a698] text-lg' />
                            </div>
                            <p className=' font-medium'>({course.rating})</p>
                        </div>

                    </div>
                </div>
                <div className=' col-span-3'>
                    <AddCart price={course.price} />
                    <CourseInfo course={course} />
                </div>
            </div>
        </div>
    )
}

export default page
