import React from 'react'
import logo from '@/app/assets/logo-1.png'
import Image from 'next/image'
import { PiCirclesFourLight } from 'react-icons/pi'
import Button from '../Button'
import { IoMdSearch } from 'react-icons/io'
import Cart from '../Cart'
import { CiHeart } from 'react-icons/ci'
import { BsCart3 } from 'react-icons/bs'
function CenterHeader() {
  return (
    <div className='w-full lg:w-[70%] flex items-center justify-between px-4 py-7 mx-auto'>
      <div>
        <Image
          src={logo}
          width={150}
          height={30}
          alt='home log'
          className='w-auto h-auto'
        />
      </div>
      <div className='hidden lg:block'>
        <div className=' rounded-full px-4 py-1 bg-gray-100 flex items-center gap-4'>
          <div className='flex items-center gap-1 border-r pr-3 border-r-gray-300'>
            <PiCirclesFourLight className='text-xl' />
            <select className='outline-none  ' name="" id="">
              <option className='font-semibold py-2' value="">Categories</option>
              <option className='text-gray-600 py-2' value="">Fashion</option>
              <option className='text-gray-600 py-2 ' value="">Organic</option>
              <option className='text-gray-600 py-2' value="">Furniture</option>
            </select></div>
          <input type='search' className='outline-none' placeholder='Search here' />
          <Button py={'py-2'} logo={<IoMdSearch />} name={'Search'} />
        </div>
      </div>

      <div className='flex items-center gap-4'>
        <Cart logo={<CiHeart />} count={0} />
        <Cart logo={<BsCart3 />} count={2} />
        <div className='hidden lg:block'>
          <Button py={'py-3'} name={'Start Free Trail'} />
        </div>
      </div>
    </div>
  )
}

export default CenterHeader
