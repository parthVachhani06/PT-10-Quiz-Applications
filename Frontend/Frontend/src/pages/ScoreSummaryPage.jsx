// src/pages/ScoreSummaryPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const ScoreSummaryPage = () => {
  const location = useLocation();
  const { userAnswers, quiz } = location.state;

  const correctAnswers = quiz.questions.map((q) => q.answer);
  const score = Object.keys(userAnswers).reduce((acc, key) => acc + (userAnswers[key] === correctAnswers[key] ? 1 : 0), 0);

  return (
    <div className="container mt-4">
      <h2>Your Score: {score}/{quiz.questions.length}</h2>
      <ul className="list-group mt-3">
        {quiz.questions.map((question, index) => (
          <li key={index} className="list-group-item">
            <strong>Q{index + 1}: {question.question}</strong>
            <p>Your Answer: {question.options[userAnswers[index]]}</p>
            <p>Correct Answer: {question.options[question.answer]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScoreSummaryPage;
