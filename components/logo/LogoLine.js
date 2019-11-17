import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

const Line = styled(animated.line)`
  fill: none;
  stroke: rgba(255, 255, 255, 0.7);
  stroke-linejoin: round;
  stroke-width: 1px;
  stroke-linecap: round;
  /* stroke-dasharray: 0 8; */
  stroke-dashoffset: 32;
`;

const LogoLine = ({ x1, y1, x2, y2, blick }) => {
  const [offset, setOffset] = useState(3);
  const [space, setSpace] = useState(20);
  const [width, setWidth] = useState(6);
  useEffect(() => {
    if (!blick) {
      setOffset(Math.floor(Math.random() * 2 + 8));
      setSpace(Math.floor(Math.random() * 8 + 16));
    } else {
      // setWidth(Math.floor(Math.random() * 2 + 5));
    }
  }, [blick]);

  const flashAnimations = useSpring({
    config: {
      tension: blick ? 200 : 60,
      friction: blick ? 20 : 100,
      mass: blick ? 2 : 1
    },
    // stroke: blick ? `rgba(255, 40, 150, .9)` : `rgba(255, 0, 220, 0.4)`,
    stroke: blick ? `rgba(0, 230, 255, 1)` : `rgba(0, 100, 255, 0.4)`,
    strokeWidth: blick ? `${width}px` : `${0}px`,
    strokeDashoffset: offset,
    strokeDasharray: `0 ${space}`,
    x1: x1,
    y1: y1,
    x2: x2,
    y2: y2
    // stroke: `rgba(255, ${blick ? 255 : 20}, 255, ${blick ? 0.8 : 0.1})`
  });
  const pointMovement = useSpring({
    config: { tension: 200, friction: 2, mass: 2 },
    x1: x1,
    y1: y1,
    x2: x2,
    y2: y2
  });

  return (
    <Line
      x1={pointMovement.x1}
      y1={pointMovement.y1}
      x2={pointMovement.x2}
      y2={pointMovement.y2}
      blick={blick ? 1 : 0}
      style={flashAnimations}
    />
  );
};

export default LogoLine;
