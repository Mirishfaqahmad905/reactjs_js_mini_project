 import React from 'react'
 
 const Error_handling = () => {
     const Error_handling=(e)=>{
      try {
         throw new Error('somthing wentwrong ');
      } catch (error) {
         console.error('error',error);
      }
     }
  
   return (
 <>
  <button onClick={Error_handling}>click</button>
 
 </>
   )
 }

 export default Error_handling;