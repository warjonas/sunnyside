import Image from 'next/image'
import React from 'react'

const Card = ({image, body, name, title}) => {
  return (
      <div className='flex flex-col items-center justify-center gap-1 w-full md:w-2/3 mb-20 md:mb-0'>
          <Image src={image} height={1080} width={1920} className='md:h-16 md:w-16 h-20 w-20 rounded-full mb-10' />
          <p className='md:w-full w-full mb-10 text-center text-lg text-very-dark-grayish-blue font-semibold'>{body}</p>
          <h1 className='font-bold text-xl text-desaturated-blue'>{name}</h1>
          <p className='font-medium text-xs text-dark-greyish-blue'>{title}</p>

      
    </div>
  )
}

export default Card
