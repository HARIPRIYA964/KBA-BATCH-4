import React from 'react'
import kbalogo from "../Images/kbalogo.png"

const Navbar = () => {
  return (
    <>
   
   <div className='bg-purple-100 text-purple-950 grid grid-cols-1 md:grid-cols-2 p-3 shadow-md'>
        <div className='flex items-center'>

            <a href="#" >
                <img className='m-1p-2 size-12' src={kbalogo} alt="logo" />
            </a>
            
        </div>
        <div className='flex justify-center md:justify-end items-center mt-2 md:mt-0 space-x-4 md:space-x-7'>
            <a href="#" className='ml-16'>Home</a> 
            <a href="#" className='ml-10'>Courses</a>
            <a href="#" className='ml-10'>Contact Us</a>
            <a href="#" className='ml-10'>Add Course</a>
        </div>
    </div>
    </>
  )
}

export default Navbar
