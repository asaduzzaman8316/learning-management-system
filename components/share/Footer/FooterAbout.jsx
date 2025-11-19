import React from 'react'
import FooterHeading from './FooterHeading'
import { FaPhone } from 'react-icons/fa'
import Social from './Social'

function FooterAbout() {
    return (
        <div data-aos='fade-up-right' data-aos-duration='1500' className='space-y-8'>
            <FooterHeading name={'get in touch!'} />
            <p className='text-gray-300 '>Fosce varius, dolor tempor interdum <br />tristiquei bibendum</p>
            <div className='space-y-4'>
                <p className='flex items-center gap-2 text-white text-2xl font-semibold'><FaPhone /> (+880 1610 839202)</p>
                <p className='text-white text-xl'>info@edcare.com</p>
                <Social />
            </div>
        </div>
    )
}

export default FooterAbout
