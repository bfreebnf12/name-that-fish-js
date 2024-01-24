import { Component } from "react";
import "./styles/score-board.css";

export class ClassScoreBoard extends Component {
  constructor(props) {
    super(props);
  }

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
