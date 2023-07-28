import React, { useState } from 'react';
import axios from 'axios';



const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
 
    
     






















  const handleSubmit = async (e) => {
     console.log('no data ',name+email);
    e.preventDefault();
    //  const res= await fetch('http://localhost:5000/api/data',{
    //    method:'post',
    //     headers:{
    //        'Content-Type':'application/json'
    //     },
    //      body:JSON.stringify({
    //        name:name,
    //       email:email
    //      }),
        
    //  });
    //  const response=await res.json();
    //   console.log(response);
   
   
    axios.post('http://localhost:5000/api/data', { name, email })
      .then(response => {
        console.log(`Data saved successfully: ${response.data}`);
      })
      .catch(error => {
        console.log('Error saving data:', error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    }
  };

  return (
    <div className='form'>
      <form onSubmit={handleSubmit} method='post' >
        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' name='name' value={name} onChange={handleChange} />

        <label htmlFor='email'>Email:</label>
        <input type='email' id='email' name='email' value={email} onChange={handleChange} />

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Form;
