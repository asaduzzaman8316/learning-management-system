import React from 'react'
import bg from '@/app/assets/request-bg.png'
import shape1 from '@/app/assets/req-shape-1.png'
import imag from '@/app/assets/request-img-1.png'
import Image from 'next/image'
import NewsRight from './NewsRight'

function Newsletter() {
    return (
        <div className='relative py-16'>
            <Image src={bg} width={3000} height={500} alt='footer bg' className='h-auto w-auto absolute top-0 left-0' />
            <div className='grid grid-cols-2  gap-10 items-center justify-between absolute top-10 '>
                <Image src={imag} width={4000} height={1000} alt='request image' className='h-auto w-auto ' />
                <div>
                    <NewsRight />
                </div>
            </div>
        </div>
    )
}

export default Newsletter
