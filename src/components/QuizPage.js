import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import questions from '../data/questions';

function QuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const navigate = useNavigate();

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    if (answer.isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate('/results', { state: { score, total: questions.length } });
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="quiz-container">
      <h2>{currentQuestion.question}</h2>
      <div className="options">
        {currentQuestion.answers.map((answer, index) => (
          <button
            key={index}
            className={`option ${selectedAnswer === answer ? (answer.isCorrect ? 'correct' : 'incorrect') : ''}`}
            onClick={() => handleAnswerSelect(answer)}
            disabled={selectedAnswer !== null}
          >
            {answer.text}
          </button>
        ))}
      </div>
      <div className="navigation">
        <button onClick={handleBack}>Back</button>
        <button onClick={handleNextQuestion} disabled={selectedAnswer === null}>
          {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Finish'}
        </button>
      </div>
    </div>
  );
}

export default QuizPage;