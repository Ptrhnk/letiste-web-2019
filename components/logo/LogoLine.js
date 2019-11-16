import React from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

const Line = styled(animated.line)`
  fill: none;
  stroke: rgba(255, 255, 255, 0.7);
  stroke-linejoin: round;
  stroke-width: 0.5px;
  stroke-linecap: round;
  /* stroke-dasharray: 220; */
  stroke-dasharray: ${({ dash }) => dash};
`;

const LogoLine = ({ key, x1, y1, x2, y2, blick }) => {
  const animations = useSpring({
    config: { tension: 600, friction: 10, mass: 1 },
    // opacity: blick ? 1 : 0,
    strokeWidth: blick ? `${1.8}px` : `${0.4}px`
    // stroke: `rgba(${blick ? Math.floor(Math.random() * 100 + 155) : 255}, ${
    //   blick ? Math.floor(Math.random() * 100 + 155) : 255
    // }, ${blick ? Math.floor(Math.random() * 100 + 155) : 255}, 0.7)`
    // stroke: `rgba(255, ${blick ? 255 : 20}, 255, ${blick ? 0.8 : 0.1})`
    // strokeDasharray: blick ? 30 : 31,
    // strokeDashoffset: blick ? 50 : 55,
  });

  return (
    <Line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      blick={blick ? 1 : 0}
      dash={blick ? 220 : 12}
      style={animations}
    />
  );
};

export default LogoLine;
