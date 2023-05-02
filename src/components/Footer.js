import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
   <footer className='w-full border-solid border-dark border-t-2 font-medium text-lg'>
<Layout className={"py-8 flex items-center justify-between"}>
    <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
    <div className='flex items-center'>
    Build with <span className='text-primary text-2xl px-2'>&#9825;</span>by Md Tarikh Khan
    </div>
    
    <Link href="/">Say Hello on Insta <span>&#128512;</span></Link>
</Layout>
   </footer>
  )
}

export default Footer