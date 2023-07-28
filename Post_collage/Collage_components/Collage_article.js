import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import myjson from '../JSON/articles.json';
import '../css/Collage_article.css';
const CollageArticle = () => {
   const [articles,setarticle]=useState(myjson);
       console.log(articles);
  return (
    <div className='article-header-top'>
       <div className='article-header-page'>
         < div className='text-center'> 
           <h2>Articles  </h2>
          </div>
       </div>
      <div className='article-container container'>
         {
           articles.map((item)=>(
            <div className='row'>
            <div className='col-md-6'>
              <img src={item.image_url} width={400} alt='example'/>
               </div>
              <div className='col-md-6'>
                <div className='article-container'>
           
                  <h2>{item.title}</h2>
                  <p>
                   {item.description}
                  </p>
                 <div className='auther-detail'>
                   <p>
                   Author:-   {item.author}
                   </p>
                    </div>
                   <details key={item.url}>
                     <h2>Written By  {item.author}</h2>
                      <a>vusit{item.url}</a>
                   </details>
                </div>
              </div>
            </div>
     

           ))
         }
     
      </div>
    </div>
  );
}

export default CollageArticle;
