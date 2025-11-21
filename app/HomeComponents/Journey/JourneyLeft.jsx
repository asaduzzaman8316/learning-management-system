import Image from 'next/image'
import React from 'react'
import image1 from '@/app/assets/content-img-1.png'
import image2 from '@/app/assets/content-img-2.png'
import image3 from '@/app/assets/content-img-3.png'

function JourneyLeft() {
    return (
        <div data-aos='fade-up-right' data-aos-duration='1500' className='flex items-center gap-8 relative '>
            <div>
                <Image src={image1 } width={300} height={200} alt='image1' className=' rounded-tl-[80px]' />
            </div>
            <div className='space-y-6'>
                <Image src={image2 } width={300} height={100} alt='image2' className='h-auto w-auto rounded-tr-[80px] rounded-bl-[80px]' />
                <Image src={image3 } width={300} height={100} alt='image2' className='h-auto w-auto rounded-tl-[80px] rounded-br-[80px]' />
            </div>
        </div>
    )
}

export default JourneyLeft
