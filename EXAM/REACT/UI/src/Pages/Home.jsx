import React from 'react'
import Navbar from '../Components/Navbar'

const Home = () => {
  return (
   <>
   <div className='bg-black h-screen'>
    <Navbar />
    <div>
      <h1 className='text-white text-3xl font-bold text-center pt-[400px]'>Welcome To</h1>
      <h1 className='text-white text-5xl font-bold text-center p-5'> Inventory Management System </h1>
    </div>
   </div>
   </>
  )
}

export default Home
