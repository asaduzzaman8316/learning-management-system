import Heading from '@/components/share/Heading'
import Heading2 from '@/components/share/Heading2'
import React from 'react'
import FaqSection from './FaqSection'

function QuestionRight() {
  return (
    <div data-aos='fade-up-left' data-aos-duration='1500' className='space-y-10 flex flex-col items-center justify-center lg:items-start mt-16 lg:mt-0 '>
      <Heading name={'Most Asked Question'}/>
      <Heading2 name={'Powerfull Dashboard  And High Performance Framework'} color={'text-gray-800'}/>
      <FaqSection/>
    </div>
  )
}

export default QuestionRight
