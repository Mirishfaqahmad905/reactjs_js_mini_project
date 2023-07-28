import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
const Result = () => {
     const [data,setData]=useState([]);
     useEffect(() => {
        fetch('http://localhost:2000/Api/get')
          .then(response => response.json())
          .then(data => setData(data));
          console.log(data)
      }, []);
      const deleteItem = id => {
         let myid=id;
        fetch(`http://localhost:2000/delete/${id}`, {
          method: 'delete',
        }).then(response => {
          // Reload the data from the server
          fetch('http://localhost:2000/Api/get')
            .then(response => response.json())
            .then(data => setData(data));
        });
      };
 const Update=()=>{
 const [data,setData]=useState();
useEffect(() => {
  const fetchData = async () => {
    const response = await fetch(`http://localhost:200/Edit/`, {
      method: 'put',
      body: JSON.stringify({ name: 'Updated name', description: 'Updated description' })
    });
    const data = await response.json();
    setData(data);
    console.log(data);
  };
  fetchData();
}, []);
 }
  return (
<>
 <table>
     <tr>
         <th>id</th>
         <th>name</th>
         <th>email</th>
         <th>password</th>
     </tr>
      <tbody>
        {data.map((item)=>{
             return(<>
               <tr>
                  <th>{item.id}</th>
                 <th>{item.name}</th>
                 <th>{item.email}</th>
                 <th>{item.password}</th>
                 <td>
              <button onClick={() => deleteItem(item.id)}>Delete</button>
            </td>
            <td>

          </td>
          <td>  <Link to={`/Edit/${item.id}`} > <button> Edit</button></Link></td>  
               </tr>
              </>)
        })}
      </tbody>
 </table>

</>
  )
}

/// edit  functional compoenet 

//  const EditUserFrom=(props)=>{
//    const [data,setData]=useEffect();
//    const[name,setname]=useState(props.currentUser.name);
//    const[email,setEmail]=useState(props.currentUser.email);
//    const [passwrod,setpassword]=useState(props.currentUser.password);
//     const handleInputChange=(event)=>{
//        const[name,value]=event.target;
//        if(name==='name'){
//         setname(value);
//        }
//        else if(email==='email'){
//          setEmail(email);
//        }
//        else if(passwrod==='password'){
//         setpassword(passwrod);
//        }
//     };
//      const handleSubmit=(event)=>{
//        event.preventDefault();
//        fetch(`http://localhost/users/${props.currentUser.id}`, {
//         method: 'PUT',
//         body: JSON.stringify({ name, email }),
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       })
//         .then((response) => response.json())
//         .then((data) =>{setData(data)})
//      }
//    return(<>
//     <h2>udpate data here </h2>
     
//  <form onSubmit={''}>
//      <input type={'text'} name="name" value={name}  onChange={handleInputChange} placeholder="enter you name"/>
//       <br/>
//       <input type={'email'} name="name" value={email}  onChange={handleInputChange} placeholder="enter you email"/>
//       <br/>
//       <input type={'password'} name="name"  value={password}  onChange={handleInputChange} placeholder="enter you password"/>
//        <button >Edit</button>
       
//  </form>

//    </>)






export default Result
 


