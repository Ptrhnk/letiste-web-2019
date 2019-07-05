import React from "react";
import styled from "styled-components";
import { HamburgerElastic } from "react-animated-burgers";

import { globalBlack } from "../constants";

const StyledHamburger = styled(HamburgerElastic)`
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  width: 5rem;

  transition: all 0.5s ease;
`;

const HamburgerIcon = ({ active, barColor, buttonColor }) => {
  return (
    <StyledHamburger
      isActive={active}
      barColor={barColor ? barColor : "white"}
      buttonColor={buttonColor ? buttonColor : "black"}
      buttonWidth={40}
    />
  );
};

export default HamburgerIcon;
