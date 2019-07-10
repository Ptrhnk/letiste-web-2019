import React from "react";
import styled from "styled-components";

import { globalBlack, globalBorder } from "../constants";

const Button = styled.div`
  margin: 0.3rem 0;
  padding: 0.5rem 1rem;
  color: ${globalBlack};
  border: ${globalBorder};
  font-size: 1rem;
  outline: none;
  background-color: white;
  background-size: 3000% 3000%;
  background-position: center;
  cursor: pointer;
  box-shadow: 0rem 0rem 0.6rem rgba(0, 0, 0, 0.2);

  transition: all 0.5s ease;

  :hover {
    background-color: ${globalBlack};
    color: white;
  }
`;

const Name = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 2px;
`;

const MenuButton = ({ onClick, name }) => {
  return (
    <>
      <Button onClick={onClick}>
        <Name>{name}</Name>
      </Button>
    </>
  );
};

export default MenuButton;
