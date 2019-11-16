import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

const Line = styled(animated.line)`
  fill: none;
  /* stroke: rgba(255, 255, 255, 0.7); */
  stroke-linejoin: round;
  stroke-width: 20px;
  stroke-linecap: round;
  stroke-dasharray: 0 20;
  stroke-dashoffset: 10;
  /* stroke-dasharray: ${({ dash }) => dash}; */
`;

const LogoLine = ({ x1, y1, x2, y2, blick }) => {
  const [offset, setOffset] = useState(3);
  const [space, setSpace] = useState(20);
  useEffect(() => {
    setOffset(Math.floor(Math.random() * 4 + 8));
    setSpace(Math.floor(Math.random() * 8 + 16));
  }, [blick]);

  const flashAnimations = useSpring({
    config: {
      tension: blick ? 200 : 60,
      friction: blick ? 20 : 100,
      mass: blick ? 2 : 1
    },
    stroke: blick ? `rgba(255, 60, 100, .9)` : `rgba(255, 0, 220, 0.0)`,
    strokeWidth: blick ? `${6}px` : `${1}px`,
    strokeDashoffset: offset,
    strokeDasharray: `0 ${space}`
    // x1: x1,
    // y1: y1,
    // x2: x2,
    // y2: y2
    // stroke: `rgba(255, ${blick ? 255 : 20}, 255, ${blick ? 0.8 : 0.1})`
  });
  const pointMovement = useSpring({
    config: { tension: 200, friction: 20, mass: 2 },
    x1: x1,
    y1: y1,
    x2: x2,
    y2: y2
  });

  return (
    <Line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      blick={blick ? 1 : 0}
      // dash={blick ? Math.floor(Math.random() * 200 + 20) : 12}
      dash={blick ? "220" : "20 5"}
      style={flashAnimations}
    />
  );
};

export default LogoLine;
