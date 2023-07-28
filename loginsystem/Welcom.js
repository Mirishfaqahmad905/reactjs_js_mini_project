import React, { useEffect } from 'react';
import './LOGINSYSTEMCSS/Welcom.css';

const Welcom = ({ user }) => {


  if (user) {
    //  return window.alert('welcom')
  }
  return (
    <>
      <div className='welcome-message'>
        <div className='welcom-logout'>
          <div className='welcom-left-page'></div>
          <div className='welcom-main-page'>
            <p>Welcome {user}</p>
          </div>
          <div className='welcomage-right-page'></div>
        </div>
      </div>
    </>
  );
};

export default Welcom;
