import Heading from '@/components/share/Heading'
import Heading2 from '@/components/share/Heading2'
import React from 'react'
import MiniCard from './MiniCard'
import icon1 from '@/app/assets/content-1.png'
import icon2 from '@/app/assets/content-2.png'
import { LiaCertificateSolid } from 'react-icons/lia'
import { FaRegLightbulb } from 'react-icons/fa'

function JourneyRight() {
  return (
    <div data-aos='fade-up-left' data-aos-duration='1500' className='flex flex-col items-center justify-center lg:items-start gap-10'>
      <Heading name={'How We Start Journey'}/>
      <Heading2 name={'We Care About Your LIfe For Better Fauter'} color={'text-gray-800'}/>
      <p className='text-gray-600'>This includes offering personalized feedback, fostering a sense of community through discussion forums and group projects, and providing continuous support to address challenges and improve.</p>
      <div className='space-y-6'>
    <MiniCard name={'Master Certifited Trainer'} icon={<LiaCertificateSolid />}/>
    <MiniCard name={'Coach Certification Program'} icon={<FaRegLightbulb />}/>
      </div>
    </div>
  )
}

export default JourneyRight
