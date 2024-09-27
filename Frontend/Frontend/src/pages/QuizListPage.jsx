// src/pages/QuizListPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuizListPage = () => {
  const navigate = useNavigate();
  const quizzes = [
    { id: 1, title: 'React Basics', description: 'Test your React knowledge.' },
    { id: 2, title: 'JavaScript Essentials', description: 'Quiz on JS fundamentals.' },
  ];

  const handleStartQuiz = (id) => {
    navigate(`/quiz/${id}`);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Available Quizzes</h2>
      <div className="list-group">
        {quizzes.map((quiz) => (
          <button
            key={quiz.id}
            className="list-group-item list-group-item-action"
            onClick={() => handleStartQuiz(quiz.id)}
          >
            <h5>{quiz.title}</h5>
            <p>{quiz.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizListPage;
