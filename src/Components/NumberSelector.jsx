import React from "react";
import styled from "styled-components";

const NumberSelector = ({
  error,
  setError,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <>
      <NumberSelectorContainer>
        <p className="error">{error}</p>

        <div className="flex">
          {arrNumber.map((value, i) => (
            <Box
              key={i}
              isSelected={value === selectedNumber}
              onClick={() => numberSelectorHandler(value)}
            >
              {value}
            </Box>
          ))}
        </div>

        <p>Select Number</p>
      </NumberSelectorContainer>
    </>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 15px;

  .flex {
    display: flex;
    gap: 15px;
  }

  p {
    font-size: 24px;
    font-weight: 700;
  }

  .error {
    color: red;
    min-height: 24px;
  }

  @media (max-width: 768px) {
    align-items: center;

    .flex {
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  @media (max-width: 480px) {
    .flex {
      gap: 10px;
    }

    p {
      font-size: 20px;
    }

    .error {
      text-align: center;
    }
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;

  background-color: ${(props) =>
    props.isSelected ? "black" : "white"};

  color: ${(props) =>
    props.isSelected ? "white" : "black"};

  @media (max-width: 480px) {
    width: 55px;
    height: 55px;
    font-size: 20px;
  }
`;