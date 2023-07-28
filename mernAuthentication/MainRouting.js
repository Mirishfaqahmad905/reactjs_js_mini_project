import React from 'react'
import Login from './Login'
import Signup from './Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Routing from './Routing'

const MainRouting = () => {
  return (
    <>

      <BrowserRouter>
   
    <Routing/>
          <Routes>
  <Route path='/Login' element={<Login/>}></Route>
  <Route path='/Signup' element={<Signup/>}></Route>
          </Routes>         
         </BrowserRouter> 
    </>
  )
}

export default MainRouting;