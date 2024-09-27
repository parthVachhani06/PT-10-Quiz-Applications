// src/pages/QuizPage.js
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const QuizPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const quizData = {
    1: {
      title: 'React Basics',
      questions: [
        { question: 'What is JSX?', options: ['JavaScript XML', 'Java Syntax Extension'], answer: 0 },
        { question: 'What hook is used for state management?', options: ['useState', 'useEffect'], answer: 0 },
      ],
    },
    2: {
      title: 'JavaScript Essentials',
      questions: [
        { question: 'What is a closure?', options: ['Function inside a function', 'Object inside an object'], answer: 0 },
      ],
    },
  };

  const quiz = quizData[id];
  const currentQuestion = quiz.questions[currentQuestionIndex];

  const handleAnswer = (index) => {
    setUserAnswers({ ...userAnswers, [currentQuestionIndex]: index });
  };

  const handleNext = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate('/score', { state: { userAnswers, quiz } });
    }
  };

  return (
    <div className="container mt-4">
      <h3>{quiz.title}</h3>
      <div className="card">
        <div className="card-body">
          <h5>{currentQuestion.question}</h5>
          <div className="list-group">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                className={`list-group-item ${userAnswers[currentQuestionIndex] === index ? 'active' : ''}`}
                onClick={() => handleAnswer(index)}
              >
                {option}
              </button>
            ))}
          </div>
          <button className="btn btn-primary mt-3" onClick={handleNext}>
            {currentQuestionIndex < quiz.questions.length - 1 ? 'Next' : 'Submit'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
