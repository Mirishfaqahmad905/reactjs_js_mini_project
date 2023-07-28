import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Collage_header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
const Collage_header = ({ mydata }) => {
  // const isAuthenticated = mydata && mydata._id;
  return (
    <div className='collage-header-top'>
      <nav className='collage-nav-top'>
        <ul className='collage-header-ul'>
          <li className='collage-list-logo'>
            <img src='./images/gpgc_logo.jpg' alt='Logo' />
          </li>
          <li className='collage-list'>

            <Link to={'/'}>Home</Link>
          </li>
          <li className='collage-list collage-dropdown'>
            <Link to={'/Signup'}>Signup</Link>
          </li>
          <li className='collage-list'>
            <Link to={'/Collage_contact'}>Contacts</Link>
          </li>
          <li className='collage-list'>
            <Link to={'/admition'}>Admition</Link>
          </li>
          <li className='collage-list'>
            <Link to={'/gallery'}>Gallery</Link>
          </li>
          <li className='collage-list'>
            <Link to={'/events'}>Events</Link>
          </li>
          <li className='collage-list'>
            <Link to={'/programe'}>Programs</Link>
          </li>
          <li className='collage-list'>
            <Link to={'/article'}>Programs</Link>
          </li>
          <li className='collage-list'>
            <Link to={'/About'}>About</Link>
          </li>
          <li className='collage-list'>
            <input type='search' name='name' placeholder='Search Here' />
          </li>
          <li className='collage-list'>
            <input type='submit' onClick={''} value={'Search'} />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Collage_header;
