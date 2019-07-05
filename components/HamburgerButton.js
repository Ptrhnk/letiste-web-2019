import React, { useState } from "react";
import styled from "styled-components";
import { globalBorder, globalBlack } from "../constants";

import HamburgerIcon from "./HamburgerIcon";

const ButtonWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  border: ${globalBorder};
  /* border: 1px solid black; */
  border-radius: 0 0 0 1rem;
  background-color: ${globalBlack};
  background-color: black;
  border: none;
  color: white;
  padding: 0.2rem;
  z-index: 80000;
  outline: none;
  font-size: 1.4rem;
  cursor: pointer;

  transition: all 0.4s ease;

  /* :hover {
    background-color: white;
    color: ${globalBlack};
  } */
`;

const HamburgerButton = ({ onClick, active }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <ButtonWrap
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <HamburgerIcon active={active} />
    </ButtonWrap>
  );
};

export default HamburgerButton;
