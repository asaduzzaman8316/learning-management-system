import React from 'react'

function Cart({ count, logo }) {
    return (
        <div className='relative'>
            <div className='size-10 relative border-gray-200 text-2xl text-gray-600 font-semibold flex items-center justify-center border rounded-full '>
                {logo}
            </div>
            <div className='absolute -top-2 right-0 bg-[#07a698] size-5 flex justify-center items-center text-white rounded-full'>
                {count}
            </div>
        </div>
    )
}

export default Cart
