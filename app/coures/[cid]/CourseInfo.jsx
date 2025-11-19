import React from 'react'
import { FaBook, FaHome, FaRegClock, FaTag } from 'react-icons/fa'
import { IoShareSocialOutline } from 'react-icons/io5'
import { MdQuiz } from 'react-icons/md'
import { TbWorld } from 'react-icons/tb'

function CourseInfo({ course }) {
    return (
        <div className='border shadow-md rounded-2xl border-gray-200 mt-8 p-8'>
            <h1 className='text-2xl font-semibold'>Course Information</h1>
            <div className='divide-y divide-gray-300 divide-dashed'>
                <p className='flex items-center gap-2 py-6 font-medium'><FaHome className='text-[#07a698] ' /> Instructor: <span className='text-gray-600'>{course.instructor.name}</span></p>
                <p className='flex items-center gap-2 py-6 font-medium'><FaBook className='text-[#07a698] ' /> Lessons: <span className='text-gray-600'>{course.lessons}</span></p>
                <p className='flex items-center gap-2 py-6 font-medium'><FaRegClock className='text-[#07a698] ' /> Duration: <span className='text-gray-600'>15h 30m 35s</span></p>
                <p className='flex items-center gap-2 py-6 font-medium'><FaTag className='text-[#07a698] ' /> Course level: <span className='text-gray-600'>Beginners</span></p>
                <p className='flex items-center gap-2 py-6 font-medium'><TbWorld className='text-[#07a698] ' /> Language: <span className='text-gray-600'>English</span></p>
                <p className='flex items-center gap-2 py-6 font-medium'><MdQuiz className='text-[#07a698] ' /> Quizzes: <span className='text-gray-600'>04</span></p>
            </div>
            <div className='bg-gray-100 rounded-md py-3 flex items-center justify-center gap-3 text-[#07a698] font-semibold'>
                <IoShareSocialOutline />
                Share This Course
            </div>
        </div>
    )
}

export default CourseInfo
