import React, { Component } from "react";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassFinalScore } from "./ClassFinalScore";

const initialFishes = ["trout", "salmon", "tuna", "shark"];

export class ClassApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incorrectCount: 0,
      correctCount: 0,
    };
  }

  handleAnswer = (userGuess) => {
    const currentFishIndex =
      this.state.correctCount + this.state.incorrectCount;

    const isCorrect = initialFishes[currentFishIndex] === userGuess;

    if (isCorrect) {
      this.setState((prevState) => ({
        correctCount: prevState.correctCount + 1,
      }));
    } else {
      this.setState((prevState) => ({
        incorrectCount: prevState.incorrectCount + 1,
      }));
    }

    if (
      this.state.correctCount + 1 + this.state.incorrectCount >=
      initialFishes.length
    ) {
      this.setState({ gameOver: true });
    }
  };

  render() {
    const { incorrectCount, correctCount, gameOver } = this.state;

    return (
      <>
        <ClassScoreBoard
          incorrectCount={incorrectCount}
          correctCount={correctCount}
          answersLeft={initialFishes}
        />

        {gameOver ? (
          <ClassFinalScore
            correctCount={correctCount}
            incorrectCount={incorrectCount}
            totalCount={correctCount + incorrectCount}
          />
        ) : (
          <ClassGameBoard
            nextFishIndex={correctCount + incorrectCount}
            handleAnswer={this.handleAnswer}
            gameOver={gameOver}
          />
        )}
      </>
    );
  }
}
