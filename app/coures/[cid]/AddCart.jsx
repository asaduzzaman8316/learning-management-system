'use client'
import React from 'react'
import { increment } from '@/app/Redux/cartSlicer'
import { useDispatch } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'
function AddCart({ price, id }) {
    const dispatch = useDispatch()
    return (
        <div className='border shadow-sm p-8 border-gray-200 rounded-2xl'>
            <div className='flex items-center gap-4'>
                <h1 className='text-3xl font-semibold'>${price}</h1>
                <p className='text-white bg-[#07a698] px-4 w-fit rounded-full'>25% off</p>
            </div>
            <div
                onClick={() => (
                    dispatch(increment(id))
                )}
                className='bg-[#07a698] py-3 cursor-pointer flex items-center justify-center text-white text-xl font-semibold uppercase rounded-md mt-6 mb-2'>
                Add to cart
            </div>
            <div className='border-[#07a698] cursor-pointer border py-3 flex items-center justify-center text-gray-800 text-xl font-semibold uppercase rounded-md  '>
                buy now
            </div>
        </div>
    )
}

export default AddCart
