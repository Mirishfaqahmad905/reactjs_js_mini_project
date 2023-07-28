import React, { useState } from 'react'
import  {BrowserRouter, Route, Routes,Link} from 'react-router-dom';
import Create from './Create';
import Login from './Login';
import Logout from './Logout';
import Welcom from './Welcom';
import Linking from './Linking';
import { set } from 'mongoose';
const MainRoute = () => {

  return (
     
    <>
     <BrowserRouter>
        <Linking/>
       <Routes>
         
         <Route path='/create' element={<Create />} />
         <Route path='/login' element={<Login/>} />
         <Route path='/logout' element={<Logout/>} />
         <Route path='/welcom'  element={ <Welcom />  } ></Route>
       </Routes>
      </BrowserRouter>
     
    </>
  )
}
export default MainRoute