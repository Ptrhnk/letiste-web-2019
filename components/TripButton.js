import React, { useState } from "react";
import styled from "styled-components";
// import { Spring, config } from "react-spring/renderprops.cjs";
import { animated, useSpring, config } from "react-spring";

import layerOne from "../img/grafika/background.png";

const Button = styled(animated.a)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10000;
  text-decoration: none;

  padding: 0.6rem 0.9rem;
  color: rgba(255, 255, 255, 1);
  border: 2px solid rgba(255, 255, 255, 1);
  letter-spacing: 0.2rem;
  border-radius: 2rem;
  font-size: 1rem;
  font-weight: 400;
  outline: none;
  box-shadow: none;
  background-image: url(${layerOne});
  background-size: 3000% 3000%;
  background-position: center;
  cursor: pointer;
  box-shadow: 0rem 0rem 0.6rem rgba(0, 0, 0, 0.3);

  transition: all 0.5s ease;

  @media (max-width: 700px) {
    font-size: 0.8rem;
    padding: 0.4rem 0.7rem;
  }
  @media (min-width: 700px) {
    :hover {
      padding: 1.2rem 1.4rem;
      background-size: 110% 110%;
      transform: scale(10) translate(-5%, -5%);
      border: 1px solid rgba(44, 42, 36, 1);
      font-size: 0.8rem;
      opacity: 1;
      color: rgba(44, 42, 36, 1);
    }
  }

  @media (min-width: 1000px) {
    :hover {
      background-size: 110% 110%;
    }
  }
  @media (min-width: 1200px) {
    :hover {
      background-size: 130% 130%;
    }
  }
  @media (min-width: 1400px) {
    :hover {
      background-size: 160% 160%;
    }
  }
  @media (min-width: 1600px) {
    :hover {
      background-size: 190% 190%;
    }
  }

  /* :focus :active {
    transform: scale(9.9);
  } */
`;

const TripButton = ({ onClick, name, href }) => {
  // const [hovered, setHovered] = useState(true);

  // const hoverState = useSpring({
  //   transform: hovered ? "scale(2)" : "scale(1)",
  //   config: { tension: 550, friction: 2, mass: 1 }
  // });

  return (
    <>
      <Button
        onClick={onClick}
        href={href}
        target="_blank"
        // onMouseEnter={() => setHovered(true)}
        // onMouseLeave={() => setHovered(false)}
      >
        {name}
      </Button>
    </>
  );
};

export default TripButton;
