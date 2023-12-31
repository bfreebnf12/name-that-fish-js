import React, { Component } from "react";
import "./styles/game-board.css";
import { Images } from "../../assets/Images";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

export class ClassGameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFishIndex: 0,
      userGuess: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { currentFishIndex, userGuess } = this.state;
    const nextFishToName = initialFishes[currentFishIndex];
    const normalizedUserGuess = userGuess.toLowerCase();
    const normalizedFishName = nextFishToName.name.toLowerCase();

    const isCorrect = normalizedUserGuess === normalizedFishName;

    this.props.handleAnswer(this.state.userGuess);
    if (isCorrect) {
      console.log("Correct guess!");
    } else {
      console.log("Incorrect guess!");
    }

    this.setState((prevState) => ({
      currentFishIndex: (prevState.currentFishIndex + 1) % initialFishes.length,
      userGuess: "",
    }));
  };

  render() {
    const { currentFishIndex, userGuess } = this.state;
    const nextFishToName = initialFishes[currentFishIndex];

    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={nextFishToName.url} alt={nextFishToName.name} />
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
