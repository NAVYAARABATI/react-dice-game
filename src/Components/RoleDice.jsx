import React, { useState } from "react";
import styled from "styled-components";

const RoleDice = ({roleDice, currentDice }) => {
  return (
    <>
      <DiceContainer>
        <div className="dice" onClick={roleDice}>
          <img src={`/images/dice/dice_${currentDice}.png`} alt="dice_1" />
        </div>
        <p>Click on Dice to roll</p>
      </DiceContainer>
    </>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  img {
    cursor: pointer;
    width: 200px;
  }

  p {
    margin-top: 15px;
    font-size: 22px;
    font-weight: 500;
  }

  @media (max-width: 480px) {
    img {
      width: 150px;
    }

    p {
      font-size: 18px;
      text-align: center;
    }
  }
`;