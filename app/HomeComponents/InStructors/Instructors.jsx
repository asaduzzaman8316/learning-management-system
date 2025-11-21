import React from 'react'
import bg from '@/app/assets/team-bg.png'
import Image from 'next/image'
import Heading from '@/components/share/Heading'
import Heading2 from '@/components/share/Heading2'
import SingleCard from './SingleCard'
import team1 from '@/app/assets/team-1.png'
import team2 from '@/app/assets/team-2.png'
import team3 from '@/app/assets/team-3.png'
import team4 from '@/app/assets/team-4.png'
function Instructors() {
    return (
        <div className='flex flex-col justify-center items-center relative'>
            <Image src={bg} width={3000} height={1000} alt='teamm-bg' className=' rounded-md  w-full h-full  absolute top-0 object-cover' />
            <div className='2xl:w-[70%] lg:py-32 py-10 gap-5  flex flex-col justify-center items-center mx-auto relative top-0   w-full '>
                <Heading name={'Our Instructors'} />
                <Heading2 name={"Explore Our World's Best Instructors "} color={'text-gray-800'} />
                <div className='grid lg:grid-cols-4 gap-8 px-4 mt-10  justify-between items-center'>
                    <SingleCard name={'Zaramane Mass LIkan'} image={team1} />
                    <SingleCard name={'Amelia Grace Lily'} image={team2} />
                    <SingleCard name={'Mason Logan Pol'} image={team3} />
                    <SingleCard name={'Isabella Charlotte'} image={team4} />
                </div>
            </div>
        </div>
    )
}

export default Instructors
