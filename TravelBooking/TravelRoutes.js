import React from 'react'
import { BrowserRouter, Route ,Routes} from 'react-router-dom'
import Travel from './Travel'
import About from './About'
import Guid from './Guid'
import Facts from './Facts'
import Destination from './Destination'
import Header from './Header'

const TravelRoutes = () => {
  return (
   <>
    <BrowserRouter>
    <Header/>
      <Routes>
         <Route path='/' element={<Travel/>}></Route>
          <Route path='/about' element={<About/>}></Route>
           <Route path='/guid' element={<Guid/>}></Route>
            <Route path='/Destination' element={<Destination/>}></Route>
            <Route path='/facts' element={<Facts/>}></Route>
      </Routes>
     </BrowserRouter>
   </>
  )
}

export default TravelRoutes