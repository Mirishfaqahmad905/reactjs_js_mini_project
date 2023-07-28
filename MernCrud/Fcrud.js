import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './crud.css';
const Crud = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    _id: '' // Add _id to formData state
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
         // restfull apis is this one 
        const response = await axios.get('http://localhost:2000/getdata');
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let response;
      if (formData._id) {
        // If _id exists in formData, update existing record
        response = await axios.put(`http://localhost:2000/UpdateData/${formData._id}`, formData);
      } else {
        response = await axios.post('http://localhost:2000/api/data', formData);
      //  if(response.data==='please enter data first'){
      //    window.alert('please enter data first');
      //  }
        
      }

      console.log(response.data);

      if (response.data.message === 'Account Created' ) {
        window.alert('Account created ');
        setFormData({
          name: '',
          email: '',
          password: '',
          _id: ''
        }); 
      }
       else if (response.data.message === 'Account Updated'){
          window.alert('Acount Updated Successfully');
          setFormData({
            name: '',
            email: '',
            password: '',
            _id: ''
          });
       }
      else if(response.data==='please enter data first') {
        window.alert('Enter Data first input field are required');
      }
       else {
         window.alert('failed to updated the record ');
       }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:2000/DeleteData/${id}`);
      setData(data.filter(item => item._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (item) => {
    setFormData({
      name: item.name,
      email: item.email,
      password: item.password,
      _id: item._id
    });
  };
  

  return (
    <div className='crud-mern'>
      <form onSubmit={handleSubmit} className='crud-mern-form'>
        <input type='text' name='name' value={formData.name} onChange={handleChange} />
        <input type='email' name='email' value={formData.email} onChange={handleChange} />
        <input type='password' name='password' value={formData.password} onChange={handleChange} />
        <button type='submit'>{formData._id ? 'Update' : 'Create'}</button>
      </form>
      <table className='mern-table'>
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
                <button onClick
={() => handleDelete(item._id)}>Delete</button>
              </td>
              <td>
                <button onClick={() => handleEdit(item)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Crud;
