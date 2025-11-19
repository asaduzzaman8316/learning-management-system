import Image from 'next/image'
import React from 'react'
import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'
import heroshape1 from '@/app/assets/hero-shape-1.png'
import heroshape3 from '@/app/assets/hero-shape-2.png'
import heroshape2 from '@/app/assets/hero-shape-3.png'

function Hero() {
    return (
        <div className='bg-[#eff2f9] relative z-10' >
            <div className=' w-full grid grid-cols-1 lg:grid-cols-2 lg:w-[70%] mx-auto px-4 items-center justify-between  py-20'>
                <HeroLeft />
                <HeroRight />
            </div>
            <div className='bg-white px-6 w-fit py-4 rounded-xl absolute top-3/5 lg:-translate-x-14 lg:right-1/3'>
                <p className='text-[#07a698] text-4xl font-semibold '>256+</p>
                <p className='font-semibold tracking-tight text-gray-700'>CARSHED COURSES</p>
            </div>
            <Image
                src={heroshape1}
                width={200}
                height={500}
                alt='hero shapr'
                className='absolute top-1/2 right-0 lg:top-1/3 lg:right-48 animate-bounce-slow '
            />
            <Image
                src={heroshape2}
                width={700}
                height={500}
                alt='hero shapr'
                className='absolute bottom-0 right-60 -z-10 animate-bounce-slow '
            />
            <Image
                src={heroshape3}
                width={60}
                height={200}
                alt='hero shapr'
                className='absolute bottom-10 left-20 -z-10 animate-bounce-slow '
            />
        </div>
    )
}

export default Hero
