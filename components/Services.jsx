import React from 'react'

const Services = () => {
  return (
    <div className='flex flex-wrap  md:h-[60vh]' id="services">
          <div className="flex flex-col h-[80vh] md:h-auto flex-1 bg-[url('../public/mobile/image-graphic-design.jpg')] md:bg-[url('../public/desktop/image-graphic-design.jpg')] bg-cover bg-center bg-no-repeat justify-end text-center pb-24 md:pb-24 items-center text-desaturated-cyan">
              <h1 className='text-5xl lg:text-7xl font-2extrabold mb-10'>Graphic Design</h1>
              <p className='w-4/5 text-xl font-semibold'>
                 Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential client' attention 
              </p>
              
          </div>
          
          <div className="flex flex-col h-[80vh] md:h-auto flex-1 bg-[url('../public/mobile/image-photography.jpg')] md:bg-[url('../public/desktop/image-photography.jpg')] bg-cover bg-center bg-no-repeat justify-end text-center md:pb-24 pb-24 items-center text-dark-blue">
              <h1 className='text-5xl lg:text-7xl font-2extrabold mb-10'>Photography</h1>
              <p className='w-4/5 text-xl font-semibold'>
                 Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
              </p>
              
          </div>
          
    </div>
  )
}

export default Services
