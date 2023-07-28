import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Login.css';
const Login = () => {

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/GetData');
        const data = await response.json();
        setData(data);
      } catch (err) {
        console.log('Error during fetching data from database');
      }
    };
    fetchData();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:5000/api/users/login?email=${email}&password=${password}`);

      console.log(response.data.message);
      const autherizdata = response.data.message;

      if (autherizdata === 'Invalid email or password') {
        window.alert('Invalid user. Create an account first and then try again.');
      } else if (autherizdata === 'User authenticated successfully') {
        window.alert('Congratulations! You are registered in our database.');
      }
      // Do something to indicate that the user is authenticated, e.g. redirect to another page or show a success message
    } catch (error) {
      console.error(error);
      // Do something to indicate that the authentication failed, e.g. show an error message
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/DeleteData/${id}`);
      setData(data.filter(item => item._id !== id));
      // Update the state to remove the deleted item
    } catch (error) {
      console.error(error);
    }
  }; 

  const handleUpdate = async (id) => {
    try {
      const result = await axios.put(`http://localhost:5000/UpdateData/${id}`, {
        email: email,
        password: password
      });
       setEmail('');
       setPassword('')
      console.log(result.data.message);
      // Do something to indicate that the update was successful, e.g. show a success message
    } catch (error) {
      console.error(error);
      // Do something to indicate that the update failed, e.g. show an error message
    }
  };
  
   // 
 

  return (
    <div className='Login-mern'>
      <form onSubmit={handleLogin} >
        <input type="email" name="email" value={email} onChange={handleEmailChange} />
        <input type="password" name="password" value={password} onChange={handlePasswordChange} />
        <input type="submit" value="Submit" />
      </form>
      <div className='Login-table-data'>
        <table border='1'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>
                  <button onClick={() => handleDelete(item._id)}>Delete</button>
                </td>
                <td>
                  <button onClick={() =>  handleUpdate(item._id)}>Delete</button>
                </td>

            
              </tr>
            ))}
          </tbody>
        </table>
         
      </div>
    </div>
  );
};

export default Login;
