import React from 'react'
import { BsFillLightningChargeFill } from 'react-icons/bs'

function Heading({name}) {
    return (
        <div className='bg-white  border border-gray-200 pl-1 pr-2 py-1.5 w-fit flex items-center gap-3 rounded-full '>
            <div className='size-7 flex items-center justify-center bg-[#daf2f0] text-green-600 rounded-full'><BsFillLightningChargeFill /></div>
            {name}
        </div>
    )
}

export default Heading
