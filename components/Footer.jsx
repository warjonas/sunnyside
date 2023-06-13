import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
      <div className='flex items-center justify-center flex-col bg-moderate-cyan h-[50vh]'>
          <Image src="/logo.svg" alt="logo" width={48} height={14} className='h-10 w-32 mb-10 text-desaturated-cyan' />
          <ul className='flex gap-5 mb-20 text-desaturated-cyan text-lg font-semibold '>
              <li className='hover:cursor-pointer hover:text-white transition-all duration-150 ease-in-out'>About</li>          
              <li className='hover:cursor-pointer hover:text-white transition-all duration-150 ease-in-out'>Services</li>
              <li className='hover:cursor-pointer hover:text-white transition-all duration-150 ease-in-out'>Testimonials</li>
          </ul>
          <div className="flex gap-5 text-desaturated-cyan">
              <Image src="/icon-facebook.svg" alt="logo" width={1080} height={1920} className='h-10 w-10' />
              <Image src="/icon-instagram.svg" alt="logo" width={1080} height={1920} className='h-10 w-10' />
              <Image src="/icon-twitter.svg" alt="logo" width={1080} height={1920} className='h-10 w-10' />
              <Image src="/icon-pinterest.svg" alt="logo" width={1080} height={1920} className='h-10 w-10' />
          </div>

      
    </div>
  )
}

export default Footer
