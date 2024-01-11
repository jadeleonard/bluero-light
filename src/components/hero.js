import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16'>
        <p className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>Welcome to <span className='text-blue-400'>Bluero</span>: A Modern npm UI Design</p>
        <p className='mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400'>Bluero is a sleek and versatile npm UI design library that brings a touch of sophistication to your web development projects.</p>


        <div className='flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 gap-4'>
            <Link to={'/components'}>
                <button className='bg-blue-400 rounded shadow-md py-2 px-4 hover:bg-blue-600 transition duration-500 hover:transition hover:duration-500 hover:shadow-md'>
                    Get Started
                </button>
            </Link>
            <Link to={'/forum'}>
                <button className='bg-black text-zinc-100 py-2 px-4 shadow-md'>Forum</button>
            </Link>
        </div>
      
    </div>
  )
}

export default Hero
