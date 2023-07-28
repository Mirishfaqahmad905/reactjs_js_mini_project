  import React, { useState } from 'react'
  
  const Quazz = () => {
     const  [currentquestion,setcurrentquestion]=useState();
      const [score,setscore]=useState(0);
       const questions= 
   
     [
     {
         quesition:['when pakistan become  super atomic power'],
         answer:['2000','1998','1995','1993'],
          correctanswer:['1998']
     }  ,
     {
        quesition:['when pakistan become  super atomic power'],
        answer:['2000','1998','1995','1993'],
         correctanswer:['1998']
    }      
];
 if(currentquestion<questions.length-1)
  {
     
  }
   else 
    {
         
    }
         
    return (
      <>
       <div className='quazz-app'>
                 <h2>Quazz App </h2>
                  <ul>
                     <li>
                         
                     </li>
                  </ul>
                  
       </div>
      </>
    )
  }
  
  export default Quazz