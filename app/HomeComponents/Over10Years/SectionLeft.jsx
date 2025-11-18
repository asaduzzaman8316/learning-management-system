import React from 'react'
import Image from 'next/image'
import image1 from '@/app/assets/about-img-1.jpg'
import image2 from '@/app/assets/about-img-2.jpg'
import { FiPhoneCall } from 'react-icons/fi'
function SectionLeft() {
    return (
        <div className='flex items-end gap-5'>
            <div>
                <div className=''>
                    <Image
                        src={image1}
                        width={300}
                        height={300}
                        alt='about image 1'
                        className=' border-2 rounded-tr-[80px] rounded-bl-[80px] p-1.5 border-gray-300'
                    />
                </div>
                <div className='flex items-center text-white bg-[#07a698] gap-5'>
                    <div className='size-8  bg-white flex justify-center items-center text-xl text-[#07a698] '>
                        <FiPhoneCall />
                    </div>
                    <div>
                        <p className='text-xl uppercase tracking-tight leading-6'>Online support</p>
                        <p className='text-2xl font-semibold'>+256 152 3659</p>
                    </div>
                </div>
            </div>
            <div>
                <Image className='rounded-tl-[80px]  rounded-br-[80px]' src={image2} width={300} height={300} alt='about iage 2' />
            </div>
        </div>
    )
}

export default SectionLeft
