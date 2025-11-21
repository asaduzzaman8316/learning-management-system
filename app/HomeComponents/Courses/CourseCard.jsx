'use client'
import useCourse from '@/app/DataFetch/useCourse'
import React, { useState } from 'react'
import Image from 'next/image'
import { MdOutlinePlayLesson } from 'react-icons/md'
import { CiUser } from 'react-icons/ci'
import { GrView } from 'react-icons/gr'
import Rating from '@/components/share/Rating'
import Link from 'next/link'

function CourseCard({ cid , range}) {

    const { course } = useCourse()
    const filterdata = cid !== 0 ? course.filter(item => item.category_id == cid) : course;
    return (
        <div className='grid lg:grid-cols-3   items-center gap-5 py-16'>
            {
                filterdata.slice(0, range).map(item => (
                    <div data-aos='fade-up' data-aos-delay={`300 * ${item.id}`} key={item.id} className='bg-white p-6 rounded-2xl border border-gray-200'>
                        <div className='overflow-hidden mx-auto rounded-2xl h-fit w-fit'>
                            <Image
                                className='rounded-2xl object-cover  mx-auto hover:scale-105 duration-500 transition-all'
                                src={item.course_image} width={700} height={200} alt={item.course_title} />
                        </div>
                        <div className='my-8'>
                            <p className='text-[#07a698] font-medium bg-green-100 w-fit px-4 py-1 rounded-full text-sm'>{item.price_label}</p>
                            <h1 className='text-2xl font-semibold tracking-tight text-gray-700 mt-5'>{item.course_title}</h1>
                        </div>
                        <div className='flex items-center justify-between '>
                            <div className='flex items-center gap-1 text-gray-600'><MdOutlinePlayLesson /> Lesson  {item.lessons}</div>
                            <div className='flex items-center gap-1 text-gray-600'><CiUser /> Students {item.students_enrolled}</div>
                            <div className='flex items-center gap-1 text-gray-600'><GrView /> View: {item.total_views}</div>
                        </div>
                        <div className='mt-6 flex pb-4 items-center justify-between gap-2'>
                            <div className='flex items-center gap-2'>
                                <Image src={item.instructor.image} width={50} height={20} alt='user image' />
                                <div>
                                    <p className='font-medium text-lg'>{item.instructor.name}</p>
                                    <p className='text-xs text-[#07a698]'>Instructor</p>
                                </div>
                            </div>
                            <Rating rating={item.rating} />
                        </div>
                        <div className='flex pt-4  items-center justify-between border-t border-t-gray-200'>
                            <h1 className='text-2xl font-bold text-gray-700'>${item.price}</h1>
                            <Link
                                className='border px-6 py-2 rounded-full border-gray-200 hover:border-[#07a698] duration-500 transition-all'
                                href={`/coures/${item.id}`}
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CourseCard
