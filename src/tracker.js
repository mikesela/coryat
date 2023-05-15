import React, { useState } from 'react';

const JeopardyScoreTracker = () => {
  const [score, setScore] = useState(0);

  const jeopardyAmounts = [200, 400, 600, 800, 1000];
  const doubleJeopardyAmounts = jeopardyAmounts.map(amount => amount * 2);

  const increaseScore = (amount) => {
    setScore(score + amount);
  };

  const decreaseScore = (amount) => {
    setScore(score - amount);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Jeopardy! Coryat Score Tracker</h1>
        <div className="total-score">Total Score: ${score}</div>
      </header>
      <div className="content">
        <div className="column">
          <h2>Jeopardy! Round</h2>
          <div className="amount-column">
            {jeopardyAmounts.map(amount => (
              <div key={amount} className="amount-row">
                <div className="amount-label">${amount}</div>
                <button className="correct-button" onClick={() => increaseScore(amount)}>Correct</button>
                <button className="incorrect-button" onClick={() => decreaseScore(amount)}>Incorrect</button>
              </div>
            ))}
          </div>
        </div>
        <div className="column">
          <h2>Double Jeopardy! Round</h2>
          <div className="amount-column">
            {doubleJeopardyAmounts.map(amount => (
              <div key={amount} className="amount-row">
                <div className="amount-label">${amount}</div>
                <button className="correct-button" onClick={() => increaseScore(amount)}>Correct</button>
                <button className="incorrect-button" onClick={() => decreaseScore(amount)}>Incorrect</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #f0f0f0;
    padding: 20px;
    text-align: center;
    z-index: 999;
  }
  
  .total-score {
    font-size: 24px;
    margin-top: 10px;
  }
  
  .content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 100px; /* Add margin to push content below the fixed header */
  }
  
  .column {
    flex: 1;
    padding: 20px;
    padding-top: 40px; /* Add additional padding at the top of the columns */
  }
  
  .amount-column {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .amount-row {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    white-space: nowrap; /* Prevent wrapping of the buttons */
  }
  
  .amount-label {
    font-size: 24px;
    margin-right: 10px;
  }
  
  .correct-button {
    padding: 10px 20px;
    font-size: 18px;
    margin: 0 5px;
    background-color: lightgreen;
  }
  
  .incorrect-button {
    padding: 10px 20px;
    font-size: 18px;
    margin: 0 5px;
    background-color: lightcoral;
  }
  
  @media screen and (max-width: 768px) {
    .content {
      flex-direction: column;
    }
    .column {
      margin-top: 20px;
    }
  }
  
  
  
  
  
          `}</style>
    </div>
  );
};

export default JeopardyScoreTracker;