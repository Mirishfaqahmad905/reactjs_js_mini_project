import React from 'react';
import Props from './Props';

const Jsx = () => {
  const name = "John";
   let object={name:'ahmad',fathername:"talha khan "};
//  let numberis=23;
  return (
    <div>
      <Props  object={object} />
    </div>
  );
}

export default Jsx;













// import React from 'react';
// import Props from './Props';
  

// const Jsx = () => {
//      const list=['one','two','three','four'];
       
//     const isflag=false;
       
//     const name="ahmad";
//      function formateuser(usercolor){
//           console.log(usercolor.firstName+"and the next color is "+usercolor.lastname);
//      }
//        const  usercolor={firstName:"ahmad",lastname:"ahmadkhan"};
//       let  number =Math.random();
//       const Clickem=()=>{
//          console.log('hello devolper');
//       }
//   return (
    
//     <div> 
//        <Props name="red"/>
//         {
//              list.map((item,index)=>(
//                    <h2 key={index}> {item} </h2>
//              ))
//         }
//          <div>   {formateuser(usercolor)} </div>
//          {  isflag   ?  (<p>welcom to javascript course </p>)  :  (<p>  welcom to react course </p>) }
//          <h2>this is jsx component </h2>
//      <p> you name is {name}</p>
//        <p>and the number you are choose is {number }</p>
//        <button onClick={Clickem}>function call </button>
    
//     </div>
//   )
// }

// export default Jsx;