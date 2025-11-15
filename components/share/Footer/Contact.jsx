import React from 'react'
import Heading from './Heading'
import { FaAmilia, FaFax, FaLocationArrow, FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

function Contact() {
    return (
        <div>
            <Heading name={'Contact Us'} />
            <div className='text-gray-600  flex gap-1'>
                <FaLocationArrow className='text-[#838C51]' />
                The Design Themes Inc. <br /> Mary Jane St, Sydney  <br /> 2233 Australia
            </div>
            <div className='text-gray-600 space-y-5 mt-4 divide-gray-300 divide-y-2'>
                <p className='flex pb-2 items-center gap-2'><FaPhone className='text-[#838C51]' />
                    +880 1610839202</p>
                <p className='flex pb-2 items-center gap-2'><FaFax className='text-[#838C51]' />
                    +880 1610839202</p>
                <p className='flex pb-2 items-center gap-2'><MdEmail className='text-[#838C51]' />
                    asaduzzaman8316@gmail.com</p>
            </div>
        </div>
    )
}

export default Contact
