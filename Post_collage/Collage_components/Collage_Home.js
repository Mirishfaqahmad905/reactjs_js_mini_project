import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../css/Collage_Home.css';
import Collage_map from './Collage_map';
import axios from 'axios';

const Collage_Home = (mydata) => {
 
  return (
    <>
      <div className='Collage_home_page_top'>
        <div className='Collage_home_header_page_img_slicer'>
          {/* Adding Bootstrap */}
          {/* <!-- HTML code for Bootstrap Carousel --> */}
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            {/* <!-- Indicators --> */}
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>

            {/* <!-- Slides --> */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="../Images/gpgc_gate.jpg" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Welcome</h5>
                  <p>We are excited to give you a chance to succeed</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="../Images/gpgc_outer.jpg" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>TO</h5>
                  <p>We are excited to give you a chance to succeed</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="../Images/gpgc_background.jpg" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Post Graduate College</h5>
                  <p>We are excited to give you a chance to succeed</p>
                </div>
              </div>
            </div>

            {/* <!-- Controls --> */}
            <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>

        <Collage_map />

        <div className="carousel-item">
          <a href="https://www.google.com/maps/place/Government+Postgraduate+College+Timergara/@34.8453254,71.8297424,15z/data=!4m6!3m5!1s0x38dbf36e58fa42a5:0x971eda3357c2e933!8m2!3d34.8453254!4d71.8297424!16s%2Fg%2F11fpfqsh7c"
            target="_blank" rel="noopener noreferrer">
            <img src="https://mts1.google.com/vt/lyrs=m@206000000&hl=en&src=app&x=11461&y=6498&z=14&s=Ga" alt="Google Map" />
          </a>


  <div class="carousel-caption d-none d-md-block">
    <h5>Google Map</h5>
    <p>View our location on Google Map</p>
  </div>
</div>

      </div>
    </>
  );
}

export default Collage_Home;
