import React from 'react'
import { FaStar } from 'react-icons/fa'

function Rating({ rating }) {
    return (
        <div className='flex items-center gap-3'>
            <div className='flex items-center gap-1 text-[#07a698] text-lg'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
            <p className='text-gray-600'>({rating})</p>
        </div>
    )
}

export default Rating
