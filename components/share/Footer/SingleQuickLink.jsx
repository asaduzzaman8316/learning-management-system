import Link from 'next/link'
import React from 'react'
import { MdArrowForwardIos } from 'react-icons/md'

function SingleQuickLink({ title }) {
    return (
        <div className='pb-2 w-full flex flex-col items-start'>
            <Link
                href={'/'}
                className='hover:text-amber-400 text-sm gap-1  duration-500 text-gray-600 flex items-center justify-center'>
                <MdArrowForwardIos />
                {title}
            </Link>
        </div>
    )
}

export default SingleQuickLink
