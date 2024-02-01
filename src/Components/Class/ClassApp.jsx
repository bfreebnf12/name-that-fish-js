import { Component } from "react";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { initialFishes } from "../../data";

export class ClassApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incorrectCount: 0,
      correctCount: 0,
    };
  }

  handleAnswer = (userGuess) => {
    const { correctCount, incorrectCount } = this.state;
    const currentFishIndex = correctCount + incorrectCount;
    const isCorrect = initialFishes[currentFishIndex].name === userGuess;

    if (isCorrect) {
      this.setState((prevState) => ({
        correctCount: prevState.correctCount + 1,
      }));
    } else {
      this.setState((prevState) => ({
        incorrectCount: prevState.incorrectCount + 1,
      }));
    }
    if (currentFishIndex + 1 >= initialFishes.length) {
      this.setState({ gameOver: true });
    }
  };

  render() {
    const { incorrectCount, correctCount } = this.state;
    const currentFishIndex = correctCount + incorrectCount;
    const answersLeft = initialFishes
      .map((fish) => fish.name)
      .slice(currentFishIndex);
    const gameOver = currentFishIndex >= initialFishes.length;

    return (
      <>
        {!gameOver && (
          <>
            <ClassScoreBoard
              incorrectCount={incorrectCount}
              correctCount={correctCount}
              answersLeft={answersLeft}
            />
            <ClassGameBoard
              nextFishIndex={currentFishIndex}
              handleAnswer={this.handleAnswer}
              gameOver={gameOver}
            />
          </>
        )}

        {gameOver && (
          <ClassFinalScore
            correctCount={correctCount}
            incorrectCount={incorrectCount}
            totalCount={correctCount + incorrectCount}
          />
        )}
      </>
    );
  }
}
