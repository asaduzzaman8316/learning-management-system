import Link from 'next/link'
import React from 'react'
import { IoTriangle } from 'react-icons/io5'
import hero1 from '@/app/assets/hero-author-1.png'
import hero2 from '@/app/assets/hero-author-2.png'
import hero3 from '@/app/assets/hero-author-3.png'
import hero4 from '@/app/assets/hero-author-4.png'
import Image from 'next/image'
import Heading from '@/components/share/Heading'

function HeroLeft() {
    return (
        <div data-aos='fade-right' className='space-y-6'>
            <Heading name={'Welcome to Online Education'} />
            <h1 className='text-5xl font-semibold text-gray-800'>Start Learning from <br /> the world&apos;s <span className='text-[#07a698] font-normal'>best insttitutions</span></h1>
            <div className='flex items-center gap-4'>
                <Link
                    className={`bg-[#07a698] py-3  w-fit  flex items-center gap-1 text-white font-bold px-12 cursor-pointer after:content-['']  after:w-12 after:opacity-0 hover:after:opacity-100 after:rounded-full after:h-full after:absolute after:left-0 duration-500 transition-all after:duration-500 after:transition-all relative after:bg-[#19887f] hover:after:w-full  after:-z-10 z-20 rounded-full`}
                    href={'/coures'}>
                    Get Started
                </Link>
                <div className='flex items-center gap-4'>
                    <div className='flex items-center justify-center bg-white rounded-full size-12 '>
                        <IoTriangle className='rotate-90 text-[#07a698]' />
                    </div>
                    <p>Watch the video</p>
                </div>
            </div>

            <div>
                <div className='pb-6 relative flex items-center w-fit'>
                    <Image
                        src={hero1}
                        width={45}
                        height={23}
                        alt='author'
                    />
                    <Image
                        src={hero2}
                        width={45}
                        height={23}
                        alt='author'
                        className='absolute left-7'
                    />
                    <Image
                        src={hero3}
                        width={45}
                        height={23}
                        alt='author'
                        className='absolute left-14'
                    />
                    <Image
                        src={hero4}
                        width={45}
                        height={23}
                        alt='author'
                        className='absolute left-22'
                    />
                    <p className='pl-28 '><span className='text-[#07a698]'>10k </span> Enrolment</p>
                </div>
                <p className='text-2xl  font-medium text-gray-700'>Explore <span className='text-[#07a698]'>1350+ </span> Courses within Subject</p>
            </div>
        </div>
    )
}

export default HeroLeft
