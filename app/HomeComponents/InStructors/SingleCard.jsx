import Image from 'next/image'
import React from 'react'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa6'

function SingleCard({ image, name }) {
    return (
        <div data-aos='fade-up-right' data-aos-duration='1500' className='bg-white w-full relative  rounded-md shadow-md '>
            <div className='overflow-hidden group h-70'>
                <Image src={image} width={500} height={100} alt={name} className='h-auto w-auto rounded-md' />
                <div className='h-70 w-full bg-black/50 rounded-md duration-500 transition-all  absolute top-0 opacity-0 group-hover:opacity-100 '></div>
                <div className='flex items-center gap-5 absolute top-1/3 left-1/2 -translate-x-1/2'>
                    <div className='text-[#07a698] opacity-0 text-xl bg-white size-10 rounded-full flex items-center justify-center group-hover:opacity-100 cursor-pointer hover:text-white hover:bg-[#07a698] duration-500 transition-all'><FaFacebookF /></div>
                    <div className='text-[#07a698] text-xl bg-white size-10 rounded-full flex items-center justify-center group-hover:opacity-100 opacity-0 cursor-pointer hover:text-white hover:bg-[#07a698] duration-500 transition-all'><FaLinkedinIn /></div>
                    <div className='text-[#07a698] text-xl bg-white size-10 rounded-full flex items-center justify-center group-hover:opacity-100 opacity-0 cursor-pointer hover:text-white hover:bg-[#07a698] duration-500 transition-all'><FaTwitter /></div>
                </div>
            </div>
            <div className='p-4'>
                <h1 className='text-xl font-bold '>{name}</h1>
                <p className='text-[#07a698]'>Online Teacher</p>
            </div>

        </div>
    )
}

export default SingleCard
