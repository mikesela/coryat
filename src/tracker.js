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
      <div className="title">
        <h1>Jeopardy! Coryat Score Tracker</h1>
        <div className="score">{score}</div>
      </div>
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
        .title {
          margin-bottom: 20px;
        }
        .score {
          font-size: 36px;
          margin-top: 10px;
        }
        .content {
          display: flex;
          justify-content: space-between;
          width: 100%;
        }
        .column {
          flex: 1;
          padding: 20px;
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
