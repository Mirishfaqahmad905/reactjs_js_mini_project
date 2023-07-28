 import React, { useRef } from 'react'
 
 const UseRef = () => {
   const inputref=useRef(null);
    const timeref=useRef(null);
     const starttimer=()=>{
       timeref.current=setInterval(() => {
        console.log('timer tick');
       }, 1000);
     }
      const stoptimer=()=>{
         clearInterval(timeref.current);
      }
     const  handleclick=()=>{
       inputref.current.focus();
        console.log(inputref);
        inputref.current.style.backgroundColor='yellow';
     }
   return (
     <div>
        <input ref={inputref} type='text'/> 
       <button onClick={handleclick}>chnage</button>
     </div>
   )
 }
 
 export default UseRef