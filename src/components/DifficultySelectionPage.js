import React from 'react';
import { useNavigate } from 'react-router-dom';

function DifficultySelectionPage() {
  const navigate = useNavigate();

  const handleSelectDifficulty = (difficulty) => {
    navigate('/quiz', { state: { difficulty } });
  };

  return (
    <div className="container">
      <h1>Select Difficulty Level</h1>
      <div className="difficulty-options">
        <div className="difficulty-card" onClick={() => handleSelectDifficulty('Easy')}>
          <h2>Easy</h2>
          <p>Perfect for beginners. Start with simple questions.</p>
        </div>
        <div className="difficulty-card" onClick={() => handleSelectDifficulty('Medium')}>
          <h2>Medium</h2>
          <p>A balanced challenge for those with some experience.</p>
        </div>
        <div className="difficulty-card" onClick={() => handleSelectDifficulty('Hard')}>
          <h2>Hard</h2>
          <p>For the experts! Test your knowledge with tough questions.</p>
        </div>
      </div>
    </div>
  );
}

export default DifficultySelectionPage;