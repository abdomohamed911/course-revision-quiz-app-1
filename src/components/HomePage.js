import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

function HomePage() {
  return (
    <div className="home-container">
      <header className="header">
        <img src="/aiu-logo.png" alt="AIU Logo" className="logo" />
        <h1>ReviQuiz | AIU</h1>
      </header>
      <section className="hero">
        <h2>Welcome to ReviQuiz | AIU!</h2>
        <p>Your one-stop destination for quizzes across various faculties.</p>
      </section>
      <div className="tabs">
        <Link to="/faculties" className="tab">
          Faculties
        </Link>
        <Link to="/popular-quizzes" className="tab">
          Popular Quizzes
        </Link>
      </div>
      <div className="grid">
        {}
      </div>
    </div>
  );
}

export default HomePage;