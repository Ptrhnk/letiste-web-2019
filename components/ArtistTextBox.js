import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

import { globalBorder, globalBlack } from "../constants";

const TextBox = styled(animated.div)`
  display: flex;
  flex-shrink: 1;
  flex-grow: 0;
  border: ${globalBorder};
  background-color: white;
  max-width: 100%;
  padding: 1rem;
  cursor: pointer;

  @media (max-width: 700px) {
    /* width: 96%; */
  }
`;

const ArtistTextBox = ({ text, onClick }) => {
  const boxAnimation = useSpring({
    opacity: 1,
    transform: "translate(0, 0)",
    from: { opacity: 0, transform: "translate(20rem, 0)" },
    config: { tension: 200, friction: 70, mass: 6 },
    delay: 500
  });
  return (
    <TextBox style={boxAnimation} onClick={onClick}>
      <p>{text}</p>
    </TextBox>
  );
};

export default ArtistTextBox;
