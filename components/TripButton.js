import React from "react";
import styled, { keyframes } from "styled-components";
import { animated } from "react-spring";

import layerOne from "../img/grafika/pozadi-02.jpeg";
import { globalBlack } from "../constants";

const initScale = keyframes`
  0% {
    /* transform: scale(0.5) translate(-50%, -50%); */
    opacity: 0;
  }
  100% {
    /* transform: scale(1) translate(-50%, -50%); */
    opacity: 1;
  }
`;

const Button = styled(animated.a)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10000;
  text-decoration: none;

  padding: 0.5rem 0.9rem;
  color: rgba(255, 255, 255, 1);
  border: 2px solid rgba(255, 255, 255, 1);
  letter-spacing: 0.4rem;
  border-radius: 2rem;
  font-size: 1rem;
  font-weight: 800;
  outline: none;
  box-shadow: none;
  background-image: url(${layerOne});
  background-size: 2000% 2000%;
  background-position: center;
  cursor: pointer;
  box-shadow: 0rem 0rem 0.6rem rgba(0, 0, 0, 0.3);

  animation: ${initScale} 1s ease-in-out;
  animation-fill-mode: backwards;
  animation-delay: 1s;

  transition: all 0.5s ease;

  @media (max-width: 1200px) {
    top: 52%;
  }
  @media (max-width: 700px) {
    font-size: 0.8rem;
    padding: 0.4rem 0.7rem;
    top: 54%;
  }
  @media (min-width: 700px) {
    :hover {
      padding: 1.2rem 1.4rem;
      background-size: 110% 110%;
      transform: scale(10) translate(-5%, -5%);
      border: 1px solid ${globalBlack};
      font-size: 0.8rem;
      opacity: 1;
      color: ${globalBlack};
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
`;

const TripButton = ({ onClick, name, href, onMouseEnter, onMouseLeave }) => {
  return (
    <>
      <Button
        onClick={onClick}
        href={href}
        target="_blank"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {name}
      </Button>
    </>
  );
};

export default TripButton;
