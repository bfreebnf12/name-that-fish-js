import { Component } from "react";
import "./styles/game-board.css";
import { initialFishes } from "../../data";

export class ClassGameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userGuess: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { userGuess } = this.state;

    const normalizedUserGuess = userGuess.toLowerCase();

    this.props.handleAnswer(normalizedUserGuess);

    this.setState({
      userGuess: "", // Fixed the syntax error here
    });
  };

  render() {
    const { userGuess } = this.state;
    const nextFishToName = initialFishes[this.props.nextFishIndex];

    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={nextFishToName.url} alt={nextFishToName.name} />{" "}
          {/* Fixed the alt attribute */}
        </div>
        <form id="fish-guess-form" onSubmit={this.handleSubmit}>
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            value={userGuess}
            onChange={(e) => this.setState({ userGuess: e.target.value })}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
