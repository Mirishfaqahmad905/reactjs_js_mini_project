 import React, { useEffect, useState } from 'react'
 
 const Timer = () => {
   const [timer,settimer]=useState();
    const [isStart,setisStart]=useState(false);
         useEffect(()=>{
           let intervalue;
            if(isStart){
              intervalue=setInterval(() => {
                settimer((second)=>second+1);
             }, 1000);
            }
             return ()=>{
               clearInterval(false);
             }
         },[isStart]);
          const setStart=()=>{
            setisStart(true);
          }
 const setPause=()=>{
    
     setisStart(false);
 }
  const setReset=()=>{
     settimer(0);
       setisStart(true);
  }
          return (
   <div>
     <div className='timer'>
       <h2>timer {timer} </h2>
        <button onClick={setPause}>Pause</button>
         <button onClick={setStart}>Start</button>
         <button onClick={setReset}>Reset</button>
     </div>
   </div>
   )
 }
 
 export default Timer