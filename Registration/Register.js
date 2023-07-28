import React, { useState } from 'react';
import axios from 'axios';
import './register.css'


const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const [name2, setName2] = useState('');
  const [email2, setEmail2] = useState('');
  const [password2, setPassword2] = useState('');
  const [error2, setError2] = useState('');

         const onSubmit2=(e)=>{
             console.log(name2,email2,password2);
             e.preventDefault();
              axios.post('http://localhost:2000/api/check',{
                 name2:name2,email2:email2,password2:password2    
              }).then((response)=>{
             setError2(response.data);
              }).catch((err)=>{
                 console.log(err);
              })
         }
          const handleName2=(e)=>{
            setName2(e.target.value);
          }
          const handleEmail2=(e)=>{
            setEmail2(e.target.value);
          }
          const handlePassword2=(e)=>{
            setPassword2(e.target.value);
          }

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError('All fields are required');
      return;
    }

    axios.post('http://localhost:2000/api/register', { name: name, email: email, password: password })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        setError('An error occurred while registering');
        console.error(error);
      });
  }

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  return (
    <>
      {error && <p>{error}</p>}
      <form onSubmit={onSubmit}>
        <input type="text" name="name" onChange={handleName} />
        <input type="email" name="email" onChange={handleEmail} />
        <input type="password" name="password" onChange={handlePassword} />
        <input type="submit" value="Submit" />
   
      </form>













     <h2>{error}</h2>

     <form onSubmit={onSubmit2}>
        <input type="text" name="name" onChange={handleName2} />
        <input type="email" name="email" onChange={handleEmail2} />
        <input type="password" name="password" onChange={handlePassword2} />
        <input type="submit" value="Submit" />
      </form>

    </>
  )
}

export default Register;
