import React, { Component } from "react";
import "./styles/score-board.css";

export class ClassScoreBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incorrectCount: 0,
      correctCount: 0,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.answersLeft !== this.props.answersLeft) {
      this.setState({
        incorrectCount: 0,
        correctCount: 0,
      });
    }
  }

  handleGuess = (isCorrect) => {
    this.setState((prevState) => {
      if (isCorrect) {
        return { correctCount: prevState.correctCount + 1 };
      } else {
        return { incorrectCount: prevState.incorrectCount + 1 };
      }
    });
  };

  render() {
    const { incorrectCount, correctCount, answersLeft } = this.props;

    return (
      <div id="score-board">
        <div>Incorrect 🔻: {incorrectCount}</div>
        <div id="choices-left">
          {answersLeft.map((answer, index) => (
            <div
              key={index}
              className="choice"
              onClick={() => this.handleGuess(false)}
            >
              {answer}
            </div>
          ))}
        </div>
        <div>Correct ✅: {correctCount}</div>
      </div>
    );
  }
}