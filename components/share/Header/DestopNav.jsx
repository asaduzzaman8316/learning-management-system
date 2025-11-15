import React from 'react'
import logo from '@/app/assets/lms-logo.png'
import { navmenu } from '@/contant/navmenu'
import Image from 'next/image'
import Link from 'next/link'
import Account from './Account'
function DestopNav() {
    return (
        <div className='w-full fixed  top-0 z-50   mx-auto '>
            <div className="absolute z-5 inset-0 bg-linear-to-b from-[#F5ECDC]/80 via-[#F5ECDC]/40 to-transparent"></div>
            <div className='flex  lg:w-[70%] z-20 relative  items-center justify-between mx-auto mt-10 px-4 lg:px-0'>
                <Image
                    src={logo}
                    width={70}
                    height={30}
                    alt='main log'
                />
                <div className='flex justify-between items-center gap-10  font-semibold text-gray-900'>
                    {
                        navmenu.map(item => (
                            <Link
                                className='uppercase hover:text-cyan-800 duration-500  hover:-translate-y-1 transition-all'
                                key={item.id}
                                href={item.src}>
                                {item.name}
                            </Link>
                        ))
                    }
                </div>
                <Account />
            </div>

        </div>
    )
}

export default DestopNav
