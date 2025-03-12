import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
   <div className="w-[100%] h-16 pt-5  bg-gray-200  text-xl">
    <div className="">
        <Link to='/' className='pl-[1600px] '>Home</Link>
        <Link to='/additem' className='pl-7'> Add Item</Link>
        <Link to='/viewitem' className='pl-7'>View Item</Link>
    </div>
   </div>
   </>
  )
}

export default Navbar
