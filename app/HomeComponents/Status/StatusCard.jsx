import React from 'react'

function StatusCard({h1, p}) {
  return (
    <div className='pr-15 text-center'>
      <h1 className='text-5xl font-bold text-white'>{h1}</h1>
      <p className='text-xl text-white font-semibold uppercase'>{p}</p>
    </div>
  )
}

export default StatusCard
