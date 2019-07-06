import React from "react";
import styled from "styled-components";

import { globalBlack, globalBorder } from "../constants";

const Button = styled.div`
  margin: 0.5rem;
  padding: 0.6rem 1rem;
  color: ${globalBlack};
  border: ${globalBorder};
  letter-spacing: 0.1rem;
  font-size: 1rem;
  outline: none;
  background-color: white;
  background-size: 3000% 3000%;
  background-position: center;
  cursor: pointer;
  box-shadow: 0rem 0rem 1rem rgba(0, 0, 0, 0.3);

  transition: all 0.5s ease;

  :hover {
    background-color: ${globalBlack};
    color: white;
  }
`;

const MenuButton = ({ onClick, name }) => {
  return (
    <>
      <Button onClick={onClick}>{name}</Button>
    </>
  );
};

export default MenuButton;
