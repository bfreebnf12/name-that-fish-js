import { useState } from "react";
import "./styles/game-board.css";

export function FunctionalGameBoard({ nextFishData, handleAnswer }) {
  const [userGuess, setUserGuess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const normalizedUserGuess = userGuess.toLowerCase();

    handleAnswer(normalizedUserGuess);

    setUserGuess("");
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishData.url} alt={nextFishData.name} />
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
