import React, { useState } from 'react'

const Props = (object) => {
     const [number,setnumber]=useState(object);
  return (
 <>
 
  <p>
     {object}
  </p>
 </>
  )
}

export default Props