import React, { useState } from 'react';
import './LOGINSYSTEMCSS/Create.css';
import axios from 'axios';
import Login from './Login';


const Create = () => {
  const [formdata, setformdata] = useState({ name: '', email: '', password: '', cpassword: '' });

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
       if(!formdata.name || !formdata.email || !formdata.password){
         return window.alert('please enter data first');
      
        }
        else if(formdata.password!==formdata.cpassword  ){
           window.alert('please make sure that both password and cpassword are same');
        }
         else if(formdata.password.length <=5 ){
           window.alert('please make sure that  password must be greater than five digit ');
         }
         else {
      const { data } = await axios.post(`http://localhost:2000/checkemail/${formdata.email}`);
      if (data.message === 'Email exists in the database') {
        console.log('email already exists in database');
      } else if (data.message === 'Email does not exist in the database') {
        await axios.post('http://localhost:2000/post', {
          name: formdata.name,
          email: formdata.email,
          password: formdata.password,
          cpassword: formdata.cpassword,
        }).then((data)=>{
           if(data.message==='password not matching'){
             window.alert('password and  confirm password is not same ');
           }
        })
        const createSuccess=window.confirm('successfully created account');
        if(createSuccess==true){
         window.location.href='./login';
        }
    } else {
        window.alert('your account is created already ');
    }
    }
    } catch (err) {
      console.log('error in react js ', err);
    }
    setformdata({
      name: '',
      email: '',
      password: '',
      cpassword: '',
    });
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };

  return (
    <div className='create-account-react'>
      <div className='create-account-header'>
        <span> Create Account </span>
      </div>
      <div className='create-account-form'>
        <form className='myaccountform' onSubmit={submitHandler}>
          <div className='name-field'>
            <label>Enter Your Name</label>
            <input type='text' name='name' value={formdata.name} onChange={changeHandler} />
          </div>
          <div className='email-field'>
            <label>Enter Your Email</label>
            <input type='email' name='email' value={formdata.email} onChange={changeHandler} />
          </div>
          <div className='password-field'>
            <label>Enter Your Password</label>
            <input type='password' name='password' value={formdata.password} onChange={changeHandler} />
          </div>
          <div className='cpassword-field'>
            <label>Confirm Your Password</label>
            <input type='password' name='cpassword' value={formdata.cpassword} onChange={changeHandler} />
          </div>
          <input type='submit' value='Create Account' />
        </form>
      </div>
    </div>
  );
};

export default Create;
