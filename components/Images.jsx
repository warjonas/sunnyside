import React from 'react'

const Images = () => {
  return (
      <div className='flex flex-wrap h-full md:h-auto'>
          <div className="bg-[url('../public/mobile/image-gallery-milkbottles.jpg')] md:bg-[url('../public/desktop/image-gallery-milkbottles.jpg')]  bg-cover bg-center bg-no-repeat  w-1/2 md:w-1/4 h-[20vh] md:h-[50vh]" />
          
          <div className="bg-[url('../public/mobile/image-gallery-orange.jpg')] md:bg-[url('../public/desktop/image-gallery-orange.jpg')] h-[20vh] bg-cover bg-center bg-no-repeat w-1/2 md:w-1/4 md:h-[50vh]"/>

          <div className="bg-[url('../public/mobile/image-gallery-cone.jpg')] md:bg-[url('../public/desktop/image-gallery-cone.jpg')]  bg-cover bg-no-repeat bg-center  w-1/2 md:w-1/4 h-[20vh] md:h-[50vh]"/>
          
          <div className="bg-[url('../public/mobile/image-gallery-sugar-cubes.jpg')] md:bg-[url('../public/desktop/image-gallery-sugarcubes.jpg')]  bg-cover bg-center bg-no-repeat w-1/2 md:w-1/4 h-[20vh] md:h-[50vh]"/>

          
      
    </div>
  )
}

export default Images
