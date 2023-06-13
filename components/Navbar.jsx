"use client"

import React, {useState} from 'react'
import Image from 'next/image'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {

  const [dropdown, setDropdown] = useState(false)
  
  const menuClick = () => {
    setDropdown(!dropdown)

    if (dropdown == false) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }

  return (
    <>
        <nav className={`flex md:justify-between sticky top-0 left-0 z-50  w-full lg:flex-row justify-between pt-2 md:pt-5 transition-all duration-500 text-center backdrop-blur-sm md:px-10 lg:px-10 xl:px-36 md:sticky bg-transparent ${
            dropdown ? "undefined" : "bg-transparent"
          }`}>
        <a href="/">
          <Image src="/logo.svg" alt="logo" width={48} height={14} className='ml-10 pt-2 md:ml-0 md:pt-0 h-10 w-32' />
        </a>
        

        <div
            className="text-4xl absolute right-4 top-4 md:right-20 md:top-7 cursor-pointer lg:hidden"
            onClick={() => menuClick()}
        >
          
            {dropdown ? (
              <AiOutlineClose className="text-white" />
            ) : (
              <AiOutlineMenu className="text-white" />
            )}
        </div>
        
        

            
        <ul className={` lg:flex lg:items-center pt-5 md:pt-0 lg:pb-0 pb-12 md:pb-10 md:flex md:flex-col lg:flex-row items-center left-0 absolute lg:static lg:z-auto z-[-1] w-[100%]  lg:w-fit md:px-0 px-5  transition-all duration-1000 ease-in-out bg-white lg:gap-10 lg:bg-transparent  text-xl gap-4 md:text-white ${
              dropdown ? "top-[80px]" : "top-[-490px]"
            }`}>
          <li className='hover:cursor-pointer' >
            <a href="#benefits">
              About
            </a>            
          </li>
          <li className='hover:cursor-pointer'>
            <a href="#services">Services</a>
            
          </li>
          <li className='hover:cursor-pointer'>
            <a href="#testimonials">Testimonials</a>
            
          </li>
          <li className='md:ml-5'>
            <button className='rounded-full text-xl hover:bg-dark-blue hover:bg-opacity-75  hover:cursor-pointer transition-all p-3 w-28 text-center'>
              <a href="/contact-us">
                Contact Us
              </a>
              
            </button>
          </li>                
        </ul>
            
        
      </nav>
    </>
    
  )
}

export default Navbar
