import React from "react";
import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <>
      <ScoreContainer>
        <h1>{score}</h1>
        <p>Total Score</p>
      </ScoreContainer>
    </>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  text-align: center;

  h1 {
    line-height: 100px;
    font-size: 100px;
  }

  p {
    font-size: 24px;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 70px;
      line-height: 70px;
    }

    p {
      font-size: 20px;
    }
  }
`;