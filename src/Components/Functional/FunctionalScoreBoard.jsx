import React from "react";
import "./styles/score-board.css";

// Array of fish objects
const initialFishes = [
  {
    name: "trout",
    url: "URL_TO_TROUT_IMAGE",
  },
  {
    name: "salmon",
    url: "URL_TO_SALMON_IMAGE",
  },
  {
    name: "tuna",
    url: "URL_TO_TUNA_IMAGE",
  },
  {
    name: "shark",
    url: "URL_TO_SHARK_IMAGE",
  },
];

export function FunctionalScoreBoard({
  correctCount,
  incorrectCount,
  answersLeft,
}) {
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {answersLeft.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
}
