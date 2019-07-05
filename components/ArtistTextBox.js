import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

import { globalBorder, globalBlack } from "../constants";

const TextBox = styled(animated.div)`
  border: ${globalBorder};
  background-color: white;
  width: 30rem;
  padding: 1rem;
  margin-top: 2rem;
  cursor: pointer;

  transition: background-color 0.5s ease;

  :hover {
    background-color: ${globalBlack};
    color: white;
  }
`;

const ArtistTextBox = ({ text, onClick }) => {
  const boxAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 }
  });
  return (
    <TextBox style={boxAnimation} onClick={onClick}>
      <p>{text}</p>
    </TextBox>
  );
};

export default ArtistTextBox;
