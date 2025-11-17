import React from 'react'
import {  FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa6'

function Social() {
    return (
        <div className='flex items-center gap-4 text-white'>
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaTwitter />
        </div>
    )
}

export default Social
