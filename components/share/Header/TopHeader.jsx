import React from 'react'
import { FaRegClock } from 'react-icons/fa'
import Social from './Social'
import { FiPhone } from 'react-icons/fi'
import { IoLocationOutline } from 'react-icons/io5'
import { CiUser } from 'react-icons/ci'

function TopHeader() {
  return (
    <div className='bg-[#1f2c30]'>
      <div className=' flex w-full lg:w-[70%] mx-auto px-4  items-center justify-between text-gray-300 py-3'>
        <div className='hidden lg:block'>
          <div className='flex items-center  gap-6 divide-gray-600  divide-x-2'>
            <p className='flex items-center gap-2 pr-5'>
              <FiPhone />
              +880 1610839202
            </p>
            <p className='flex items-center gap-2 pr-5'>
              <IoLocationOutline />
              Helano Street, New York
            </p>
            <p className='flex items-center gap-2 '>
              <FaRegClock />
              Mon-Sat: 8:00-15:00
            </p>
          </div>
        </div>

        <div className='flex items-center justify-between gap-10 '>
          <div className='flex items-center gap-2'>
            <CiUser />
            Login/Register
          </div>
          <div className='flex items-center gap-5'>
            <p>Follow Us</p>
            <Social />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopHeader
