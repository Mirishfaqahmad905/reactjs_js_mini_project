import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../css/Collage_Bs.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
const Collage_Bs= () => {
  const [postdata,setpostdata]=useState();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    fatherName: '',
    email: '',
    gender: '',
    dob: '',
    lastYearDmc: null,
    department: '',
    domicileCopy: null,
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleFileChange = (event) => {
    setFormData({ ...formData, domicileCopy: event.target.files[0] });
  };
 const handleDmFileChange=(eventDmc)=>{
  setFormData({ ...formData, lastYearDmc: eventDmc.target.files[0] });
 }
 const handleSubmit = (event) => {
  event.preventDefault();
  axios.post('http://localhost:5000/Apply', {
firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    fatherName: formData.fatherName,

    gender: formData.gender,
    dob: formData.dob,
    lastYearDmc: formData.lastYearDmc,
    department: formData.department,
    domicileCopy: formData.domicileCopy
  })
  .then((response) => {
setpostdata(response.data.message);
    if (response.data.message === 'Application submitted successfully!') {
      window.alert('Your application has been submitted');
    } 
     else if(response.data.message==="please try to enter data first"){
       window.alert("please try to enter data first");
     }
      else if(response.data.message==='Email already exists.'){
         window.alert('the current email are already in use  By another users ');
      }
    
    else {
      window.alert('Failed to insert data');
    }
  })
  .catch((error) => {
    console.log('Error occurred during data insertion: ' + error.message);
    if (error.response) {
      console.log('Error status code: ' + error.response.status);
      console.log('Error message: ' + error.response.data.message);
    }
    window.alert('Something went wrong! Please try again later.');
  });
};
  return (
     <>
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="./Images/gpgc_newblock.jpg"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbEmTQtS6hjgWCG4szZZt1gkEV4Ut1M27CQw&usqp=CAU" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbEmTQtS6hjgWCG4szZZt1gkEV4Ut1M27CQw&usqp=CAU" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
 <div className='header-page-tittle'>
   <h2>Complete all the basic requirment  click to  Submit button </h2>
 </div>
     <div className='Admition_container'>
        <div className='col-row-online-admition row'>
           <div className='col-mid-4'>
           <div className='container'>
             <div className='container-list-left-banner'>
               <ul>
                   <li>
                     <img src='data:image/jpeg;base64,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'/>
                   </li>
                   <li>
                     <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW0bR4lvAjvzDEHJuLjPSzsUhbqMEBQzQnIaQCQxmhqeWQMTz0xsYEKP-T5fu1_J7Gv0w&usqp=CAU'/>
                   </li>
                   <li>
                     <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZUVRGUBk5Hz-O_cXDOkH5TDwRdPqQ7sTetA&usqp=CAU'/>
                   </li>
               </ul>
             </div>
           </div>
           </div>
             <div className='col-mid-6'>
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
      <label htmlFor="lastName">Last Name:</label>
      <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
      <label htmlFor="fatherName">Father's Name:</label>
      <input type="text" id="fatherName" name="fatherName" value={formData.fatherName} onChange={handleInputChange} required />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
      <label htmlFor="gender">Gender:</label>
      <select id="gender" name="gender" value={formData.gender} onChange={handleInputChange} required>
        <option value="">--Select--</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <label htmlFor="dob">Date of Birth:</label>
      <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleInputChange} required />
      <label htmlFor="lastYearDmc">Last Year DMC:</label>
      <input type="file" id="lastYearDmc" name="lastYearDmc" accept=".pdf,.jpg,.jpeg,.png" onChange={handleDmFileChange} required />
      <label htmlFor="department">Department:</label>
      <select id="department" name="department" value={formData.department} onChange={handleInputChange} required>
        <option value="">--Select--</option>
        <option value="Math">Math</option>
        <option value="English">English</option>
        <option value="PakStudy">PakStudy</option>
        <option value="ComputerScience">ComputerScience</option>
        <option value="Zoology">Zoology</option>
        <option value="Economic">Economic</option>
        <option value="Pashto">Pashto</option>
        <option value="Urdu">Urdu</option>
        <option value="Physics">Physics</option>
        <option value="Islamyat">Islamiyat</option>
        <option value="PoliticalScienct">PoliticalScienct</option>
        {/* Add more departments as needed */}
      </select>
      <label htmlFor="domicileCopy">Domicile Copy:</label>
      <input type="file" id="domicileCopy" name="domicileCopy" accept=".pdf,.jpg,.jpeg,.png" onChange={handleFileChange} required />
      <button type="submit">Submit</button>
    </form>
    </div>
     <div className='col col-mid-2'>
     <div className='important-link'>
  <div className='ul-important'>
    <ul>
    <ul>
  <li><a href='https://www.google.facebook.com'>Facebook</a></li>
  <li><a href='https://www.google.twitter.com'>Twitter</a></li>
  <li><a href='https://www.google.instagram.com'>Instagra</a></li>
  <li><a href='https://www.google.youtube.com'>Youtube</a></li>
  <li><a href='https://www.google.linkedin.com'>linkedin</a></li>
  <li><a href='https://www.google.pinterest.com'>pinterest</a></li>
  <li><a href='https://www.google.reddit.com'>reddit</a></li>
  <li><a href='https://www.google.github.com'>gitub</a></li>
  <li><a href='https://www.google.stackoverflow.com'>stackoverflow</a></li>
  <li><a href='https://www.google.quora.com'>quora</a></li>
  <li><a href='https://www.google.medium.com'>medium</a></li>
  <li><a href='https://www.google.discord.com'>dicors</a></li>
  <li><a href='https://www.google.spotify.com'>Spotify</a></li>
  <li><a href='https://www.google.apple.com'>Apple</a></li>
  <li><a href='https://www.google.amazon.com'>Amazon</a></li>
</ul>
    </ul> 
  </div>
</div>
     </div>
    </div>
    </div>
    </>
  );
};
export default Collage_Bs;
