import React from 'react'
import QuestionLeft from './QuestionLeft'
import QuestionRight from './QuestionRight'

function Question() {
  return (
    <div className='w-full lg:w-[80%] 2xl:w-[65%] mx-auto px-8 py-20 gap-8 justify-center  grid lg:grid-cols-2 items-center'>
      <QuestionLeft/>
      <QuestionRight/>
    </div>
  )
}

export default Question
