import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Collage_admition.css';

const Collage_admition = () => {
  const [enrollNow, setEnrollNow] = useState(false);
  const [admissionDetails, setAdmissionDetails] = useState(null);

  const handleEnrollNow = () => {
    // Logic for handling enroll now button click
    setEnrollNow(true);
    // Fetch admission details from APIs or set dummy data
    const dummyAdmissionDetails = {
      title: 'Admission Details',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ligula urna. Nulla ultrices turpis non bibendum vehicula. Sed laoreet eleifend fermentum. Duis malesuada dolor at ullamcorper posuere.',
    };
    setAdmissionDetails(dummyAdmissionDetails);
  };

  return (
    <>
      <div className='collage_admition_header'>
        <div className='container'>
          <h2 className='text-center '>Get Enroll Now</h2>
          <div className='container row col-row'>
            <div className='col col-mid-4'>
              <div className='collage_admition_left_container'>
                <Link to='/Bs'>
                  <img src='https://img.pikbest.com/origin/06/59/74/039pIkbEsTCzq.png!f305cw' />
                  <button onClick={handleEnrollNow}>Apply For Collage Degree</button>
                </Link>
              </div>
            </div>
            <div className='col col-mid-4'>
              <div className='collage_admition_main_container'>
                <Link to='/Collage_bs'>
                  <img src='https://img.freepik.com/premium-psd/admission-open-3d-rendered-social-media-post-with-transparent-background_567972-287.jpg?w=2000' />
                  <button>Apply For Bs</button>
                </Link>
              </div>
            </div>
            <div className='col col-mid-4'>
              <div className='collage_admition_right_container'>
                {admissionDetails ? (
                  <>
                    <h3>{admissionDetails.title}</h3>
                    <p>{admissionDetails.content}</p>
                  </>
                ) : (
                  <Link to='/requirement'>
                    <img src='https://w7.pngwing.com/pngs/297/955/png-transparent-admission-miscellaneous-child-food-thumbnail.png' />
                    <button onClick={() => setAdmissionDetails(null)}>Know Detail of the admission</button>
                  </Link>
                )}
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
      {enrollNow && (
        <div>
          <h3>Thank you for enrolling!</h3>
          <p>We will contact you shortly with further instructions.</p>
          {/* Render additional content or components based on enrollment status */}
        </div>
      )}
    </>
  );
};

export default Collage_admition;
