import React from "react";
import styled, { keyframes } from "styled-components";

import { globalBlack } from "../constants";

const Container = styled.div`
  position: absolute;
  top: 34%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 26%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    height: 20%;
    top: 40%;
  }
`;

const StyledSvg = styled.svg`
  height: 100%;
  z-index: 10000;
`;

const movePoly1 = keyframes`
  0%, 30% {
    stroke-dashoffset: 200;
  }
  70%, 100% {
    stroke-dashoffset: 0;
  }
`;
const Polyline1 = styled.polyline`
  fill: none;
  stroke: ${globalBlack};
  stroke-linejoin: round;
  stroke-width: 9px;
  stroke-linecap: round;
  stroke-dasharray: 20;

  stroke-dasharray: 200;
  /* stroke-dashoffset: 0; */

  animation: ${movePoly1} 1.6s ease-in-out;
  animation-delay: 1s;
  animation-fill-mode: backwards;
`;

const movePoly2 = keyframes`
  0%, 30% {
    stroke-dashoffset: 220;
  }
  70%, 100% {
    stroke-dashoffset: 0;
  }
`;
const Polyline2 = styled.polyline`
  fill: none;
  stroke: ${globalBlack};
  stroke-linejoin: round;
  stroke-width: 9px;
  stroke-linecap: round;

  stroke-dasharray: 220;
  /* stroke-dashoffset: 220; */

  animation: ${movePoly2} 1.6s ease-in-out;
  animation-delay: 1.5s;
  animation-fill-mode: backwards;
`;

const movePoly3 = keyframes`
  0%, 30% {
    stroke-dashoffset: 400;
  }
  70%, 100% {
    stroke-dashoffset: 0;
  }
`;
const Polyline3 = styled.polyline`
  fill: none;
  stroke: ${globalBlack};
  stroke-linejoin: round;
  stroke-width: 9px;
  stroke-linecap: round;
  stroke-dasharray: 400;
  /* stroke-dashoffset: 400; */

  animation: ${movePoly3} 1.8s ease-in-out;
  animation-delay: 2.1s;
  animation-fill-mode: backwards;
`;

const moveLine = keyframes`
  0%, 30% {
    stroke-dashoffset: 200;
  }
  70%, 100% {
    stroke-dashoffset: 0;
  }
`;
const CenterLine = styled.line`
  fill: none;
  stroke: ${globalBlack};
  stroke-linejoin: round;
  stroke-width: 9px;
  stroke-linecap: round;
  stroke-dasharray: 200;
  /* stroke-dashoffset: -200; */

  animation: ${moveLine} 2.1s ease-in-out;
  animation-delay: 2.7s;
  animation-fill-mode: backwards;
`;

const LogoLetiste = () => {
  const x1 = 4.5;
  const y1 = 186.82;
  const x2 = 83.99;
  const y2 = 155.51;

  return (
    <>
      <Container>
        <StyledSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 167.98 191.32"
        >
          <Polyline1 points={`4.5 186.82 83.99 155.51 163.48 186.82`} />
          <Polyline2 points={`4.5 186.82 83.99 112.31 163.48 186.82`} />
          <Polyline3 points={`4.5 186.82 83.99 4.5 163.48 186.82`} />
          <CenterLine x1="83.99" y1="175.51" x2="83.99" y2="4.5" />
        </StyledSvg>
      </Container>
    </>
  );
};

export default LogoLetiste;
