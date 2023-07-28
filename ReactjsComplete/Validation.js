import React, { useState } from 'react'

const Validation = () => {
     const [name,setname]=useState();
     const [email,setemail]=useState();
    const handlelogin=(e)=>{
         e.preventDefault();
    }
  return (
     <>
      <h2> {email}</h2>
       <h2>{name}</h2>
      <form onSubmit={handlelogin}>
         <input type='text' placeholder='username' value={name}  onChange={(e)=>{setname(e.target.value)}}/>
         <input type='email' placeholder='email' value={email} onChange={(e)=>{setemail(e.target.value)}}/>
         <input type='submit' value={'submit'}/> 
      </form>
     </>
  )
}

export default Validation;