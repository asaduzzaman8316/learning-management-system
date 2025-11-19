import Heading from '@/components/share/Heading'
import React from 'react'
import about1 from '@/app/assets/about-1.png'
import about2 from '@/app/assets/about-2.png'
import AboutCard from './AboutCard'
import Button from '@/components/share/Button'

function SectionRight() {
  return (
    <div data-aos='fade-up-left' className='flex flex-col items-center justify-center lg:items-start gap-5 mt-10 lg:mt-0 '>
      <Heading name={'Get More About us'} />
      <h1 className='text-4xl text-gray-700 font-bold text-center lg:text-start '>Over 10 Years in Distant Learning   for Skill Development</h1>
      <p className='text-gray-500 leading-7'>Compellingly procrastinate equity investd markets with efficient process improvement actualize mission-ceitical partnerships woth integrated prortals. Authoritatively optimixe low-risk high-yiedl metrics and plug-and-play potentialities.</p>
      <div className='flex items-center gap-10'>
        <AboutCard icon={about1} name={'Total active students taking gifted courses'} count={'9.5k+'} />
        <AboutCard icon={about2} name={'Total active students taking gifted courses'} count={'6.5k+'} />
      </div>
      <Button name={'Start Free Trail'} py={'py-3'}/>
    </div>
  )
}

export default SectionRight
