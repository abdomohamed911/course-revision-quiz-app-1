import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total } = location.state || { score: 0, total: 0 };

  const handleRetry = () => {
    navigate('/faculties');
  };

  const handleHome = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <h1>Quiz Completed!</h1>
      <p>Your Score: {score} / {total}</p>
      <p>
        {score === total
          ? 'Amazing! You got everything right!'
          : score > total / 2
          ? 'Great job! Keep practicing to improve even more!'
          : 'Don’t worry, keep trying and you’ll get better!'}
      </p>
      <div>
        <button className="btn" onClick={handleRetry}>
          Try Again
        </button>
        <button className="btn" onClick={handleHome}>
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default ResultPage;