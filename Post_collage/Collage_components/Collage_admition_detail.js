import React, { useState } from 'react'
import Collage_detail from '../JSON/Collage_detail.json';
import '../css/Collage_admition_detail.css';
const Collage_admition_detail = () => {
  const [data, setData] = useState(Collage_detail);

  return (
    <div className="apply-container">
      <div className="row">
        <div className="col-md-2 text-center">
           Read All Information 
        </div>
        <div className="col-md-8 text-center">
          <h2 className="mb-4">Admission Requirements</h2>
          {data.personalInformation && (
            <div>
              <h3>Personal Information</h3>
              <p>Full Name: {data.personalInformation.fullName}</p>
              <p>Date of Birth: {data.personalInformation.dateOfBirth}</p>
              <p>Address: {data.personalInformation.contactInformation.address}</p>
              <p>Phone Number: {data.personalInformation.contactInformation.phoneNumber}</p>
              <p>Email: {data.personalInformation.contactInformation.email}</p>
            </div>
          )}
          {data.academicQualifications && (
            <div>
              <h3>Academic Qualifications</h3>
              <p>Undergraduate Degree: {data.academicQualifications.undergraduateDegree}</p>
              <p>Transcripts: {data.academicQualifications.transcripts}</p>
              <p>Certificates: {data.academicQualifications.certificates}</p>
            </div>
          )}
          {data.testScores && (
            <div>
              <h3>Test Scores</h3>
              <p>Standardized Test: {data.testScores.standardizedTest}</p>
              <p>Test Scores: {data.testScores.testScores}</p>
            </div>
          )}

          {data.lettersOfRecommendation && (
            <div>
              <h3>Letters of Recommendation</h3>
              {data.lettersOfRecommendation.map((letter, index) => (
                <div key={index}>
                  <p>Name: {letter.name}</p>
                  <p>Position: {letter.position}</p>
                  <p>Institution: {letter.institution}</p>
                  <p>Address: {letter.contactInformation.address}</p>
                  <p>Phone Number: {letter.contactInformation.phoneNumber}</p>
                  <p>Email: {letter.contactInformation.email}</p>
                </div>
              ))}
            </div>
          )}

          {data.statementOfPurpose && (
            <div>
              <h3>Statement of Purpose</h3>
              <p>{data.statementOfPurpose}</p>
            </div>
          )}

          {data.applicationFee && (
            <div>
              <h3>Application Fee</h3>
              <p>{data.applicationFee}</p>
            </div>
          )}

          {data.additionalRequirements && (
            <div>
              <h3>Additional Requirements</h3>
              <p>{data.additionalRequirements}</p>
            </div>
          )}
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  )
}

export default Collage_admition_detail;
