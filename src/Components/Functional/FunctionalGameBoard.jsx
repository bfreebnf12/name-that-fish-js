import { useState } from "react";
import "./styles/game-board.css";
import { initialFishes } from "../../data";

export function FunctionalGameBoard({ nextFishIndex, handleAnswer }) {
  const [userGuess, setUserGuess] = useState("");

  const nextFishToName = initialFishes[nextFishIndex];

  const handleSubmit = (e) => {
    e.preventDefault();

    const normalizedUserGuess = userGuess.toLowerCase();

    handleAnswer(normalizedUserGuess);

    setUserGuess("");
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form id="fish-guess-form" onSubmit={handleSubmit}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
