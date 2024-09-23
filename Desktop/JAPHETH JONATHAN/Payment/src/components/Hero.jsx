import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='flex flex-col py-12 justify-between h-full items-center'>
        <div className='h-3/4  flex flex-col items-center justify-between'>
            <h1 className='text-6xl'>Hi, Jane smith </h1>
            <p className='text-6xl'>Amount to pay</p>
            <p className='text-6xl text-dB'>£90</p>

        </div>
        <Link to={'/paymentoptions'} className='rounded-3xl p-4 text-white bg-dB hover:bg-pry text-center '>Make Payment</Link>
    </div>
  )
}

export default Hero