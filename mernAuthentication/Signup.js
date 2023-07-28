import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';
import Login from './Login';

export const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/users', { name, email, password })
      .then((response) => {
        setData(response.data.message);
        if (data==='User created successfully') {
          window.alert(data);
           console.log(data);
              
        }
 else if(data==="Email already exists"){
   window.alert(data);
    console.log(data);
     return false;

 }
     else if(data==="Please Enter Data")  {

          window.alert('Enter name and email .');
           console.log("Enter name and email ");
        }
         else {
           window.alert('Server error');
         }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}  className='signup-mern-page' >
        <input type="text" name="name" placeholder="Enter your name" value={name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Enter your email" value={email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Enter your password" value={password} onChange={handleChange} />
        <input type="submit" value="Submit" />
      </form>

      {data === 'please enter data first' && <p>Please enter data first.</p>}
    </>
  );
};

export default Signup;
