import React from 'react'
import StatusCard from './StatusCard'

function Status() {
    return (
        <div className='bg-[#07a698]  '>
                <div className='w-full divide-gray-200 py-36 divide-x lg:w-[70%] mx-auto flex items-center justify-between'>
                    <StatusCard h1={'3,192+'} p={'Successflly trained'}/>
                    <StatusCard h1={'15,678+'} p={'classes completed'}/>
                    <StatusCard h1={'97.55%'} p={'satiseaction rate'}/>
                    <StatusCard h1={'98.5%'} p={'success rate'}/>
                </div>
        </div>
    )
}

export default Status
