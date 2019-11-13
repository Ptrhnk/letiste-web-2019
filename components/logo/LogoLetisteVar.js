import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSpring, useTrail, animated, config } from "react-spring";

import LogoLine from "./LogoLine";

const Container = styled.div`
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

const point1 = { x: 4.5, y: 186.82 };
const point2 = { x: 83.99, y: 175.51 };
const point3 = { x: 163.48, y: 186.82 };
const point4 = { x: 83.99, y: 112.31 };
const point5 = { x: 83.99, y: 4.5 };

const lines = [
  { x1: point3.x, y1: point3.y, x2: point2.x, y2: point2.y },
  { x1: point1.x, y1: point1.y, x2: point2.x, y2: point2.y },
  { x1: point3.x, y1: point3.y, x2: point4.x, y2: point4.y },
  { x1: point1.x, y1: point1.y, x2: point4.x, y2: point4.y },
  { x1: point3.x, y1: point3.y, x2: point5.x, y2: point5.y },
  { x1: point1.x, y1: point1.y, x2: point5.x, y2: point5.y },
  { x1: point2.x, y1: point2.y, x2: point5.x, y2: point5.y }
];

const LogoLetiste = () => {
  const [flipped, setFlipped] = useState(true);
  const [flipArr, setFlipArr] = useState(Array(8).fill(false));

  const animations = useSpring({
    // opacity: flipped ? 1 : 0.8,
    // strokeWidth: flipped ? `${4}px` : `${3}px`,
    // strokeDasharray: flipped ? 2 : 5,
    // strokeDashoffset: flipped ? 50 : 55,
    config: { tension: 500, friction: 2, mass: 1 }
  });

  const trail = useTrail(lines.length, {
    config: { tension: 500, friction: 40, mass: 2 },
    // strokeDashoffset: flipped ? 15 : 55,
    // strokeDasharray: flipped ? 3 : 200,
    stroke: flipped ? "turquoise" : "palevioletred"
  });

  useEffect(() => void setInterval(() => flash(), 100), []);
  // useEffect(() => void setInterval(() => flip(), 4000), []);
  const flip = () => {
    setFlipped(flipped => !flipped);
  };

  const flash = () => {
    const index = Math.floor(Math.random() * flipArr.length);
    const pravda = flipArr[index];
    setTimeout(() => {
      // flipArr[index] = !pravda;
      flipArr[index] = true;
      setFlipArr(flipArr.slice());
      setTimeout(() => {
        // flipArr[index] = pravda;
        flipArr[index] = false;
        setFlipArr(flipArr.slice());
      }, Math.floor(Math.random() * 300 + 550));
    }, Math.floor(Math.random() * 500));
  };

  return (
    <>
      <Container onClick={() => setFlipped(!flipped)}>
        <StyledSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 167.98 191.32"
        >
          {lines.map((line, key) => {
            return (
              <LogoLine
                key={key}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                blick={flipArr[key]}
                // style={animations}
              />
            );
          })}
          {/* {trail.map((style, key) => (
            <LogoLine
              key={key}
              x1={lines[key].x1}
              y1={lines[key].y1}
              x2={lines[key].x2}
              y2={lines[key].y2}
              blick={flipArr[key]}
              style={style}
            />
          ))} */}
        </StyledSvg>
      </Container>
    </>
  );
};

export default LogoLetiste;
