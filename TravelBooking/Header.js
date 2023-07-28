import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
  return (
   <>
    <div className='travel-header'>
         <div className='travel-nav'>
             <nav className='nav-travel'>
                 <div className='header-travel'>
                      <h2>logo</h2>
                 </div>
                  <ul className='travel-ul'>
                     <li> <Link to={'/'}>  Home </Link> </li>
                        <li> <Link to={'/guid'}>  Guid </Link> </li>
                           <li> <Link to={'/fact'}>  facts </Link> </li>
                              <li> <Link to={'/about'}> about </Link> </li>
                                 <li> <Link to={'/Destination'}> Destinations </Link> </li>
                                    <li> <Link to={'/Contact'}>  Contact  </Link> </li>
                  </ul>
             </nav>
         </div>
    </div>
    </>
  )
}

export default Header;