import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSpring, useTrail, animated, config } from "react-spring";

import LogoLine from "./LogoLine";

const Container = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 50%;
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

const p1 = { x: 44.5, y: 226.82 };
const p2 = { x: 123.99, y: 215.51 };
const p3 = { x: 203.48, y: 226.82 };
const p4 = { x: 123.99, y: 152.31 };
const p5 = { x: 123.99, y: 44.5 };
const pointsInit = [p1, p2, p3, p4, p5];

const LogoLetiste = () => {
  const [on, setOn] = useState(true);
  const [flipArr, setFlipArr] = useState(Array(8).fill(false));
  const [point1, setPoint1] = useState(p1);
  const [point2, setPoint2] = useState(p2);
  const [point3, setPoint3] = useState(p3);
  const [point4, setPoint4] = useState(p4);
  const [point5, setPoint5] = useState(p5);
  // const [points, setPoints] = useState(pointsInit);

  const lines = [
    { x1: point3.x, y1: point3.y, x2: point2.x, y2: point2.y },
    { x1: point1.x, y1: point1.y, x2: point2.x, y2: point2.y },
    { x1: point3.x, y1: point3.y, x2: point4.x, y2: point4.y },
    { x1: point1.x, y1: point1.y, x2: point4.x, y2: point4.y },
    { x1: point3.x, y1: point3.y, x2: point5.x, y2: point5.y },
    { x1: point1.x, y1: point1.y, x2: point5.x, y2: point5.y },
    { x1: point2.x, y1: point2.y, x2: point5.x, y2: point5.y }
  ];
  // const lines = [
  //   { x1: points[2].x, y1: points[2].y, x2: points[1].x, y2: points[1].y },
  //   { x1: points[0].x, y1: points[0].y, x2: points[1].x, y2: points[1].y },
  //   { x1: points[2].x, y1: points[2].y, x2: points[3].x, y2: points[3].y },
  //   { x1: points[0].x, y1: points[0].y, x2: points[3].x, y2: points[3].y },
  //   { x1: points[2].x, y1: points[2].y, x2: points[4].x, y2: points[4].y },
  //   { x1: points[0].x, y1: points[0].y, x2: points[4].x, y2: points[4].y },
  //   { x1: points[1].x, y1: points[1].y, x2: points[4].x, y2: points[4].y }
  // ];

  // useEffect(() => void setInterval(() => flash(), 200), []);
  // useEffect(() => void setInterval(() => movePoint(), 1000), []);

  const movePoint = () => {
    // setTimeout(() => setShape(), Math.floor(Math.random() * 500 + 100));
    setTimeout(() => {
      const random = Math.floor(Math.random() * 2);
      if (random === 1) {
        setPoint1({
          x: p1.x,
          y: Math.floor(Math.random() * 10 + p1.y - 5)
        });
      } else {
        setPoint3({
          x: p3.x,
          y: Math.floor(Math.random() * 10 + p3.y - 5)
        });
      }
    }, Math.floor(Math.random() * 500 + 100));
  };

  const flash = () => {
    if (on) {
      const index = Math.floor(Math.random() * flipArr.length);
      setTimeout(() => {
        flipArr[index] = true;
        setFlipArr(flipArr.slice());
        setTimeout(() => {
          flipArr[index] = false;
          setFlipArr(flipArr.slice());
        }, Math.floor(Math.random() * 500 + 2000));
      }, Math.floor(Math.random() * 4000));
    }
  };

  return (
    <>
      <Container onClick={() => setOn(!on)}>
        <StyledSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 247.98 271.32"
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
        </StyledSvg>
      </Container>
    </>
  );
};

export default LogoLetiste;
