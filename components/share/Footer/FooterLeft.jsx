import Link from 'next/link'
import React from 'react'
import Heading from './Heading'

function FooterLeft() {
    return (
        <div>
            <Heading name={'About Us'} />
            <div className='space-y-5'>
                <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, animi.</p>
                <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, animi.</p>
                <div className='border-2 w-fit px-6 py-0.5 rounded-md border-gray-500'>
                    <Link
                        href={'/'}
                        className='uppercase text-[#838C51]'
                    >
                        start learnign now
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FooterLeft
