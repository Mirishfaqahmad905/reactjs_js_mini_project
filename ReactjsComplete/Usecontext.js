import React, { createContext } from 'react'
import Coma from './Coma';
const mycontext=createContext('defaultcontext');
 const Lastname=createContext();
 const Firstname=createContext();
  
const Usecontext = () => {    
  return (
     <>
         <Firstname.Provider value={'mirishfaqahmad'}>
            <Lastname.Provider value={'technical'}>
              <Coma/>
            </Lastname.Provider>
           </Firstname.Provider>  
     
     </>
   
  )
}

export default Usecontext