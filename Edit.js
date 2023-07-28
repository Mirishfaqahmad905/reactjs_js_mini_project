import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const initialState = {
  name: '',
  email: '',
  password: ''
};

const Edit = () => {
  const [state, setState] = useState(initialState);
  const { name, email, password } = state;
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:2000/api/users/${id}`)
      .then((res) => {
        setState(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:2000/api/users/${id}`, state)
      .then(() => {
        // Navigate to the list of users
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" value={name || ''} onChange={handleInputChange} placeholder="Your Name" />
          <label>Email</label>
          <input type="email" name="email" value={email || ''} onChange={handleInputChange} placeholder="Your Email" />
          <label>Password</label>
          <input type="password" name="password" value={password || ''} onChange={handleInputChange} placeholder="Your Password" />
          <input type="submit" value="Save" />
        </form>
      </div>
    </>
  );
};

export default Edit;




// import axios from 'axios';
// import React, { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom';

// const initialState = {
//   name: "",
//   email: "",
//   password: ""
// };

// const Edit = () => {
//   const [state, setState] = useState(initialState);
//   const { name, email, password } = state;
//    var {id}=useParams();

//   // Fetch the data to be edited from the server or API
//   useEffect(() => {
//     axios.get(`http://localhost:2000/api/users/${id}`)
//       .then((res) => {
//         setState(res.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, [id]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Submit the updated data to the server or API
    
//   }

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setState({ ...state, [name]: value });
//   }

//   return (
//     <>
//       <div>
//         <form onSubmit={handleSubmit}>
//           <label>Name</label>
//           <input type="text" name="name" value={name || ""} onChange={handleInputChange} placeholder="Your Name" />
//           <label>Email</label>
//           <input type="email" name="email" value={email || ""} onChange={handleInputChange} placeholder="Your Email" />
//           <label>Password</label>
//           <input type="password" name="password" value={password || ""}  onChange={handleInputChange} placeholder="Your Password" />
//           <input type="submit" value="Save" />
//         </form>
//       </div>
//     </>
//   )
// }

// export default Edit



// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';


// const Edit = (props) => {
//   const id=useParams();
//   const [name, setName] = useState(props.name);
//   const [email, setEmail] = useState(props.email);
//   const [password, setpassword] = useState(props.password);
     

//  const Submit=(e)=>{
//    e.preventDefault();

//    fetch(`http://localhost:2000/users/${props.id}`, {
//     method: 'PUT',
//     body: JSON.stringify({ name, email,password }),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       props.updateUser(props.id, name, email,password);
//     });




//  }



//  const handler=(event)=>{
//   const { name, value } = event.target;
//    if(name==='name')
//     {
//        setName(value);
//     }
//      else if(email=='email'){
//       setEmail(email);
//      }
//       else if(password=='password')
//       {
//          setpassword(value);
//       }
    
//  }


//   return (
// <>

// <h2 style={{text
// :'center'}} >Edite data </h2>
//  <form onSubmit={Submit} >

//  <input type={'text'} name="name" value={name} onChange={handler} placeholder='enter your name here '/>
//  <input type={'email'} name="email" value={email} onChange={handler} placeholder='enter your email here'/>
//  <input type={'password'} name="password" value={password} onChange={handler} placeholder='Enter Password'/>
//  <input type={'submit'} value="Update"/>

//  </form>


// </>
//   )
// }

// export default Edit