import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSpring, useTrail, animated, config } from "react-spring";

import LogoLine from "./LogoLine";

const Container = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 60%;
  /* width: 80%; */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  /* border: 0.5px dashed grey; */

  @media (max-width: 700px) {
    height: 20%;
    top: 40%;
  }
`;

const StyledSvg = styled.svg`
  margin: 0;
  height: 100%;
  /* width: 90%; */
  z-index: 10000;
  /* border: 0.5px dashed lightgrey; */
`;

const point1 = { x: 24.5, y: 206.82 };
const point2 = { x: 103.99, y: 195.51 };
const point3 = { x: 183.48, y: 206.82 };
const point4 = { x: 103.99, y: 132.31 };
const point5 = { x: 103.99, y: 24.5 };

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

  const movePoint = () => {};

  const flash = () => {
    const index = Math.floor(Math.random() * flipArr.length);
    setTimeout(() => {
      flipArr[index] = true;
      setFlipArr(flipArr.slice());
      setTimeout(() => {
        flipArr[index] = false;
        setFlipArr(flipArr.slice());
      }, Math.floor(Math.random() * 500 + 200));
    }, Math.floor(Math.random() * 5000));
  };

  return (
    <>
      <Container onClick={() => setFlipped(!flipped)}>
        <StyledSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 207.98 231.32"
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
