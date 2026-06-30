import React from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);
  const generateRandomNumber = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  };
  const resetScore = () => {
    setScore(0);
  };
  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    setError("");
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };
  return (
    <>
      <MainContainer>
        <div className="top_section">
          <TotalScore score={score} />
          <NumberSelector
            error={error}
            setError={setError}
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
          />
        </div>
        <RoleDice currentDice={currentDice} roleDice={roleDice} />
        <div className="btn">
          <OutlineButton onClick={resetScore}>Reset</OutlineButton>
          <Button onClick={() => setShowRules((prev) => !prev)}>
            {showRules ? "Hide" : "show"} Rules
          </Button>
        </div>
        {showRules && <Rules />}
      </MainContainer>
    </>
  );
};

export default GamePlay;
const MainContainer = styled.div`
  padding: 30px 20px;

  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    max-width: 1200px;
    margin: 0 auto;
    gap: 30px;
  }

  .btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-top: 40px;
  }

  @media (max-width: 768px) {
    .top_section {
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }
  }
`;