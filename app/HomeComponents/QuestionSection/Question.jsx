import React from 'react'
import QuestionLeft from './QuestionLeft'
import QuestionRight from './QuestionRight'

function Question() {
  return (
    <div className='w-full lg:w-[65%] mx-auto px-8 py-20 justify-center  grid lg:grid-cols-2 items-center'>
      <QuestionLeft/>
      <QuestionRight/>
    </div>
  )
}

export default Question
