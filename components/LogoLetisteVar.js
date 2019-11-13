import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useSpring, useTrail, animated, config } from "react-spring";

import { globalBlack } from "../constants";
import { red } from "ansi-colors";

const lineColor = "rgba(255, 255, 255, 0.8)";
const linejoin = "round";
const linecap = "round";

const Container = styled.div`
  /* background-color: ${globalBlack}; */
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;

  @media (max-width: 700px) {
    height: 20%;
    top: 40%;
  }
`;

const StyledSvg = styled.svg`
  height: 100%;
  z-index: 10000;
`;

const Line = styled(animated.line)`
  fill: none;
  /* stroke: ${lineColor}; */
  stroke: rgba(255, 255, 255, .6);
  stroke-linejoin: ${linejoin};
  stroke-width: 2px;
  stroke-linecap: ${linecap};
  stroke-dasharray: 220;
  /* opacity: ${({ opacity }) => opacity}; */
  /* stroke: ${({ blick }) =>
    blick ? `rgba(255, 255, 255, ${0.8})` : `rgba(255, 255, 255, ${0.0})`}; */
  opacity: ${({ blick }) => (blick ? 1 : 0)};

  /* stroke-dashoffset: -200; */
`;

const lines = [
  { x1: "163.48", y1: "186.82", x2: "83.99", y2: "175.51" },
  { x1: "4.5", y1: "186.82", x2: "83.99", y2: "175.51" },
  { x1: "163.48", y1: "186.82", x2: "83.99", y2: "112.31" },
  { x1: "4.5", y1: "186.82", x2: "83.99", y2: "112.31" },
  { x1: "163.48", y1: "186.82", x2: "83.99", y2: "4.5" },
  { x1: "4.5", y1: "186.82", x2: "83.99", y2: "4.5" },
  { x1: "83.99", y1: "175.51", x2: "83.99", y2: "4.5" }
];

const LogoLetiste = () => {
  const [flipped, setFlipped] = useState(true);
  const [flipArr, setFlipArr] = useState(Array(8).fill(true));

  const animations = useSpring({
    // opacity: flipped ? 1 : 0.8,
    // strokeWidth: flipped ? `${4}px` : `${3}px`,
    // strokeDasharray: flipped ? 2 : 5,
    strokeDashoffset: flipped ? 50 : 55,
    config: { tension: 500, friction: 2, mass: 1 }
  });

  const trail = useTrail(lines.length, {
    config: { tension: 500, friction: 40, mass: 2 },
    // strokeDashoffset: flipped ? 15 : 55,
    // strokeDasharray: flipped ? 3 : 200,
    stroke: flipped ? "turquoise" : "palevioletred"
  });

  useEffect(() => void setInterval(() => flash(), 200), []);
  // useEffect(() => void setInterval(() => flip(), 4000), []);
  const flip = () => {
    setFlipped(flipped => !flipped);
  };

  const flash = () => {
    const index = Math.floor(Math.random() * flipArr.length);
    const pravda = flipArr[index];
    setTimeout(() => {
      flipArr[index] = !pravda;
      setFlipArr(flipArr.slice());
      setTimeout(() => {
        flipArr[index] = pravda;
        setFlipArr(flipArr.slice());
      }, Math.floor(Math.random() * 1000 + 100));
    }, Math.floor(Math.random() * 200));
  };

  return (
    <>
      <Container onClick={() => setFlipped(!flipped)}>
        <StyledSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 167.98 191.32"
        >
          {/* {lines.map((line, key) => {
            return (
              <Line
                key={key}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                blick={flipArr[key]}
                style={animations}
              />
            );
          })} */}
          {trail.map((style, key) => (
            <Line
              key={key}
              x1={lines[key].x1}
              y1={lines[key].y1}
              x2={lines[key].x2}
              y2={lines[key].y2}
              blick={flipArr[key]}
              style={style}
            />
          ))}
        </StyledSvg>
      </Container>
    </>
  );
};

export default LogoLetiste;
