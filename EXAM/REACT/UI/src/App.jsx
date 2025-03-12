import React from 'react'
import {createBrowserRouter,createRoutesFromElements,RouterProvider, Route,} from "react-router-dom";
import Home from './Pages/Home';
import Additem from './Pages/Additem';
import Viewitem from './Pages/Viewitem';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<Home />} />
      <Route path='/additem' element={<Additem />} />
      <Route path='/viewitem' element={<Viewitem />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
      }

export default App
