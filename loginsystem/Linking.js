import React from 'react'
import {Link} from 'react-router-dom';
 import './LOGINSYSTEMCSS/Header.css';
const Linking = () => {
  return (
  <>
   <div className='loginsystem-header-au ul'>
   <ul>
      <Link to={'./create'}>   <li>Create</li></Link> 
  <Link to={'./login'}><li>Login</li></Link>
    <Link to={'./logout'}><li>Logout</li></Link> 
    <Link to={'./welcom'}><li>Welcom</li></Link> 
   </ul>
   </div>
  </>
  )
}

export default Linking