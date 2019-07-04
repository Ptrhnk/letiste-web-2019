import React, { useState } from "react";
import styled from "styled-components";
// import { Spring, config } from "react-spring/renderprops.cjs";
import { animated, useSpring, config } from "react-spring";

import layerOne from "../img/grafika/background.png";
import { globalBlack, globalBorder } from "../constants";

const Button = styled(animated.div)`
  margin: 0.4rem;
  padding: 0.6rem 0.9rem;
  color: ${globalBlack};
  border: ${globalBorder};
  letter-spacing: 0.2rem;
  font-size: 1rem;
  font-weight: 400;
  outline: none;
  box-shadow: none;
  background-color: white;
  background-size: 3000% 3000%;
  background-position: center;
  cursor: pointer;
  box-shadow: 0rem 0rem 0.6rem rgba(0, 0, 0, 0.3);

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
