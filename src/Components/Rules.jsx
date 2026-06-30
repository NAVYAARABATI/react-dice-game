import React from "react";
import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          after click on dice if selected number is equal to dice number you
          will get same point as dice{""}
        </p>
        <p>if you get wrong then 2 point will be deducted</p>
      </div>
    </RulesContainer>
  );
};

export default Rules;
const RulesContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  background: #fbf1f1;
  padding: 25px;
  border-radius: 10px;

  h2 {
    font-size: 28px;
  }

  .text {
    margin-top: 20px;
    line-height: 1.8;
  }

  @media (max-width: 768px) {
    width: 90%;

    h2 {
      font-size: 22px;
    }

    .text {
      font-size: 16px;
    }
  }
`;