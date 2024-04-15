import { Button } from "@mantine/core";

const Difficulty = ({ setCardAmount }) => {
  return (
    <div className="difficultyButtons">
      <Button onClick={() => setCardAmount(4)}>Easy</Button>
      <Button onClick={() => setCardAmount(8)}>Medium</Button>
      <Button onClick={() => setCardAmount(12)}>Hard</Button>
    </div>
  );
};
export default Difficulty;
