import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../components/LoginPage';
import HomePage from '../components/HomePage';
import FacultySelectionPage from '../components/FacultySelectionPage';
import DifficultySelectionPage from '../components/DifficultySelectionPage';
import QuizPage from '../components/QuizPage';
import ResultPage from '../components/ResultPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/faculties" element={<FacultySelectionPage />} />
      <Route path="/difficulty" element={<DifficultySelectionPage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/results" element={<ResultPage />} /> 
    </Routes>
  );
}

export default AppRoutes;