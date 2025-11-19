import Heading from '@/components/share/Heading'
import Heading2 from '@/components/share/Heading2'
import React from 'react'
import FaqSection from './FaqSection'

function QuestionRight() {
  return (
    <div className='space-y-10 '>
      <Heading name={'Most Asked Question'}/>
      <Heading2 name={'Powerfull Dashboard  And High Performance Framework'} color={'text-gray-800'}/>
      <FaqSection/>
    </div>
  )
}

export default QuestionRight
