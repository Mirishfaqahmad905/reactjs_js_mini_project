import React, { useState } from 'react';
import videoData from '../JSON/Collage_video.json';
import '../css/Collage_video.css';

const CollageVideo = () => {
  const [videos, setVideos] = useState(videoData);

  return (
    <>
      <div className='video-container'>
        {videos.map((video, index) => (
          <div className='left-video-container' key={index}>
            <div className='video-left'>
              <h3>{video.title}</h3>
              <iframe
                width='560'
                height='315'
                src={`https://www.youtube.com/embed/${video.url_image.split('/').pop()}`}
                title={video.title}
            
                allowFullScreen
              />
            </div>
            <div className='video-desc'>
              <p>{video.description}</p>
            </div>
          </div>
        ))}
        <div className='right-container'>
          <h3>it is the right handside of the container</h3>
        </div>
      </div>
    </>
  );
};

export default CollageVideo;
