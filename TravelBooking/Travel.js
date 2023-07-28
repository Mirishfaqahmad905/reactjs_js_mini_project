import React, { useState } from 'react';
import './Travel.css'; // Import CSS file
import Header from './Header';
import Destination from './Destinations.json';

const Travel = () => {
   const {jsondata,setjsondata}=useState(Destination);
    // setjsondata(Destination)
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    // Add code to submit form data to backend here
  };
  console.log(jsondata);
  return (
     <>

      <div className='online-travling-website'>
           <div className='online-traveling-website-image'>
             <img src='https://www.heart.org/-/media/AHA/H4GM/Article-Images/travel.jpg' width={900} />
           </div>
      </div>
    <div className="travel-container"> {/* Add container class */}
      <h1>Travel Booking System</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="destination">Destination:</label>
        <input
          type="text"
          id="destination"
          value={destination}
          onChange={(event) => setDestination(event.target.value)}
          required
        />
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(event) => setStartDate(event.target.value)}
          required
        />
        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(event) => setEndDate(event.target.value)}
          required
        />
        <label htmlFor="numberOfPeople">Number of People:</label>
        <input
          type="number"
          id="numberOfPeople"
          value={numberOfPeople}
          onChange={(event) => setNumberOfPeople(event.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {isSubmitted && (
        <div className="booking-confirmation"> {/* Add confirmation class */}
          <p>Thank you for your booking!</p>
          <p>Destination: {destination}</p>
          <p>Start Date: {startDate}</p>
          <p>End Date: {endDate}</p>
          <p>Number of People: {numberOfPeople}</p>
        </div>
      )}
       
    </div>
        <div className='ui-travel'>


  {
  
     
  }
           
           <div className='ui-container-1'>
             <div className='ui-image1'>
               <img height={200}  src='https://media.istockphoto.com/id/1433038139/photo/young-handsome-male-traveler-standing-on-the-street-and-looking-at-the-map.jpg?b=1&s=170667a&w=0&k=20&c=iEoQTHarasngKogk-6HXnGsbiAnc_Wom5dDomuULixE='/>
                 <div className='ui-description'>
                   <p>description</p>
                 </div>
             </div>
           </div>
           <div className='ui-container-1'>
             <div className='ui-image1'>
               <img height={200}  src='https://images.unsplash.com/photo-1596029928053-0741cd5c5fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlzaXRpbmd8ZW58MHx8MHx8&w=1000&q=80'/>
                 <div className='ui-description'>
                   <p>description</p>
                 </div>
             </div>
           </div>
           <div className='ui-container-2'>
             <div className='ui-image2'>
               <img height={200} src='https://images.unsplash.com/photo-1595948215236-f9bf96580aa3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmlzaXRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'/>
                 <div className='ui-description'>
                   <p>description</p>
                 </div>
             </div>
           </div>
           <div className='ui-container-3'>
             <div className='ui-image2'>
               <img height={200} src='https://images.unsplash.com/photo-1597227773621-984f815f6b3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dmlzaXRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'/>
                 <div className='ui-description'>
                   <p>description</p>
                 </div>
             </div>
           </div>
        </div>

        <footer className="Collage_footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {/* Contact Information */}
            <h5>Contact Us</h5>
            <p>1234 College Ave, City, State ZIP</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@college.com</p>
          </div>
          <div className="col-md-4">
            {/* Quick Links */}
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about">About Us</a></li>
              <li><a href="/programs">Programs</a></li>
              <li><a href="/admissions">Admissions</a></li>
              <li><a href="/faculty">Faculty</a></li>
              <li><a href="/events">Events</a></li>
              <li><a href="/news">News</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            {/* Social Media Links */}
            <h5>Connect with Us</h5>
            <ul className="list-unstyled">
              <li><a href="https://www.facebook.com/college" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://twitter.com/college" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://www.instagram.com/college" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://www.linkedin.com/company/college" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {/* Copyright Information */}
            <p className="text-center">&copy;  {new Date().getFullYear()} College. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
         </>
  );
};

export default Travel;
