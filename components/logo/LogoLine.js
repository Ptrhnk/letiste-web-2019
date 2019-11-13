import React from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

const Line = styled(animated.line)`
  fill: none;
  stroke: rgba(255, 255, 255, 0.8);
  stroke-linejoin: round;
  stroke-width: 5px;
  stroke-linecap: round;
  stroke-dasharray: 220;
`;

const LogoLine = ({ key, x1, y1, x2, y2, blick, style }) => {
  const animations = useSpring({
    opacity: blick ? 1 : 0.1,
    strokeWidth: blick ? `${2}px` : `${0}px`,
    // strokeDasharray: blick ? 30 : 31,
    // strokeDashoffset: blick ? 50 : 55,
    config: { tension: 600, friction: 10, mass: 1 }
  });

  return (
    <Line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      blick={blick ? 1 : 0}
      style={animations}
    />
  );
};

export default LogoLine;
