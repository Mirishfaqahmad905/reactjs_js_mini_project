import React from 'react';
import guidsjson from './guide.json';
import './guide.css';

const Guid = () => {
  return (
    <>
      <div className='guide-us'>
        {guidsjson.sections.map((item, index) => (
          <div key={index} className='image-guid'>
            <div className='title'>
              <p>{item.title}</p>
            </div>
            <div className='image'>
              <img src={item.image_url} alt={item.title} />
              <div className='description'>
                <p>{item.description}</p>
              </div>
            </div>
            <div className='tasks'>
              <h4>Tasks:</h4>
              <ul>
                {item.tasks.map((task, taskIndex) => (
                  <li key={taskIndex}>{task}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Guid;
