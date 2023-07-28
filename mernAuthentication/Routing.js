
import React from 'react';
import Login from './Login';
import Signup from './Signup';
import './Login.css';
import { Link } from 'react-router-dom';

const Routing = () => {
   return (
      <>
         <header className="header-routing">
            <nav className="routing-protocol">
               <ul className='routing-ul'>
                  <li id='Login-mern'> <Link to="/Login">Login</Link> </li>
                  <li id='Signup-mern'> <Link to="/Signup">Signup</Link> </li>
               </ul>
            </nav>
         </header>

      </>
   )
}

export default Routing