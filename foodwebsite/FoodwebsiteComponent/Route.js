import React from 'react';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
 import Link from './Link';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const MyRoute = () => {
  return (
    <>

<BrowserRouter>
   
      <Link/>
         <Routes>
 <Route path='/' element={<Home/>}></Route>
 <Route path='/about' element={<About/>}></Route>
 <Route path='/contact' element={<Contact/>}></Route>
         </Routes>         
        </BrowserRouter> 
    </>
  );
}

export default MyRoute;
