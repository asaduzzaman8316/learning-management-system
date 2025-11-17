import React from 'react'
import Image from 'next/image'
import heroimage from '@/app/assets/team-3.png'
function HeroRight() {
    return (
        <div className='  flex justify-end'>
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
