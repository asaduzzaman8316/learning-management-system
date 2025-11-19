'use client'
import React, { useState } from 'react'
import { navmenu } from '@/contant/navmenu'
import { PiCirclesFourLight } from 'react-icons/pi'
import Link from 'next/link'
import { MdKeyboardArrowDown } from 'react-icons/md'
function NavBar() {
    const [btn, setBnt] = useState(1)
    return (
        <div className='bg-white shadow-md sticky top-0 z-50 border-t-2 border-t-gray-200 py-4'>
            <div className='w-full lg:w-[70%] mx-auto flex items-center px-4  gap-14'>
                <div className='text-base  text-gray-800 uppercase font-semibold flex items-center gap-3 h-full border-r-2 border-r-gray-200 pr-4'>
                    <PiCirclesFourLight className='text-[#07a698]' />
                    Categories
                </div>
                <nav className='   space-x-5 font-medium flex items-center text-gray-900 uppercase  '>
                    {
                        navmenu.map(nav => (
                            <Link
                                key={nav.id}
                                href={nav.src}
                                className={`hover:text-[#07a698] tracking-tighter flex items-center  duration-500 transition-all ${btn === nav.id && 'text-[#07a698]'} leading-6`}
                                onClick={()=> setBnt(nav.id)}
                            >
                                {nav.name}
                                {nav.id !== 6 && <MdKeyboardArrowDown className='text-2xl font-bold' />}
                            </Link>
                        ))
                    }
                </nav>
            </div>
        </div>
    )
}

export default NavBar
