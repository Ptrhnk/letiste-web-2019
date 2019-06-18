import React, { useState } from "react";
import styled from "styled-components";

import layerOne from "../img/grafika/vrstva1.png";

const Button = styled.button`
 margin: 0.4rem;
  padding: .6rem .9rem;
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

  transition: all .5s ease;
  :hover {
    padding: 1rem 1.3rem;
    background-size: 150% 150%;
    transform: scale(10);
    border: .5px solid rgba(44, 42, 36, 1);
    font-size: .8rem;
    /* box-shadow: 0rem 0rem .2rem rgba(0, 0, 0, .6); */
    opacity: 1;
    /* background-image: url(${layerOne}); */
  }

  :focus :active {
    box-shadow: 0rem 0rem 0.2rem rgba(0, 0, 0, 0.3);
    transform: scale(9.9);
  }
`;

const MenuButton = ({ onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <Button
        onClick={onClick}
        // onMouseOver={setHovered(true)}
        // onMouseLeave={setHovered(false)}
      >
        Trip
      </Button>
    </>
  );
};

export default MenuButton;
