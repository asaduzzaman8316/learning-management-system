import React from 'react'
import Image from 'next/image'
import heroimage from '@/app/assets/team-3.png'
function HeroRight() {
    return (
        <div data-aos='fade-left' className='  flex justify-end mt-10 lg:mt-0'>
            <Image
                src={'https://html.rrdevs.net/edcare/assets/img/images/hero-img-1.png'}
            width={500}
            height={1000}
            alt='hero iage '
            className='rounded-[70px]'
            />
        </div>
    )
}

export default HeroRight
