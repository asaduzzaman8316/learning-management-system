import Image from 'next/image'
import React from 'react'

function ExplorerCard({ name, para, icon, image }) {
    return (
        <div className='relative '>
            <div className='flex flex-col items-center px-16 gap-5 '>
                <Image
                    className='h-auto w-auto'
                    src={image} width={150} height={150} alt='image' />
                <h1 className='text-xl font-semibold text-white'>{name}</h1>
                <p className='text-gray-300 font-medium'>{para}</p>
            </div>
            <div className='bg-[#07a698] flex items-center justify-center rounded-full border-2 size-18 absolute -top-10 left-1/2 -translate-x-1/2'>
                <Image 
                className='w-auto h-auto'
                src={icon} width={70} height={70} alt='icon' />
            </div>
        </div>
    )
}

export default ExplorerCard
