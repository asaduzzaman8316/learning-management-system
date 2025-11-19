import Image from 'next/image'
import React from 'react'

function MiniCard({ icon, name }) {
    return (
        <div className='flex items-center justify-between  gap-8 border p-5 border-gray-200 rounded-md hover:shadow-2xl group'>
            <div className='h-20 w-20 rounded-full duration-500 transition-all flex items-center justify-center group-hover:bg-[#07a698]  bg-blue-50 '>
                <p className='text-5xl group-hover:text-white duration-500 transition-all text-[#07a698] '>{icon}</p>
            </div>
            <div className='space-y-2 w-[80%]'>
                <h1 className='text-xl font-semibold text-gray-800'>{name}</h1>
                <p className='text-gray-500'>This includes offering personalized feedback, fostering a sense of community through discussion.</p>
            </div>
        </div>
    )
}

export default MiniCard
