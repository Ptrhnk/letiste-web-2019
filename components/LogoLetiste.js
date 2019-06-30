import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 34%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 13rem;
  /* width: 10rem; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSvg = styled.svg`
  height: 100%;
  width: 100%;
  z-index: 10000;
`;

const Polyline = styled.polyline`
  fill: none;
  stroke: rgba(44, 42, 36, 1);
  /* stroke: pink; */
  stroke-linejoin: round;
  stroke-width: 9px;
  stroke-linecap: round;
`;
const Polygon = styled.polygon`
  fill: none;
  stroke: rgba(44, 42, 36, 1);
  /* stroke: blue; */
  stroke-linejoin: round;
  stroke-width: 9px;
  /* stroke-dashoffset: 1rem; */
  /* stroke-dasharray: 2rem; */
`;
const Line = styled.line`
  fill: none;
  stroke: rgba(44, 42, 36, 1);
  /* stroke: red; */
  stroke-linejoin: round;
  stroke-width: 9px;
  stroke-linecap: round;
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
              <Polyline points="163.48 186.82 83.99 175.51 4.5 186.82" />
              <Polyline points="4.5 186.82 83.99 112.31 163.48 186.82" />
              <Polyline points="4.5 186.82 83.99 4.5 163.48 186.82" />
              <Line x1="83.99" y1="4.5" x2="83.99" y2="175.51" />
              {/* <Polygon points="4.5 186.82 83.99 4.5 163.48 186.82 83.99 175.51 4.5 186.82" /> */}
            </g>
          </g>
        </StyledSvg>
      </Container>
    </>
  );
};

export default LogoLetiste;
