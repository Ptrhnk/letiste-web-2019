import React from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

import { globalBorder } from "../constants";

const NameBox = styled(animated.div)`
  padding: 1rem 1rem;
  margin: 0 1rem 1rem 0;
  display: flex;
  justify-content: center;
  align-self: flex-start;

  border: ${globalBorder};
  background-color: white;
  color: black;
  text-transform: uppercase;
  cursor: pointer;
  white-space: pre-wrap;

  transition: all 0.5s ease;
`;

const ArtistNameBox = ({ onClick, name }) => {
  const animation = useSpring({
    opacity: 1,
    transform: "translate(0, 0)",
    from: { opacity: 0, transform: "translate(20rem, 0)" },
    config: { tension: 500, friction: 10, mass: 1 },
    delay: 100
  });
  return (
    <NameBox onClick={onClick} style={animation}>
      {name}
    </NameBox>
  );
};

export default ArtistNameBox;
