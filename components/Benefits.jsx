"use client"

import React from 'react'
import Image from 'next/image'

const Benefits = () => {
  return (
      <div id="benefits">
          <div className='flex flex-col-reverse md:flex-row'>
              <div className="flex flex-col md:text-left h-full md:w-1/2 md:h-[100vh] items-center justify-center md:p-20 md:items-start p-10 text-center lg:pl-60 text-dark-greyish-blue my-10 md:my-auto">
                  <h1 className='text-5xl lg:text-7xl font-2extrabold mb-10'>Transform your brand</h1>
                  <p className='lg:w-2/3 text-xl mb-10'>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you</p>
                  <button className='font-2extrabold text-2xl  hover:border-b-4 hover:border-yellow-400 transition-all ease-in-out duration-100'>LEARN MORE</button>
              </div>
              
             <div className="md:w-1/2 h-[50vh] lg:h-[100vh] bg-[url('../public/mobile/image-transform.jpg')] md:bg-[url('../public/desktop/image-transform.jpg')] bg-center bg-cover bg-no-repeat"/> 
          </div>
          <div className='flex flex-col md:flex-row h-full md:h-[100vh]'>
              
              <div className="md:w-1/2 h-[50vh] md:h-auto bg-[url('../public/mobile/image-stand-out.jpg')] md:bg-[url('../public/desktop/image-stand-out.jpg')] bg-cover bg-center bg-no-repeat" />
              

              <div className="flex flex-col md:text-left h-full md:w-1/2 items-center md:justify-center md:p-20 md:items-start p-10 text-center  text-dark-greyish-blue my-10 md:my-auto">
                  <h1 className='text-5xl lg:text-7xl font-2extrabold mb-10'>Stand out to the right audience</h1>
                  <p className='w-2/3 md:w-full text-xl mb-10'>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital palces.</p>
                  <button className='font-2extrabold text-2xl hover:border-b-4 hover:border-red-400 transition-all ease-in-out duration-100'>LEARN MORE</button>
              </div>
          </div>
           
           
      
      </div>
      
  )
}

export default Benefits
