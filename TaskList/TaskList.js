import React, { useState } from 'react';

const TaskList = () => {
  const [index, setIndex] = useState(0); // Track the current question index

  const data = [
    {
      question: 'When did Pakistan become an atomic power?',
      answers: ['2000', '1920', '1998'],
    },
    {
      question: 'Who is the founder of cricket?',
      answers: ['jack', 'rob', 'but', 'morgan'],
       corr:['jack']
    },
  ];

  const handleNextQuestion = () => {
    setIndex(prevIndex => prevIndex + 1); // Update the question index
  };
   const Correct=()=>{
         if(data[0].question===[data.corret]){
             document.getElementById('correct').style.background='green';
             document.getElementById('correct').style.color='white';
         }    else 
          {
            document.getElementById('correct').style.background='red';
            document.getElementById('correct').style.color='white';
          }
   }
  return (
    <>
      <h2>Let's answer some questions:</h2>
      <div className="questions-list">
        {index < data.length ? (
          <>
            <h3>Question {index + 1}: {data[index].question}</h3>
            <ul>
              {data[index].answers.map((answer, answerIndex) => (
                <li id='correct' key={answerIndex} onClick={Correct}>{answer}</li>
              ))}
            </ul>
            <button onClick={handleNextQuestion}>Next</button>
          </>
        ) : (
          <p>No more questions</p>
        )}
      </div>
    </>
  );
};

export default TaskList;
