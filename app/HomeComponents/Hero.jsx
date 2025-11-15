import Image from 'next/image'
import React from 'react'
import heroimage from '@/app/assets/fullscreen-slider.jpg'

function Hero() {
    return (
        <div className='h-screen w-full'>
            <Image
                src={heroimage}
                width={3000}
                height={1000}
                alt='hero image'
                className='object-cover  '
            />
            
        </div>
    )
}

export default Hero
