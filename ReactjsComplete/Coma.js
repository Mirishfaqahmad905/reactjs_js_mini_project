import React from 'react';
import Usecontext, {firsname,lastname} from './Usecontext';

const Coma = () => {
     const firsname=Usecontext(firsname);
     const lastname=Usecontext(lastname);
      
  return (
  <>
   <h2>my name is {firsname} and last name is {lastname}</h2>
  </>
  )
}

export default Coma