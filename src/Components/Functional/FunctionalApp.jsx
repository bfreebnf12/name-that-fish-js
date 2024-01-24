import React, { useState } from "react";
import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { initialFishes } from "../../data";

export function FunctionalApp() {
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [answersLeft, setAnswersLeft] = useState(
    initialFishes.map((fish) => fish.name)
  );

  const fishIndex = correctCount + incorrectCount;
  const gameOver = fishIndex >= initialFishes.length;

  const handleAnswer = (userGuess) => {
    const isCorrect = initialFishes[fishIndex].name === userGuess;

    if (isCorrect) {
      setCorrectCount((prevCount) => prevCount + 1);
    } else {
      setIncorrectCount((prevCount) => prevCount + 1);
    }

    // Update answersLeft locally by slicing the guessed fish
    const updatedAnswersLeft = initialFishes
      .map((fish) => fish.name)
      .slice(fishIndex + 1);

    setAnswersLeft(updatedAnswersLeft);

    if (fishIndex + 1 >= initialFishes.length) {
      // You may set your game-over logic here if needed
    }
  };

  return (
    <>
      {!gameOver && (
        <>
          <FunctionalScoreBoard
            incorrectCount={incorrectCount}
            correctCount={correctCount}
            answersLeft={answersLeft}
          />
          <FunctionalGameBoard
            nextFishIndex={fishIndex}
            handleAnswer={handleAnswer}
          />
        </>
      )}

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
