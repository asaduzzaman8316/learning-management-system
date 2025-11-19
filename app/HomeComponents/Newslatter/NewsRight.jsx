import Button from '@/components/share/Button'
import Heading from '@/components/share/Heading'
import Heading2 from '@/components/share/Heading2'
import React from 'react'

function NewsRight() {
    return (
        <div className='space-y-5'>
            <Heading name={'Subscribe Newsletter'} />
            <Heading2 name={"Find Your Best ourse WIth Us"} color={'text-white'} />
            <p className='text-gray-400'>Quality technologies via fully testd methods of empowerment. Proactively disseminate <br /> web enabled best practices ofter cross fuctional expertise</p>
            <div className='space-x-10 py-4'>
                <input
                    className='text-white placeholder:text-white outline-none border border-gray-700 px-6 py-4 rounded-full bg-transparent'
                    type='text' placeholder='Course Name' />
                <input
                    className='text-white placeholder:text-white outline-none border border-gray-700 px-6 py-4 rounded-full bg-transparent'
                    type='email' placeholder='Email Address' />
            </div>
            <Button name={'Subscribe Now'} py={'py-3'}/>
        </div>
    )
}

export default NewsRight
