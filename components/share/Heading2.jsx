import React from 'react'

function Heading2({name, color}) {
  return (
    <div>
      <h1 className={`text-4xl font-semibold text-center lg:text-start ${color}`}>{name}</h1>
    </div>
  )
}

export default Heading2
