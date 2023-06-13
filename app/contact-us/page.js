import React from 'react'
import Form from '@/components/Form'
import mail from "@/public/email.png"
import phone from "@/public/mobile.png"
import Image from 'next/image'

export const metadata = {
    title: 'Sunnyside - Contact Us'
}

const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 2],
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
}

const page = () => {
  return (
    <div className='bg-dark-blue -mt-[100px] py-[100px]'>          
          <div className='w-[85%] lg:w-2/3  mx-auto p-8 bg-white bg-opacity-70 my-10 rounded-lg shadow-md text-center transition-transform duration-300 ease-in text-dark-blue'>
              
              <h1 className='text-3xl md:text-6xl font-bold text-primary mb-5 md:mb-10 outline-white'> Contact Us</h1>

              

              <div className='flex flex-col md:flex-row'>
                <div className='md:flex flex-col md:items-center md:justify-center mb-10 md:mb-none md:px-10 md: text-center md:w-[55%]'>
                    <h1 className='text-xl md:text-4xl font-bold mb-5'>
                            Get in touch with our expert team to bring your web development ideas to life.
                    </h1>
                    <div className='flex flex-col md:mt-10 gap-3 w-[80%] md:w-auto items-center mx-auto md:mx-0'>
                        <div className="flex flex-row bg-primary p-3 items-center justify-start  shadow-md rounded-md border-primary hover:border hover:bg-transparent transition-color duration-300 ease-in-out cursor-pointer font-bold  bg-dark-blue text-white">                    
                            <Image src={mail} alt="email" className='w-10 h-10 mr-2' />                                
                            <a href="mailto:contact-us@ss.com" className="p-text">contact-us@ss.com</a>
                        </div>
                        <div className="flex flex-row bg-dark-blue text-white p-3 items-center justify-start shadow-md rounded-md border-primary hover:border hover:bg-transparent transition-color duration-300 ease-in-out cursor-pointer font-bold">
                            <Image src={phone} alt="phone" className='w-10 h-10' />
                            <a href="tel:067 068 4843" className="p-text">067 068 4843</a>
                        </div>
                    </div>
                  </div>

                  <div className='md:hidden'>
                      <h2 className='mb-10'>OR</h2>
                      <p className='font-bold mb-5'>Fill out the form</p>
                      
                  </div>

                  

                  <div className='md:w-[45%]'>
                      <Form />
                  </div>
                  
              </div>            
          </div>          
      </div>
  )
}

export default page
