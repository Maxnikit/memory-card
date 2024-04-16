import { useEffect, useState, useCallback } from "react";

import { Modal, Button } from "@mantine/core";
import { Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import r6operators from "r6operators";

// default export
import "./App.css";
import CardContainer from "./components/CardContainer";
import ScoreBoard from "./components/ScoreBoard";
import Difficulty from "./components/Difficulty";
// import Modal from "./components/Modal";

function App() {
  const [cardAmount, setCardAmount] = useState(8);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [randomOperators, setRandomOperators] = useState(
    getRandomObjects(r6operators, cardAmount)
  );
  const [clickedOperators, setClickedOperators] = useState([]);

  function getRandomObjects(obj, num) {
    const keys = Object.keys(obj);
    const shuffledKeys = keys.sort(() => 0.5 - Math.random());
    const selectedKeys = shuffledKeys.slice(0, num);
    const selectedObjects = selectedKeys.map((key) => obj[key]);
    return selectedObjects;
  }
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const handleCardClick = (operator) => {
    const clickedOperatorIds = clickedOperators.map((op) => op.id);
    if (clickedOperatorIds.includes(operator.id)) {
      setScore(1);
      setClickedOperators([]);
    } else {
      setClickedOperators((prevOperators) => [...prevOperators, operator]);
      setScore((prevScore) => prevScore + 1);
    }
  };
  const [opened, { open, close }] = useDisclosure(false);
  useEffect(() => {
    if (score === cardAmount) {
      open();
    }
  }, [score, cardAmount, open]);
  useEffect(() => {
    if (score >= highScore) {
      setHighScore(score);
    }
  }, [score, highScore]);
  const handleRestart = useCallback(() => {
    setScore(0);
    setClickedOperators([]);
    setRandomOperators(getRandomOperators(r6operators, cardAmount));
    close();
  }, [cardAmount, close, setScore, setClickedOperators, setRandomOperators]);

  useEffect(() => {
    handleRestart();
  }, [cardAmount, handleRestart]);
  const cardsToDisplay = shuffleArray(randomOperators);
  return (
    <>
      <Modal
        className="modal"
        opened={opened}
        onClose={close}
        withCloseButton={false}
      >
        <Text size="lg">Congratulations!</Text>
        <Text>Your memory is great.</Text>
        <Button color="red" onClick={handleRestart}>
          Get new operators
        </Button>
      </Modal>
      <Difficulty setCardAmount={setCardAmount} />
      <ScoreBoard score={score} highScore={highScore} />
      <CardContainer
        operatorArray={cardsToDisplay} // {randomOperators}
        handleCardClick={handleCardClick}
      />
    </>
  );
}

export default App;
