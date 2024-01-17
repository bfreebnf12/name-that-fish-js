import { useState } from "react";
import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import {initialFishes } from "./FunctionalGameBoard";



export function FunctionalApp() {
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  const fishIndex = correctCount + incorrectCount;
  const gameOver = fishIndex === initialFishes.length;

  const handleAnswer = (userGuess) => {
    



    if (initialFishes[fishIndex].name === userGuess) {
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
        answersLeft={initialFishes}
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