'use client'
import useCategory from '@/app/DataFetch/useCategory'
import Heading from '@/components/share/Heading'
import Heading2 from '@/components/share/Heading2'
import Image from 'next/image'
import React from 'react'

function Categories() {
    const { category } = useCategory()

    return (
        <div className='bg-[#f2f4f7] '>
            <div className='lg:w-[90%] 2xl:w-[70%] px-4 flex flex-col items-center justify-center py-16 mx-auto w-full gap-5'>
                <Heading name={'Our Course Categories'} />
                <Heading2 color={'text-gray-700'} name={'Select The Inustry Where You Want To Learn'} />
                <div className='flex flex-wrap items-center justify-center gap-5'>
                    {
                        category.map(item => {
                            return (
                                <div
                                data-aos='fade-up' data-aos-duration='1000'
                                    className='border bg-white hover:bg-[#07a698] hover:text-white duration-500 transition-all pl-1 pr-5 py-1.5 rounded-full flex justify-center items-center gap-2 border-gray-100'
                                    key={item.id}>
                                    <div className='size-12 flex items-center justify-center rounded-full bg-gray-100'>
                                        <Image
                                            className='h-auto w-auto'
                                            src={`${item.icon}`} width={30} height={30} alt='card icon' />
                                    </div>
                                    <p className='text-xl'>{item.title}</p>
                                </div>
                            )

                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Categories
