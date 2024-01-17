import { useState } from "react";
import "./styles/game-board.css";
import { Images } from "../../assets/Images";


export const initialFishes = [
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

export function FunctionalGameBoard({ nextFishIndex, handleAnswer }) {
  const [userGuess, setUserGuess] = useState("");
  //const [isCorrect, setIsCorrect] = useState(null);

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