import React from 'react'

function FooterHeading({name}) {
  return (
    <div>
      <h1 className='text-xl font-bold w-fit uppercase border-b-2  pb-2 border-b-white text-white'>{name}</h1>
    </div>
  )
}

export default FooterHeading