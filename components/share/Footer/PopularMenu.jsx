import Link from 'next/link'
import React from 'react'

function PopularMenu({ title, dese }) {
    return (
        <div className='pb-2'>
            <Link href={'/'} className='duration-500 text-gray-700 font-medium hover:text-amber-400'>{title}</Link>
            <h1 className='font-semibold text-[#838C51]'>{dese}</h1>
        </div>
    )
}

export default PopularMenu
