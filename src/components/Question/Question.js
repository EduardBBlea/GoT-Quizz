import React, { useEffect, useState } from "react";

import Answers from "../Answers/Answers";
import { loadQuestion } from "../../connectors/connectors";

const Question = () => {
  const [currQuestion, setCurrQuestion] = useState({});
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    loadQuestion(counter)
      .then((question) => {
        setCurrQuestion(question);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [counter]);

  const nextQuestionHandle = () => {
    setCounter(counter + 1);
  };

  if (!currQuestion) {
    return <>Data still loading</>;
  }

  return (
    <div id="question-container">
      <img
        src={`./images/question${counter}.jpg`}
        alt=""
        id="question-img"
      ></img>
      <div id="question-text-button">
        <p id="question-text">{currQuestion.question}</p>

        <button onClick={nextQuestionHandle}>Next Question</button>
      </div>
    </div>
  );
};

export default Question;
