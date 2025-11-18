import Heading from '@/components/share/Heading'
import Heading2 from '@/components/share/Heading2'
import Image from 'next/image'
import React from 'react'


async function Categories() {
    const baseurl = process.env.NEXT_PUBLIC_BASE_URL
    const res = await fetch(`${baseurl}/categorys.json`)
    const category = await res.json()
    console.log(typeof (category))

    return (
        <div className='bg-[#f2f4f7] '>
            <div className='lg:w-[70%] px-4 flex flex-col items-center justify-center py-16 mx-auto w-full gap-5'>
                <Heading name={'Our Course Categories'} />
                <Heading2 name={'Select The Inustry Where You Want To Learn'} />
                <div className='flex flex-wrap items-center justify-center gap-10'>
                    {
                        category.map(item => {
                            return (
                                <div
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
