import React, { useState } from "react";
import styled from "styled-components";
// import { Spring, config } from "react-spring/renderprops.cjs";
import { animated, useSpring, config } from "react-spring";

import layerOne from "../img/grafika/background.png";

const Button = styled(animated.div)`
  margin: 0.4rem;
  padding: 0.6rem 0.9rem;
  color: rgba(255, 255, 255, 1);
  border: 2px solid rgba(255, 255, 255, 1);
  letter-spacing: 0.1rem;
  border-radius: 2rem;
  font-size: 1rem;
  outline: none;
  box-shadow: none;
  background-image: url(${layerOne});
  background-size: 3000% 3000%;
  background-position: center;
  cursor: pointer;
  box-shadow: 0rem 0rem 0.6rem rgba(0, 0, 0, 0.3);

  transition: all 0.5s ease;
  :hover {
    padding: 1.2rem 1.3rem;
    background-size: 150% 150%;
    transform: scale(6);
    border: 1px solid rgba(44, 42, 36, 1);
    font-size: 0.8rem;
    opacity: 1;
    color: rgba(44, 42, 36, 1);
  }

  /* :focus :active {
    box-shadow: 0rem 0rem 0.2rem rgba(0, 0, 0, 0.3);
    transform: scale(9.9);
  } */
`;

const MenuButton = ({ onClick, name }) => {
  const [hovered, setHovered] = useState(false);

  const hoverState = useSpring({
    transform: hovered
      ? "translate3d(0px, 0px, 0px) scale(2)"
      : "translate3d(0px, 0px, 0px) scale(1)",
    config: { tension: 550, friction: 2 }
  });

  return (
    <>
      <Button
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {name}
      </Button>
    </>
  );
};

export default MenuButton;
