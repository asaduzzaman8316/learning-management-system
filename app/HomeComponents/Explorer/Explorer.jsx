import Image from 'next/image'
import React from 'react'
import explorer from '@/app/assets/footer-bg.png'
import exShape1 from '@/app/assets/promo-shape-1.png'
import exShape2 from '@/app/assets/promo-shape-2.png'
import Heading from '@/components/share/Heading'
import Heading2 from '@/components/share/Heading2'
import ExplorerCard from './ExplorerCard'
import cardicon1 from '@/app/assets/promo-4.png'
import cardicon2 from '@/app/assets/promo-5.png'
import cardicon3 from '@/app/assets/promo-6.png'
import cardImage1 from '@/app/assets/promo-img-1.png'
import cardImage2 from '@/app/assets/promo-img-2.png'
import cardImage3 from '@/app/assets/promo-img-3.png'

function Explorer() {
    return (
        <div className='relative z-10 '>
            <Image
                className='w-full h-full  absolute '
                src={explorer} width={10000} height={1000} alt='explorer image' />
            <Image
                className='absolute top-20 left-10'
                src={exShape1} width={150} height={100} alt='shape1' />
            <Image
                className='absolute top-10 right-0'
                src={exShape2} width={150} height={100} alt='shape2' />
            <div className='2xl:w-[70%] mx-auto  relative top-0  w-full text-center py-5 lg:py-16 px-4 '>
                <div className='flex items-center justify-center flex-col lg:gap-10 gap-3'>
                    <Heading name={'Why Choose Us'} />
                    <Heading2 color={'text-white'} name={'Explore Yourself All Over The World'} />
                </div>

                <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-4 gap-12 lg:mt-24 mt-12 divide-gray-600 divide-dashed lg:divide-x divide-y lg:divide-y-0 items-center'>
                    <ExplorerCard name={'Book Free Consultation'} para={'Standards in leadership skills synergize optimal expertise rather than innovative leadership skills'} icon={cardicon1} image={cardImage1} />

                    <ExplorerCard name={'Make Easy Payment'} para={'Standards in leadership skills synergize optimal expertise rather than innovative leadership skills'} icon={cardicon2} image={cardImage2} />

                    <ExplorerCard name={'Book Free Consultation'} para={'Standards in leadership skills synergize optimal expertise rather than innovative leadership skills'} icon={cardicon3} image={cardImage3} />
                </div>
            </div>
        </div>
    )
}

export default Explorer
