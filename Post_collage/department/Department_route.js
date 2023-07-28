import React from 'react';
import { BrowserRouter, Route,Routes} from  'react-router-dom';
import  HPE from './Department_hpe';
import Maths from './department_maths';
import physic from './Department_physics';
import Collage_programe from '../Collage_components/Collage_programe';

const Department_route = () => {
  return (
   <>
     <BrowserRouter>
     <Collage_programe/>
       <Routes>
         {/* <Route path='/department/Department_maths.js' element={<physic/>}></Route> */}
         <Route path='/Department_physics.js' element={<Maths/>}></Route>
         <Route path='/Department_hpe.js' element={<HPE/>}></Route>
         <Route path='/Department_islamyat.js' element={Math}></Route>
       </Routes>
      </BrowserRouter>
   
   </>
  )
}

export default Department_route