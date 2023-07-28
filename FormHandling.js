import React, { useState } from 'react'

const FormHandling = () => {
     const [name,setname]=useState('');
      const [showname,setshowname]=useState();
       
     const SubmitForm=(e)=>{
         e.preventDefault();
          setshowname(name);
     }
       const HandlerName=(e)=>{
          setname(e.target.value);
       }
        console.log(name);
  return (
 <>
   <h1>Form Handling in react js  {showname}</h1>
     <form onSubmit={SubmitForm}>
         <input type={'text'} name={'name'} onChange={HandlerName}/>
          <input type={'submit'}   />
           
     </form>
 </>
  )
}

export default FormHandling