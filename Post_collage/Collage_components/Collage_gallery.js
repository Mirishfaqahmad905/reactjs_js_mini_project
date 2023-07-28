import React, { useState } from 'react';
import '../css/Collage_gallery.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
// import Collage_article from './Collage_article';
// import Collage_video from './Collage_video';
// import Collage_images from './Collage_images';
const Collage_gallery = () => {
  const [collagedata,setcollagedata]=useState();
  return (
    <>
     <div className='collageGallery'>
          <div className='gallery_header'>
             <img src='https://www.charvikacademy.com/wp-content/uploads/2017/10/banner-gallery-charvik-academy.jpg'/>
          </div>
     </div>
      <div className='collage_data_gallery'>
        <div className='container'>
          <div className='collage_gallery_row'>
            <div className='collage_image_container'>
              <div className='collage_title_img'>
                <h4><Link to='/images'>Collage Gallery</Link></h4>
              </div>
              <div className='collage_img_containers'>
                <img src='https://149842033.v2.pressablecdn.com/wp-content/uploads/2019/07/photo-gallery-website-templates-expression.jpg'/>
              </div>
              <div className='collage_description_pages'>
                <p>This is the description page</p>
              </div>
            </div>
            <div className='collage_video_container'>
              <div className='collage_title_video'>
                <h4><Link to='/video'>Video</Link></h4>
              </div>
              <div className='collage_video_containers'>
 <a>                <img src='https://www.shutterstock.com/image-vector/video-button-260nw-197201618.jpg' /></a>
              </div>
              <div className='collage_description_video'>
                <p>This is the description page</p>
              </div>
            </div>
            <div className='collage_article_container'>
              <div className='collage_title_artile'>
                <h4><Link to='/articles'>Articles page</Link></h4>
              </div>
              <div className='collage_article_containers'>
                <img src='https://cdn.vox-cdn.com/thumbor/4Fvn-rggorTOwL2cGEPazHPwWmM=/0x0:6000x4000/1200x800/filters:focal(2520x1520:3480x2480)/cdn.vox-cdn.com/uploads/chorus_image/image/67758941/GettyImages_1035462384.0.jpg'/>
              </div>
              <div className='collage_description_article'>
                <p>This is the description page</p>
              </div>       
            </div>
          </div>
        </div>
      </div>
      {/* <Routes>
        <Route path='./video' element={<Collage_video/>}></Route>
        <Route path='./images' element={<Collage_images/>}></Route>
        <Route path='./articles' element={<Collage_article/>}></Route>
      </Routes> */}
    </>
  )
}
export default Collage_gallery;
