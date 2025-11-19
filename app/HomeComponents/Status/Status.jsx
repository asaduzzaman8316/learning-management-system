import React from 'react'
import StatusCard from './StatusCard'

function Status() {
    return (
        <div className='bg-[#07a698]  '>
                <div className='w-full divide-gray-200 py-16 px-8 lg:px-0 lg:gap-0 gap-10 lg:py-36 lg:divide-x divide-y lg:divide-y-0 lg:w-[70%] mx-auto grid lg:grid-cols-4 items-center lg:justify-between justify-center'>
                    <StatusCard h1={'3,192+'} p={'Successflly trained'}/>
                    <StatusCard h1={'15,678+'} p={'classes completed'}/>
                    <StatusCard h1={'97.55%'} p={'satiseaction rate'}/>
                    <StatusCard h1={'98.5%'} p={'success rate'}/>
                </div>
        </div>
    )
}

export default Status
