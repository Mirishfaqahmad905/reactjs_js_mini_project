import React from 'react'

const ConditionRendering = ({logedin}) => {
   if(logedin){
     return <h2> you are loged in </h2>
   }
    else {
       return <h2>you are faild to loged in </h2>
    }
     
  return (
     <>
      
      {logedin ? (<p>you are  failed to loged in </p>) :(<p>hello user </p>)}
     </>
  )
}

export default ConditionRendering