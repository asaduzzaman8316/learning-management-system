import Button from '@/components/share/Button'
import Heading from '@/components/share/Heading'
import Heading2 from '@/components/share/Heading2'
import React from 'react'

function NewsRight() {
    return (
        <div className='flex flex-col items-center lg:items-start justify-center gap-10'>
            <Heading name={'Subscribe Newsletter'} />
            <Heading2 name={"Find Your Best ourse WIth Us"} color={'text-white'} />
            <p className='text-gray-400 text-center lg:text-start'>Quality technologies via fully testd methods of empowerment. Proactively disseminate <br /> web enabled best practices ofter cross fuctional expertise</p>
            <div className='flex flex-col lg:flex-row gap-5 py-4 lg:w-[60%] w-full px-8 lg:px-0 items-center justify-between'>
                <input
                    className='text-white placeholder:text-white outline-none border border-gray-700 px-6 py-4 rounded-full w-full bg-transparent'
                    type='text' placeholder='Course Name' />
                <input
                    className='text-white w-full placeholder:text-white outline-none border border-gray-700 px-6 py-4 rounded-full bg-transparent'
                    type='email' placeholder='Email Address' />
            </div>
            <Button name={'Subscribe Now'} py={'py-3'}/>
        </div>
    )
}

export default NewsRight
