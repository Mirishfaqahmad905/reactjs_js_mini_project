import React, { useEffect, useState } from 'react';
import '../css/Collage_contact.css';
import axios from 'axios';



const CollageContact = () => {
  const [data, setdata] = useState({
    name: '',
    email: '',
 subject: '',
message: ''
  });
   const [store,setstore]=useState();
    
    const ChangeHandler=(e)=>{
       const {name,value}=e.target;
       setdata({...data,[name]:value});
    }
    const handleSubmit=(e)=>{
       e.preventDefault();
         axios.post('http://localhost:5000/comment/data',{
            name:data.name,
            email:data.email,
      subject:data.subject,
           message:data.message
         }).then((response)=>{
              setstore(response.data.message);
               console.log(store);
         }).catch((err)=>{
           console.log("error accure during saving data in database ");
         })
    
        }
   // google map 
    useEffect(()=>{
      const apikey = '953e3fa8a3ee3d40f59a97937198bdaf';
   const YOUR_API_KEY="953e3fa8a3ee3d40f59a97937198bdaf";
    // Load Google Maps API script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${YOUR_API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      // Create a new Google Map instance
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.7128, lng: -74.0060 },
        zoom: 15
      });

      // Add a marker to the map
      new window.google.maps.Marker({
        position: { lat: -74.0060, lng:40.7128  },
        map: map,
        title: 'Your College Name'
      });
    }
  }
    );
   const faqans = [
    {
      question: "How can I contact the college?",
      answer: "You can contact us via the contact form above, by phone, or by visiting our college in person during office hours."
    },
    {
      question: "What are the office hours of the college?",
      answer: "The college office is open from Monday to Friday, 9am to 5pm."
    },
    {
      question: "What postgraduate programs does the college offer?",
      answer: "We offer a variety of postgraduate programs in fields such as business, science, arts, and technology. Please refer to our website or contact us for more information on specific programs."
    },
    {
      question: "How can I apply for admission to the college?",
      answer: "You can apply for admission to our college by filling out our online application form on our website or by contacting our admission office for further instructions."
    },
    {
      question: "What are the eligibility criteria for postgraduate programs?",
      answer: "The eligibility criteria for our postgraduate programs vary depending on the program. Generally, applicants are required to have a bachelor's degree in a relevant field, meet minimum GPA requirements, and submit additional documents such as transcripts, recommendation letters, and test scores. Please refer to our website or contact us for detailed eligibility criteria for each program."
    }
  ];


  
  //  console.log(data.comment,  data.email , data.object);  
  return (
    <div className="contact-container-main text-center mt-4">
      <div className='row'>
        <div className='col-md-2'> mostly asking questionn is here <h2></h2></div>
        <div className='col-md-8 text-center'>
          <h1>Contact Us</h1>
          <form className="contact-form text-center" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" onChange={ChangeHandler} placeholder="Your name" />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" onChange={ChangeHandler} placeholder="Your email" />
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" onChange={ChangeHandler} placeholder="Subject" />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" onChange={ChangeHandler} placeholder="Your message"></textarea>
            <button type="submit" class="btn btn-danger">Success</button>
          </form>
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>Address: 1234 College St, City, State ZIP</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@college.edu</p>
          </div>
        </div>
         <div className='col col-mid-2'> </div>
       
      </div>
       
      <div className='col-row row '>
           <div className='col-md-2'></div>
           <div className=' col col-md-8 ml-40 text-center faq'> <h2  className='text-center '>FAQ</h2>
                  
                  { faqans.map((questions,index)=>(
           
                  
                 <div class="list-group">
             <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
               <div class="d-flex w-100 justify-content-between">
                 <h5 class="mb-1">{index}</h5>
                 <small>{new Date().getFullYear()}</small>
               </div>
               <p class="mb-1">   {questions.question}</p>
              
             </a>
             <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
               <div class="d-flex w-100 justify-content-between">
                 
                 <small class="text-muted">{new Date().getDay()}</small>
               </div>
               <p class="mb-1">{questions.answer}</p>
             </a>
           </div>    
           ))}
                               </div>
                               <div className='col col-mid-2'> Content-Right-Side  </div>                         
                               <div id="map script" style={{ height: '300px', width: '100%' }}></div>
        <div>
       
          <h2>Directions</h2>
          <p>Enter your address here</p>
          <form>
            <input type="text" id='script' placeholder="Your address" />
            <button type="submit">Get Directions</button>
          </form>
        </div>
    
          
      </div>
    </div>
  )
}

export default CollageContact;
