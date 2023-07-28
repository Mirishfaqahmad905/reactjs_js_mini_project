import React, { useState, useEffect } from 'react';
import Events from '../JSON/events.json';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const Collage_event = () => {
  const [myevent, setMyEvent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate fetching data from the Events JSON file
        const response = await new Promise(resolve => setTimeout(() => resolve(Events.events), 1000));
        setMyEvent(response);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Events</h1>
      <div className='container'>
        <div className='row'>
          {myevent.map(event => (
            <div className='col-md-4' key={event.id}>
              <div className='card'>
                 {}
                <img src={event.photos[0]} className='card-img-top' alt={event.title} />
                <div className='card-body'>
                  <h2 className='card-title'>{event.title}</h2>
                  <p className='card-text'>Date: {event.date}</p>
                  <p className='card-text'>Time: {event.time}</p>
                  <p className='card-text'>Location: {event.location}</p>
                  <p className='card-text'>Highlights: {event.highlights.join(', ')}</p>
                  <p className='card-text'>Description: {event.description}</p>
                  <p className='card-text'>Contact Email: {event.contactEmail}</p>
                  <p className='card-text'>Contact Phone: {event.contactPhone}</p>
                  <p className='card-text'>Sponsors: {event.sponsors.join(', ')}</p>
                  <p className='card-text'>Call to Action: {event.callToAction}</p>
                  {/* Render other event data as needed */}
                </div>
                <div className='card-footer'>
                  <p>Follow us on social media:</p>
                  <ul>
                    <li>
                      <a href={event.socialMedia.facebook} target='_blank' rel='noopener noreferrer'>
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a href={event.socialMedia.twitter} target='_blank' rel='noopener noreferrer'>
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a href={event.socialMedia.instagram} target='_blank' rel='noopener noreferrer'>
                        Instagram
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Collage_event;
