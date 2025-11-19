import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import Button from '../Button'

function Subscribe() {
    return (
        <div className='border w-[70%] mx-auto  border-gray-600 p-22 rounded-md   flex items-center justify-between'>
            <h1 className='text-3xl text-white font-bold'>Subscribe Our Newsletter For <br />Latest Updates</h1>
            <div className='border border-gray-600 rounded-full text-white w-[40%] flex items-center gap-2'>
                <MdOutlineEmail className='text-xl translate-x-6'/>
                <input type='email' placeholder='Enter Your E-mail' className='outline-none px-6 py-3 rounded-full w-full placeholder:text-white' />
            </div>
            <Button name={'Subscribe Now'} py={'py-3'} />
        </div>
    )
}

export default Subscribe
