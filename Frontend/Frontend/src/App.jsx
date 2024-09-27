// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import QuizListPage from './pages/QuizListPage';
import QuizPage from './pages/QuizPage';
import ScoreSummaryPage from './pages/ScoreSummaryPage';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<QuizListPage />} />
        <Route path="/quiz/:id" element={<QuizPage />} />
        <Route path="/score" element={<ScoreSummaryPage />} />
      </Routes>
    </div>
  );
};

export default App;
