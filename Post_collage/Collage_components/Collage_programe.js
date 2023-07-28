import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import data from '../JSON/Programe.json';
// import '../css/Collage_programe.css';
 import '../css/Collage_department_css.css';
import { Link } from 'react-router-dom';

const ProgramDetails = ({ title, description ,image}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
       <img src={image}/>
    </div>
  );
};

const Collage_programe = () => {
  const [programData, setProgramData] = useState([]);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [description, setDescription] = useState('');
  const [img,setimg]=useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setProgramData(data);
      } catch (error) {
        console.log('Error during data fetch:', error);
      }
    };

    fetchData();
  }, []);

  const handleViewDetails = (title, description,image) => {
    setSelectedProgram(title);
    setDescription(description);
     setimg(image);
  };

  return (
    <>
      <div class='Collage_programe_head'>
  <div class='container row'>
    <div class='col-md-2'>
      <div class='programe_left_container'>
        <h2>Currently We are launching the most </h2>
      </div>
    </div>
    <div class='col-md-6'>
      <table class='Collage_table_department table table-bordered'>
        <thead>
          <tr>
            <th>Department</th>
            <th>View Detail</th>
          </tr>
        </thead>
        <tbody>
          {programData.map((item, index) => (
            <tr class='Collage_programe_ul' key={item.id}>
              <td>{item.title}</td>
              <td>
                <button class='btn btn-primary' onClick={() => handleViewDetails(item.title, item.description, item.image)}>VIEW DETAILS</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div class='col-md-2 right_coner_page' id='#detail'>
      {selectedProgram && <ProgramDetails title={selectedProgram} description={description} image={img} />}
    </div>
  </div>
</div>

    </>
  );
};

export default Collage_programe;
