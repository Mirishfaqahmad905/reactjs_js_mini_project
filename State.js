import React, { useState } from 'react'

const State = () => {
     const [count,setcount]=useState(0);
       function Increament(){
          setcount(count+1);
       }
      
  return (
    <div>
         <p>{count}</p>
          <button onClick={Increament}>Increament</button>
    </div>
  )
}

export default State