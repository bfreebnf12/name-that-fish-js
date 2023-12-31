import React, { useState } from "react";
import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";

const initialFishes = ["trout", "salmon", "tuna", "shark"];

export function FunctionalApp() {
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  const handleAnswer = (userGuess) => {
    const currentFishIndex = correctCount + incorrectCount;

    const isCorrect = initialFishes[currentFishIndex] === userGuess;

    if (isCorrect) {
      setCorrectCount((prevCount) => prevCount + 1);
    } else {
      setIncorrectCount((prevCount) => prevCount + 1);
    }

    if (correctCount + 1 + incorrectCount >= initialFishes.length) {
      setGameOver(true);
    }
  };

  const gameOver = correctCount + incorrectCount >= initialFishes.length;

  return (
    <>
      <FunctionalScoreBoard
        incorrectCount={incorrectCount}
        correctCount={correctCount}
        answersLeft={initialFishes}
      />
      <FunctionalGameBoard
        nextFishIndex={correctCount + incorrectCount}
        handleAnswer={handleAnswer}
        gameOver={gameOver}
      />

      {gameOver && (
        <FunctionalFinalScore
          correctCount={correctCount}
          incorrectCount={incorrectCount}
          totalCount={correctCount + incorrectCount}
        />
      )}
    </>
  );
}