import React, { useState } from 'react';
import './Quizz.css';

const Quizz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const myquestions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Rome", "Berlin"],
      answer: "Paris"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
      answer: "Leonardo da Vinci"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Jupiter", "Saturn", "Mars", "Earth"],
      answer: "Jupiter"
    }
    // Add more question objects as needed
  ];

  const currentQuestion = myquestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === myquestions.length - 1;

  const handleOptionClick = (option) => {
    const answer = currentQuestion.answer;
    const isCorrect = option === answer;

    // Highlight the selected option in green
    if (isCorrect) {
      document.getElementById(option).classList.add('correct');
    }

    if (!isLastQuestion) {
      setTimeout(() => {
        // Remove the green highlight and move to the next question
        if (isCorrect) {
          document.getElementById(option).classList.remove('correct');
        }
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }, 1000);
    }
  };

  return (
    <>
      <div className='quizz-app'>
        <h2>Question: {currentQuestion.question}</h2>
        <div className='quizz-container'>
          {currentQuestion.options.map((option, index) => (
            <div key={index} className='quizz-option' onClick={() => handleOptionClick(option)}>
          <h2>      {option}</h2>
            </div>
          ))}
          <div className='quizz-top-button'>
            {!isLastQuestion ? (
              <button onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}>Next</button>
            ) : (
              <button disabled>Finish</button>
            )}
          </div>
        </div>
         <h2></h2>
      </div>
    </>
  );
};

export default Quizz;
