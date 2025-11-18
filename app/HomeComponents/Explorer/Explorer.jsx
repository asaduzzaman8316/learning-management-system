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
        <div className='relative z-10'>
            <Image
                className='w-auto h-auto'
                src={explorer} width={10000} height={1000} alt='explorer image' />
            <Image
                className='absolute top-20 left-10'
                src={exShape1} width={150} height={100} alt='shape1' />
            <Image
                className='absolute top-10 right-0'
                src={exShape2} width={150} height={100} alt='shape2' />
            <div className='lg:w-[70%] mx-auto absolute top-0 left-1/2 -translate-x-1/2  w-full text-center py-16 px-4 '>
                <div className='flex items-center justify-center flex-col gap-10'>
                    <Heading name={'Why Choose Us'} />
                    <Heading2 color={'text-white'} name={'Explore Yourself All Over The World'} />
                </div>

                <div className='grid grid-cols-3  gap-4 mt-24 divide-gray-600 divide-dashed divide-x  items-center'>
                    <ExplorerCard name={'Book Free Consultation'} para={'Standards in leadership skills synergize optimal expertise rather than innovative leadership skills'} icon={cardicon1} image={cardImage1} />

                    <ExplorerCard name={'Make Easy Payment'} para={'Standards in leadership skills synergize optimal expertise rather than innovative leadership skills'} icon={cardicon2} image={cardImage2} />

                    <ExplorerCard name={'Book Free Consultation'} para={'Standards in leadership skills synergize optimal expertise rather than innovative leadership skills'} icon={cardicon3} image={cardImage3} />
                </div>
            </div>
        </div>
    )
}

export default Explorer
