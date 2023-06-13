'use client';

import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Reveal from '../utils/Reveal';


const Form = () => {
  const form = useRef();
  const [isSending, setisSending] = useState(false)
  
  
  

  const sendEmail = (e) => {

    setisSending(true)
      
    e.preventDefault();
    setisSending(true)

        emailjs.sendForm(process.env.SERVICEID, process.env.TEMPLATEID, form.current, 'Z94O-OvH1KKQb4cym')
            .then((result) => {
              setisSending(false);
              e.target.reset()
              alert('Sent!')
              
            }, (err) => {
              setisSending(false);
              alert("Unable to send email. Please use one of the alternative options instead.")
        })
  }


  return (
    <div>
      {
        isSending ? (
          <Reveal>
            <div className='flex flex-col items-center justify-center h-[100%] mx-auto'>
              <svg id="processing" className='animate-spin  h-[20%] w-[20%] ml-3 mr-5 rounded-[50%] border-l-primary border-4' viewBox='0 0 24 24'>
              
              </svg>          
            </div>
          </Reveal>
          
          
        

        ): (
            <form ref={form} onSubmit={sendEmail} className='flex flex-col'>
              
                <div className='flex flex-col gap-2 transition-all duration-500 ease-in'>
                    <div className='flex flex-col gap-2'>
                            <input type="text" placeholder='First Name' name='first_name' className='bg-transparent border-b p-2 pl-1 focus:border-b-primary active:outline-none focus:outline-none transition-colors duration-300 ease-in-out' autoFocus autoComplete='off' required/>
                            <input type="text" placeholder='Last Name' name='last_name' className='bg-transparent border-b p-2 pl-1 focus:border-b-primary  focus:outline-none transition-colors duration-300 ease-in-out' autoFocus autoComplete='off' />
                    </div>

                    <div className='flex flex-col gap-2 mb-2'>
                            <input type="email" placeholder='Email' name='email' className='bg-transparent border-b p-2 pl-1 focus:outline-none focus:border-b-primary transition-colors duration-300 ease-in-out' autoComplete='off' required />
                            <input type="text" placeholder='Contact No.' name='contact_no' className='bg-transparent border-b p-2 pl-1 focus:border-b-primary focus:outline-none transition-colors duration-300 ease-in-out' autoComplete='off' required />
                    </div>

                  <div className='flex flex-row'>
                      <p className='text-md w-[40%] mr-5 text-[17px]'>Which best describes your business?</p>
                      <div className='flex flex-col gap-2 items-center justify-center'>
                        <div>
                            <input type="radio" id="service" name="business_type" value="Service" className='mr-2' required />
                          <label htmlFor="service" className='mr-2'>Provide a Service</label>
                        </div>
                        <div>
                            <input type="radio" id="product" name="business_type" value="Product" className='mr-2  ' required />
                          <label htmlFor="product" className='mr-2'>Selling a product</label> 
                        </div>        
                    </div>
                  </div>

                  <div className='flex flex-col gap-2 mt-2'>
                      
                      <textarea cols={3} rows={5} id="message" placeholder='Project Description' name='message' className='focus:border-b-primary bg-transparent border-b p-2 pl-0 text-lg focus:outline-none transition-colors duration-300 ease-in-out' required />
                  </div>
                </div>

                <button className='flex font-bold text-lg items-center justify-center w-[80%] mt-5 h-10 bg-primary mx-auto shadow-md rounded-md hover:bg-transparent border-primary hover:border transition-colors duration-300 ease-in  bg-dark-blue text-white' > 
                  
                  Submit
                </button>
                    
                                            
              </form>
        )
      }
    
      
      
    </div>
  )
}

export default Form
