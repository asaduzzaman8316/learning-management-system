import React from 'react'
import bg from '@/app/assets/request-bg.png'
import imag from '@/app/assets/request-img-1.png'
import Image from 'next/image'
import NewsRight from './NewsRight'

function Newsletter() {
    return (
        <div className='relative py-16'>
            <Image src={bg} width={4000} height={4000} alt='footer bg' className='lg:h-auto lg:w-auto absolute top-0 left-0 h-full w-full object-cover' />
            <div className='grid lg:grid-cols-2  gap-10 items-center justify-between -top-6 relative  '>
                <Image src={imag} width={4000} height={1000} alt='request image' className='h-auto w-auto ' />
                <div data-aos='fade-up-left' data-aos-duration='1500'>
                    <NewsRight />
                </div>
            </div>
        </div>
    )
}

export default Newsletter
