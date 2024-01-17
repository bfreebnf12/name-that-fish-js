import "./styles/score-board.css";


export function FunctionalScoreBoard({ correctCount, incorrectCount, answersLeft }) {

  const remainingAnswers = answersLeft.filter((answer) => !answer.guessed);

  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {remainingAnswers.map((answer) => (
          <div key={answer.name} className="choice">
            {answer.name}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
}
