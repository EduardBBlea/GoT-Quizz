import React, { useState } from "react";

import "./App.css";

import Question from "./components/Question/Question";

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  if (gameStarted) {
    return <Question />;
  }

  return (
    <>
      <div className="App">
        <h1>Game of Thrones Quizz</h1>

        <div id="question-container">
          <img
            src="./images/intro.jpg"
            alt="picture of daenerys holding the dragon eggs"
            id="question-img"
          ></img>
          <div id="question-text-button">
            <p id="intro-text">
              Bask in adoration amongst the true leaders or pack your bags and
              join the night's watch! It all depends on your knowledge of the
              seven kingdoms!
            </p>
            <button
              onClick={() => {
                setGameStarted(true);
              }}
              id="button-start"
            >
              Dracarys!!!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
