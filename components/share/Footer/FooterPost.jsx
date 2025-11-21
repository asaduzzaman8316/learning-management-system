import Image from 'next/image'
import React from 'react'
import { SlCalender } from 'react-icons/sl'

function FooterPost({ image, name }) {
    return (
        <div data-aos='fade-up-right' data-aos-duration='1500' className='flex items-center gap-3'>
            <Image src={image} width={120} height={40} alt='footer post image' className='' />
            <div className=''>
                <h1 className='text-xl text-white font-semibold'>{name}</h1>
                <p className='text-white text-sm mt-2 flex items-center gap-2'>
                    <SlCalender className='text-[#07a698]' />
                    20 November 2025
                </p>
            </div>
        </div>
    )
}

export default FooterPost
