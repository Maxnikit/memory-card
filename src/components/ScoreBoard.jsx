const ScoreBoard = ({ score, highScore }) => {
  return (
    <div className="score-board">
      <h1 className="score">Score: {score}</h1>
      <h1 className="score highScore">High Score: {highScore}</h1>
    </div>
  );
};
export default ScoreBoard;
