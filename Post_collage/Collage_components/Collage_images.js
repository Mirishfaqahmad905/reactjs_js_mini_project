import React, { useEffect, useState } from 'react';
import Data from '../JSON/Gallery.json';
import '../css/Collage_images.css';

const Collage_images = () => {
  const [jsondata, setjsondata] = useState([]);
  useEffect(() => {
    setjsondata(Data);
  }, []);

  return (
    <div className='Collage_image_tag'>
      <div className='Collage_image'>
        {jsondata.map((item) => (
          <div className='collage_img_box' key={item.id}>
            <div className='collage_description_image'>
              <div className='img-box'>
                <img src={process.env.PUBLIC_URL + item.url} alt='' />
                <div className='description-img'>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collage_images;
