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
  border-radius: 2rem;
  font-size: 1rem;
  font-weight: 400;
  outline: none;
  box-shadow: none;
  background-image: url(${layerOne});
  background-size: 3000% 3000%;
  background-position: center;
  cursor: pointer;
  box-shadow: 0rem 0rem 0.6rem rgba(0, 0, 0, 0.3);

  transition: all 0.5s ease;

  :hover {
    /* padding: 1.2rem 1.4rem;
    background-size: 150% 150%;
    border: 1px solid rgba(44, 42, 36, 1);
    font-size: 0.8rem; */
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
