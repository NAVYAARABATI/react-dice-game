import React from "react";
import styled from "styled-components";
import { Button } from "../styled/Button";

const Container = styled.div`
  display: flex;
  max-width: 1180px;
  width: 100%;
  margin: 40px auto;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;

  @media (max-width: 480px) {
    max-width: 350px;
  }

  @media (max-width: 380px) {
    max-width: 300px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Head = styled.h1`
  font-size: 90px;
  white-space: nowrap;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 70px;
  }

  @media (max-width: 480px) {
    font-size: 55px;
  }

  @media (max-width: 380px) {
    font-size: 42px;
  }
`;

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <Image src="./images/dices.png" alt="Dice" />
      </div>

      <Content>
        <Head>Dice Game</Head>
        <Button onClick={toggle}>Play Now</Button>
      </Content>
    </Container>
  );
};

export default StartGame;