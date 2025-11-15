import React from 'react'
import FooterLeft from './FooterLeft'
import PopularCourse from './PopularCourse'
import Quicklink from './Quicklink'
import Contact from './Contact'
import Image from 'next/image'
import logo from '@/app/assets/lms-logo.png'

function Footer() {
    return (
        <div className='bg-[#F5E9D4] py-16 relative'>
            <div className='lg:w-[70%] grid lg:grid-cols-4 gap-4 grid-cols-1 justify-between mx-auto px-4 lg:px-0'>
                <FooterLeft />
                <PopularCourse />
                <Quicklink />
                <Contact />
            </div>
            <div className='border-5 border-white bg-white rounded-full flex items-center justify-center  size-24 absolute -top-10 right-2/4'>
                <Image src={logo} width={90} height={40} alt='logo' />
            </div>
        </div>
    )
}

export default Footer
