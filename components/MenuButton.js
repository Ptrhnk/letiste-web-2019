import React, { useState } from "react";
import styled from "styled-components";
import {
  Spring,
  animated,
  interpolate,
  config
} from "react-spring/renderprops.cjs";

import layerOne from "../img/grafika/vrstva1.png";

const Button = styled(animated.button)`
  margin: 0.4rem;
  padding: 0.6rem 0.9rem;
  border: 2px solid rgba(44, 42, 36, 0);
  color: rgba(44, 42, 36, 1);
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
  /* :hover {
    padding: 1rem 1.3rem;
    background-size: 150% 150%;
    transform: scale(10);
    border: 0.5px solid rgba(44, 42, 36, 1);
    font-size: 0.8rem;
    opacity: 1;
  } */

  /* :focus :active {
    box-shadow: 0rem 0rem 0.2rem rgba(0, 0, 0, 0.3);
    transform: scale(9.9);
  } */
`;

const MenuButton = ({ onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <Spring
        native
        reset
        config={{ tension: 550, friction: 1, mass: 1 }}
        config={config.wobbly}
        // from={{ opacity: 0, scale: 0.1 }}
        to={{
          opacity: 1,
          scale: `scale(${hovered ? 10 : 1})`,
          bgSize: "150% 150%"
        }}
      >
        {({ scale, opacity, bgSize }) => (
          <Button
            onClick={onClick}
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
            style={{
              opacity,
              transform: scale,
              backgroundSize: bgSize
            }}
          >
            trip
          </Button>
        )}
      </Spring>
    </>
  );
};

export default MenuButton;
