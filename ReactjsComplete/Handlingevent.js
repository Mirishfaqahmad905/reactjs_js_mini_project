import React, { useState } from 'react'

const Handlingevent = () => {
     const [count,setcount]=useState(0);
       const handleClick=(e)=>{
         setcount(count+1);
       }
        const handlemouseenter=()=>{
            console.log('mouse are moving ');
        }
         const handeleinputchnage=(e)=>{
             console.log(e.target.value);
              
         }
  return (
 <>
 
  <h2>handling event in react are where  {count} </h2>
    <button onClick={handleClick}>Increament</button>
    <button onMouseEnter={handlemouseenter}>mouseenter</button>
    <input type='text' onChange={handeleinputchnage}/>
 </>
  )
}

export default Handlingevent;