import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Mongo2 = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:4000/get/data');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const postData = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:4000/register', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email
      }),
    });
    
    const response = await res.json();
    console.log(response);
  }

  const nameHandler = (e) => {
    const name = e.target.value;
    setName(name);
  }

  const emailHandler = (e) => {
    const email = e.target.value;
    setEmail(email);
  }

  const deleteData = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:4000/delete/data/${id}`);
      console.log(response.data);
      setData(data.filter((item) => item._id !== id)); // remove the deleted item from the data array
    } catch (error) {
      console.error(error+"during deletingdata");
    }
  };
  return (
    <>
      <form onSubmit={postData}>
        <label>Name</label>
        <input type='text' onChange={nameHandler}/>
        Email 
        <input type='email' onChange={emailHandler} />
        <input type='submit' />
      </form>
      <table border={1} style={{background:'green',textAlign:'center',marginTop:100,marginLeft:100}}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td><button onClick={() => deleteData(item._id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Mongo2;
