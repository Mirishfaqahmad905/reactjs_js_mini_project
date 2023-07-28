import React, { useState } from 'react';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Collage_Home from './Collage_Home';
import Collage_Signup from './Signup';
import Collage_about from './Collage_about';
import Collage_contact from './Collage_contact';
import Collage_privacy from './Collage_privacy';
import Collage_header from './Collage_header';
import Collage_footer from './Collage_footer';
import Collage_admition from './Collage_admition';
import Collage_programe from './Collage_programe';
import Collage_gallery from './Collage_gallery';
import Collage_event from './Collage_event';
import Collage_video from './Collage_video';
import Collage_article from './Collage_article';
import Collage_images from './Collage_images';
import Collage_Bs from './Collage_Bs';
import Collage_firstyear from './Collage_firstyear';
import Collage_login from './Collage_login';
import Collage_admition_detail from './Collage_admition_detail';


const Collage_Route = () => {
   const [mydata,setmydata]=useState();

  return (
    <>
      <BrowserRouter>
        <Collage_header />
        <Routes>
          <Route  path='/' element={
             <Collage_Home/>
          } />
            
          <Route path='/login' element={<Collage_login  /> } /> 
          <Route path='/Signup' element={<Collage_Signup />} />
          <Route path='/about' element={<Collage_about />} />
          <Route path='/gallery' element={<Collage_gallery />} />
          <Route path='/events' element={<Collage_event />} />
          <Route path='/Collage_contact' element={<Collage_contact />} />
          <Route path='/admition' element={<Collage_admition />} />
          <Route path='/programe' element={<Collage_programe />} />
          <Route path='/Collage_admition' element={<Collage_privacy />} />
          <Route path='/video' element={<Collage_video />} />
          <Route path='/images' element={<Collage_images />} />
          <Route path='/articles' element={<Collage_article />} />
          <Route path='/Bs' element={<Collage_Bs />} />
          <Route path='/collage_firstyear' element={<Collage_firstyear />} />
          <Route path='/articles' element={<Collage_article />} />
           <Route path='/requirement' element={< Collage_admition_detail/>}/>
           <Route path='/Collage_bs' element={<Collage_Bs/>}/>
        </Routes>
        <Collage_footer />
      </BrowserRouter>

      {console.log(mydata)}
    </>
  );
}


export default Collage_Route;
