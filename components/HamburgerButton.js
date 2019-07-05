import React from "react";
import styled from "styled-components";
import { globalBorder, globalBlack } from "../constants";

const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: ${globalBorder};
  border-radius: 0 0 0 0.7rem;
  background-color: ${globalBlack};
  color: white;
  padding: 0.8rem;
  z-index: 80000;
  outline: none;
  font-size: 1.4rem;
  cursor: pointer;

  transition: all 0.4s ease;

  :hover {
    background-color: white;
    color: ${globalBlack};
  }
`;

const HamburgerButton = ({ onClick }) => {
  return <Button onClick={onClick}>Menu</Button>;
};

export default HamburgerButton;
