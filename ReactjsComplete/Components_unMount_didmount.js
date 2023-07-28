import React, { useEffect, useState } from 'react'

const Components_unMount_didmount = () => {
     const [count,setcount]=useState(0);
      useEffect(()=>{
         console.log('componet mounted');
          return ()=>{
             console.log('componetnt unmounted');
          }
      },[]);
       useEffect(()=>{
         console.log('component are updated');
         console.log('count are updated',count);
       });
        const increament=()=>{
             setcount(count+1)
        }
  return (
   <>
     <p>{count}</p>
      <button onClick={increament}>increament</button>
   </>
  )
}

export default Components_unMount_didmount