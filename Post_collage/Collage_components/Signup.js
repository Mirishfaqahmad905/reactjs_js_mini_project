import React, { useState } from 'react';
import '../css/Collage_signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [postMessage, setPostMessage] = useState('');
  const [checkemail, setCheckEmail] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.firstName === '' || formData.lastName === '') {
      window.alert('Please enter first name and last name');
    } else if (formData.password !== formData.confirmPassword) {
      window.alert('Password and Confirm Password must be the same');
    } else {
      axios
        .get(`http://localhost:5000/check/email/${formData.email}`)
        .then((data) => {
          setCheckEmail(data.data.message);
          if (data.data.message ==='Email already exists') {
            window.alert('Email already exists. Try a different email to sign up ');
            return false;
          } else  if(data.data.message==='Email does not exist'){


            axios
            .post('http://localhost:5000/api/create',  {
               firstName:formData.firstName,
               lastName:formData.lastName,
               email:formData.email,
               password:formData.password,
               confirmPassword:formData.confirmPassword 
            })
            .then((response) => {
              setPostMessage(response.data.message);
              if (response.data.message ==='Data saved successfully in database') {
                window.alert('Your account has been created. Please login now');
             window.location.href='/login';
              return;
              }
              // Reset form data
              setFormData({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
              });
            })
            .catch((err) => {
              console.log('Error occurred: ' + err);
            });

            console.log('No such email found. Account creation success');
             return;
          }
        })
        .catch((err) => {
          console.log('Error occurred during saving data in the database: ' + err);
        });
      console.log(postMessage);
    }
  };
  return (
    <div className='whole-container-signup'>
      <div className='container row'>
        <div className='col col-mid-2'></div>
        <div className='col col-mid-8'>
          <div className='collage_signup-page'>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <label className='collage_input_name_firstName'>
                First Name:
                <input
                  type='text'
                  name='firstName'
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </label>
              <label className='collage_label_last_name'>
                Last Name:
                <input
                  type='text'
                  name='lastName'
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </label>
              <label className='collage_lable_email_name'>
                Email:
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label className='collage_lable_password'>
                Password:
                <input
                  type='password'
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </label>
              <label className='collage_lable_cpassword'>
                Confirm Password:
                <input                   type='password'
                  name='confirmPassword'
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </label>
              <div className='collage_submit_button'>
                <button type='submit' className='btn btn-primary'>
                  Sign Up
                </button>
              </div>
              <div className='collage_login_text'>
                
                 Already have an account?{' '}
                <Link to='/login' className='collage_login_link'>
                  Log in
                </Link>
          
              </div>
            </form>
          </div>
        </div>
        <div className='col col-mid-2'></div>
      </div>
    </div>
  );
};

export default Signup;

