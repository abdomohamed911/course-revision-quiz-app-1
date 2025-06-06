import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/home'); // Navigate to the home page
  };

  return (
    <div className="login-container">
      <h1>ReviQuiz | AIU</h1>
      <img src="/aiu-logo.png" alt="AIU Logo" className="logo" />
      <button className="start-button" onClick={handleStart}>
        Start Quiz App
      </button>
    </div>
  );
}

export default LoginPage;