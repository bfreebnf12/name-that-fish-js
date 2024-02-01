import { useState } from "react";
import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { initialFishes } from "../../data";

export function FunctionalApp() {
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  const fishIndex = correctCount + incorrectCount;
  const gameOver = fishIndex >= initialFishes.length;
  const answersLeft = initialFishes.map((item) => item.name).slice(fishIndex);

  const handleAnswer = (userGuess) => {
    const isCorrect = initialFishes[fishIndex].name === userGuess;

    if (isCorrect) {
      setCorrectCount((prevCount) => prevCount + 1);
    } else {
      setIncorrectCount((prevCount) => prevCount + 1);
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
            nextFishData={initialFishes[fishIndex]}
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
