import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 34%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 13rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    height: 5rem;
  }
`;

const StyledSvg = styled.svg`
  height: 100%;
  width: 100%;
  z-index: 10000;
`;

const move = keyframes`
  0%, 20% {
    /* stroke-dashoffset: 400; */
  }
  80%, 100% {
    stroke-dashoffset: 0;
  }
`;

const movePoly1 = keyframes`
  0%, 30% {
    stroke-dashoffset: -200;
  }
  70%, 100% {
    stroke-dashoffset: 0;
  }
`;
const movePoly2 = keyframes`
  0%, 30% {
    stroke-dashoffset: 220;
  }
  70%, 100% {
    stroke-dashoffset: 0;
  }
`;
const movePoly3 = keyframes`
  0%, 30% {
    stroke-dashoffset: 400;
  }
  70%, 100% {
    stroke-dashoffset: 0;
  }
`;
const moveLine = keyframes`
  0%, 30% {
    stroke-dashoffset: -200;
  }
  70%, 100% {
    stroke-dashoffset: 0;
  }
`;

const Polyline1 = styled.polyline`
  fill: none;
  stroke: rgba(44, 42, 36, 1);
  stroke-linejoin: round;
  stroke-width: 9px;
  stroke-linecap: round;
  stroke-dasharray: 20;

  stroke-dasharray: 200;
  /* stroke-dashoffset: -200; */

  animation: ${movePoly1} 3s ease-out alternate;
  animation-fill-mode: backwards;
`;
const Polyline2 = styled.polyline`
  fill: none;
  stroke: rgba(44, 42, 36, 1);
  stroke-linejoin: round;
  stroke-width: 9px;
  stroke-linecap: round;

  stroke-dasharray: 220;
  /* stroke-dashoffset: 220; */

  animation: ${movePoly2} 3s ease-out alternate;
  animation-delay: 0.7s;
  animation-fill-mode: backwards;
`;
const Polyline3 = styled.polyline`
  fill: none;
  stroke: rgba(44, 42, 36, 1);
  stroke-linejoin: round;
  stroke-width: 9px;
  stroke-linecap: round;
  stroke-dasharray: 400;
  /* stroke-dashoffset: 400; */

  animation: ${movePoly3} 3s ease-out alternate;
  animation-delay: 1.4s;
  animation-fill-mode: backwards;
`;

const Line = styled.line`
  fill: none;
  stroke: rgba(44, 42, 36, 1);
  stroke-linejoin: round;
  stroke-width: 9px;
  stroke-linecap: round;
  stroke-dasharray: 200;
  /* stroke-dashoffset: -200; */

  animation: ${moveLine} 3s ease-out alternate;
  animation-delay: 2.1s;
  animation-fill-mode: backwards;
`;

const LogoLetiste = () => {
  return (
    <>
      <Container>
        <StyledSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 167.98 191.32"
        >
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <Polyline1 points="163.48 186.82 83.99 175.51 4.5 186.82" />
              <Polyline2 points="4.5 186.82 83.99 112.31 163.48 186.82" />
              <Polyline3 points="4.5 186.82 83.99 4.5 163.48 186.82" />
              <Line x1="83.99" y1="4.5" x2="83.99" y2="175.51" />
            </g>
          </g>
        </StyledSvg>
      </Container>
    </>
  );
};

export default LogoLetiste;
