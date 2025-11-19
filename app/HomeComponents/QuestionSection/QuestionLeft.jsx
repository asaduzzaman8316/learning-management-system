import React from 'react'
import Image from 'next/image'
import image from '@/app/assets/faq-img.png'
import faq1 from '@/app/assets/faq-thumb-1.png'
import faq2 from '@/app/assets/faq-thumb-2.png'
import faq3 from '@/app/assets/faq-thumb-3.png'
import faq4 from '@/app/assets/faq-thumb-4.png'
function QuestionLeft() {
    return (
        <div data-aos='fade-up-right' data-aos-duration='1500' className='relative'>
            <Image src={image} width={500} height={300} alt='faq image' className='h-auto w-auto rounded-2xl ' />
            <div className=' bg-white  w-fit px-12 py-8 rounded-md shadow-sm absolute bottom-20 -left-16'>
                <h1 className='text-xl font-semibold '>Total Students</h1>
                <div className='relative mt-2 '>
                    <Image src={faq1} width={50} height={50} alt='faq1' className='h-auto w-auto border-3' />
                    <Image src={faq2} width={50} height={50} alt='faq1' className='h-auto w-auto absolute top-0 left-6 border-4 border-white rounded-full' />
                    <Image src={faq3} width={50} height={50} alt='faq1' className='h-auto w-auto absolute top-0 left-12 border-4 border-white rounded-full' />
                    <Image src={faq4} width={50} height={50} alt='faq1' className='h-auto w-auto absolute top-0 left-18 border-4 border-white rounded-full' />
                    <div className='rounded-full border-4 absolute top-0 left-24 border-white  bg-[#07a698] text-xl font-semibold text-white size-14 flex items-center justify-center'>25+</div>
                </div>
            </div>
        </div>
    )
}

export default QuestionLeft
