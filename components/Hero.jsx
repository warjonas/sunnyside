import React from 'react'
import desktopHero from '@/public/desktop/image-header.jpg'
import mobileHero from '@/public/mobile/image-header.jpg'
import arrow from '@/public/icon-arrow-down.svg'
import Image from 'next/image'


const Hero = () => {
  return (
      <div className={`h-[100vh] w-[100vw] flex flex-col items-center bg-[url("../public/mobile/image-header.jpg")] md:bg-[url("../public/desktop/image-header.jpg")] bg-cover bg-center md:bg-cover md:bg-center bg-no-repeat mt-[-100px] text-center`}>
          <h1 className='text-white text-5xl md:text-6xl font-2extrabold uppercase mt-72 md:mt-48'>we are creatives</h1>
          <Image src={arrow} height={128} width={10} className='  md:mt-44 mt-28 md:h-48 h-36 w-10' />
      
    </div>
  )
}

export default Hero
