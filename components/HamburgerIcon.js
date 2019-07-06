import React from "react";
import styled from "styled-components";
import { HamburgerElastic } from "react-animated-burgers";

import { globalBlack } from "../constants";

const StyledHamburger = styled(HamburgerElastic)`
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  width: 4.8rem;
  border-radius: 1rem;

  transition: all 0.5s ease;

  @media (max-width: 700px) {
    height: 3.4rem;
    width: 4.2rem;
  }
`;

const HamburgerIcon = ({ active, barColor, buttonColor }) => {
  return (
    <StyledHamburger
      isActive={active}
      barColor={barColor ? barColor : "white"}
      buttonColor={buttonColor ? buttonColor : "black"}
      buttonWidth={36}
    />
  );
};

export default HamburgerIcon;
