import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'

function Social() {
    return (
        <div  className='flex items-center gap-2 text-white '>
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaYoutube />
        </div>
    )
}

export default Social
