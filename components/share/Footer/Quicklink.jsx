import React from 'react'
import SingleQuickLink from './SingleQuickLink'
import Heading from './Heading'

function Quicklink() {
    return (
        <div className='w-full'>
            <Heading name={'Quick Links'} />
            <div className='flex w-full flex-col items-start justify-start gap-5 divide-gray-300 divide-y-2'>
                <SingleQuickLink title={'All Courses'} />
                <SingleQuickLink title={'Summer Sessions'} />
                <SingleQuickLink title={'Professional Courses'} />
                <SingleQuickLink title={'Privacy Policy'} />
                <SingleQuickLink title={'Terms of Use'} />
            </div>
        </div>
    )
}

export default Quicklink
