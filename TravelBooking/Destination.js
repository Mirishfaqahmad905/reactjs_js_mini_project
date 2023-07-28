import React, { useState } from 'react';
import Destinations from './Destinations.json';
import './Destination.css'
const Destination = () => {
  const [items, setItems] = useState(Destinations);

  return (
    <>
   <div className='destination-background-title'>
  <h1>The Most Beautiful Places All Over the World You Want to Visit</h1>
  <p>Discover breathtaking destinations that will captivate your senses.</p>
  <button>Explore Now</button>
</div>
      <div className='destination-place'>
        {items.map((place) => (
          <div key={place.id} className='destination-places-title'>
            <div className='destination-name'>
              <p>Name: {place.DestinationName}</p>
            </div>
            <div className='destination-images'>
              <img src={place.img} alt={place.DestinationName} width={200} />
            </div>
            <div className='destination-place-items'>
              <p style={{textAlign:"center",marginTop:"23px"}}> {place.DestinationLocation} </p>
              <div className='destination-place-item-multiple'>{/* Add content here */}</div>
            </div>
          </div>
        ))}
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

export default Destination;
