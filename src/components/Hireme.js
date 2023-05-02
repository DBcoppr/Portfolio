import React from 'react'
import { CircularMern } from './Icons'
import Link from 'next/link'

const Hireme = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden'>
    <div className='w-56 h-auto relative flex items-center justify-center'>
        <CircularMern className={"fill-dark animate-spin-slow "}/>
<Link href="mailto:mdtarikhan007@gmail.com" className='absolute flex items-center justify-center bg-dark text-light border-2 border-solid border-dark left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-20 h-20 shadow-md font-semibold hover:bg-light hover:text-dark'>Hire Me</Link>
    </div>

    </div>
  )
}

export default Hireme