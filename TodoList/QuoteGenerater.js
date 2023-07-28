 import React, { useEffect, useState } from 'react';
 import './Quotes.css';
 
 const QuoteGenerater = () => {
      const  [quotes,setquotes]=useState();
    const [auther,setauther]=useState();
     const [more,setmore]=useState('');
  
     const fetchData= async ()=>{
         try{
              const mydata= await fetch('https://api.quotable.io/random');
              const response= await mydata.json(); 
                   setquotes(response.content);
                     setauther(response.author);
                     setmore(response.authorSlug)
                    
         }
          catch(err){
             console.log('error'+err);
          }
     };
      useEffect(()=>{
           fetchData();
      },[]);
       const Next=()=>{
         fetchData();
       }
   return (
   <>
   
      <div className='containerOfTheClass'>
         <h2>best Quotes :   {quotes}</h2>
           <p>Written by: {auther}</p>
           
        
            <button onClick={Next}>Next</button>
            <details>more info
                 <p> {more} </p>
            </details>
      </div>
            
   </>
   )
 }
 
 export default QuoteGenerater