import React from 'react'
import JourneyLeft from './JourneyLeft'
import JourneyRight from './JourneyRight'

function Journey() {
    return (
        <div className='w-full lg:w-[70%] mx-auto gap-16 py-24 px-8 grid lg:grid-cols-2 justify-between items-center'>
            <JourneyLeft />
            <JourneyRight/>
        </div>
    )
}

export default Journey
