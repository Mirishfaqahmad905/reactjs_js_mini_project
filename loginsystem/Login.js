import React, { useState } from 'react';
import './LOGINSYSTEMCSS/Login.css';
import axios from 'axios';
import Welcom from './Welcom';

const Login = ({ setuser }) => {
  const [logindata, setlogindata] = useState({ email: '', password: '' });

  const SubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:2000/login', {
        email: logindata.email,
        password: logindata.password,
      });
      if (data.message === 'user is authenticated successfully') {
      //   window.alert('successfully login');
       localStorage.setItem('email',logindata.email);
        window.location.href='./welcom';
      } else {
        window.alert('invalid emaidl or password here ');
      }
    } catch (err) {
      console.log('error ' + err);
    }
    setlogindata({
      email: '',
      password: '',
    });
  };
  const ChangeHandler = (e) => {
    const { name, value } = e.target;
    setlogindata({ ...logindata, [name]: value });
  };
  return (
    <div className="login-system-account">
      <div className="login-system-center">
        <span>
          <img src="./Images/png2.png" />
        </span>
      </div>
      <div className="login-form-form">
        <form onSubmit={SubmitHandler}>
          <div className="login-email">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={logindata.email}
              onChange={ChangeHandler}
            />
          </div>
          <div className="login-password">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={logindata.password}
              onChange={ChangeHandler}
            />
          </div>
          <div className="login-submit">
            <input type="submit" />
          </div>
        </form>
      </div>
      {logindata.email && <Welcom user={logindata.email}  />}
    </div>
  );
};
export default Login;
