import React, { useState, useEffect } from "react";
import questions from "./questions";



function Quiz() {

  
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  
  // was an option clicked?
  const optionClicked = (isCorrect) => {
    // check if correct, increment score
      if (isCorrect) {
        setScore(score + 1);
      }
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResults(true);
      }
    };
  
    // Restart Quiz 
    const restartQuiz = () => {
      setScore(0);
      setCurrentQuestion(0);
      setShowResults(false);
    };
  
    return (
      <>
      <h2 className="quiz--title">Quiz</h2>
      <div className="quiz" id="quiz">
        <h1>Test Your Bob's Burgers Knowledge!</h1>
        <h2>Score: {score}</h2>
          {showResults ? (
          <div className="quiz--finalResults">
              <h2>{score} out of {questions.length} correct - (
              {(score / questions.length) * 100}%)</h2>
              <button className="restart-button" onClick={() => restartQuiz()}>Restart Quiz</button>
          </div>

        ) : (
        
          <div className="quiz--question-card">
            <h2>Question: {currentQuestion + 1} out of {questions.length}</h2>
            <h3 className="question--text">{questions[currentQuestion].text}</h3>
            <ul>
              {questions[currentQuestion].options.map((option) => {
                return (
                  <li
                    className="quiz--options"
                    key={option.id}
                    onClick={() => optionClicked(option.isCorrect)}>
                    {option.text}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      </>
    );
  }


export default Quiz;