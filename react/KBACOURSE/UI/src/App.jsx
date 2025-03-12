import React from 'react'

import Login from './assets/Pages/Login'
import Signup from './assets/Pages/Signup'
import Dashboard from './assets/Pages/Dashboard'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AddCourse from './assets/Pages/AddCourse'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigate to="/signup" />} />
      <Route path="/login" element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path= '/add-course' element={<AddCourse />} />
      
    </Routes>
    </BrowserRouter>

  )
}

export default App