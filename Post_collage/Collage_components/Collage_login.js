import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import axios from 'axios';
import '../css/login.css';
const College_login = () => {
  // const [user,et]
   const  authentication='';
  const [data, setData] = useState({
    email: '',
    password: ''
  });
  const [loginMessage, setLoginMessage] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/login/form', {
      email: data.email,
      password: data.password 
    }).then((response) => {
      setLoginMessage(response.data.message);
      if (response.data.message ==='user is authenticated successfully') {
        window.alert('you are logged in ');
        window.location.href='/';
      } else if (response.data.message === 'invalid password or email') {
        window.alert('please try to create an account');
      }
    }).catch((err) => {
      console.log('error occurred during fetching data from database' + err);
    });

    setData({
      email: '',
      password: ''
    });
  }

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData({...data, [name]: value});
  }

  return (
    <>

      <div className='login_your_credential_here'>
        <div className='container'>
          <div className='row'>
            <div className='col col-md-4 left-images'>
              <img src='../Images/png2.png' alt='Logo' />
            </div>
            <div className='col col-md-8'>
              <form className='inputform custom' onSubmit={submitHandler}>
                <input type='email' name='email' className='form-control' value={data.email} placeholder='Enter Your Email' onChange={changeHandler} />
                <input type='password' name='password' className='form-control' value={data.password} placeholder='Enter Your Password' onChange={changeHandler} />
                <button className='bg bg-success btn-submit' type='submit'>Submit</button>                
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default College_login;
