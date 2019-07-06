import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

import { globalBorder, globalBlack } from "../constants";

const TextBox = styled(animated.div)`
  border: ${globalBorder};
  background-color: white;
  width: 100%;
  padding: 1rem;
  /* margin-top: 2rem; */
  cursor: pointer;

  transition: background-color 0.5s ease;

  @media (max-width: 700px) {
    /* width: 96%; */
  }
`;

const ArtistTextBox = ({ text, onClick }) => {
  const boxAnimation = useSpring({
    opacity: 1,
    transform: "translate(0, 0)",
    from: { opacity: 0, transform: "translate(20rem, 0)" },
    config: { tension: 100, friction: 60, mass: 10 },
    delay: 600
  });
  return (
    <TextBox style={boxAnimation} onClick={onClick}>
      <p>{text}</p>
    </TextBox>
  );
};

export default ArtistTextBox;
