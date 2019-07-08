import React, { useState } from "react";
import styled from "styled-components";
import { globalBorder, globalBlack } from "../constants";

import HamburgerIcon from "./HamburgerIcon";

const ButtonWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  color: white;
  padding: 0.8rem;
  z-index: 80000;
  outline: none;
  font-size: 1.4rem;
  cursor: pointer;

  transition: all 0.4s ease;

  @media (max-width: 700px) {
    /* padding: 0rem; */
  }
`;

const HamburgerButton = ({ onClick, active }) => {
  return (
    <ButtonWrap onClick={onClick}>
      <HamburgerIcon active={active} />
    </ButtonWrap>
  );
};

export default HamburgerButton;
