import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useSpring, animated } from "react-spring";

import logo from "../img/grafika/logo.png";
import { globalBorder, globalBlack } from "../constants";
import ArtistTextBox from "./ArtistTextBox";
import ArtistNameBox from "./ArtistNameBox";

const showLogo = keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: .8;
    transform: scale(1);
  }
`;

const Logo = styled.img`
  height: 50%;
  animation: ${showLogo} 0.3s ease;
  animation-fill-mode: forwards;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  margin: 2rem 2rem 0 0;
  margin-bottom: 1rem;
`;

const ImageBox = styled.div`
  width: 20rem;
  height: 16rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  filter: grayscale();
  background-size: cover;
  background-position: center;
  border: ${globalBorder};
  margin-bottom: 2rem;
  color: white;
  cursor: pointer;
`;

const ArtistBox = ({ artist, handleClick, showText, showArtist }, key) => {
  const [hover, setHover] = useState(false);
  const { name, image, text } = artist;

  return (
    <>
      {showArtist && (
        <Container>
          <ImageBox
            key={key}
            image={image}
            onClick={handleClick}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {hover && !showText && <Logo src={logo} />}
          </ImageBox>
          <ArtistNameBox onClick={handleClick} name={name} />
          {showText && <ArtistTextBox onClick={handleClick} text={text} />}
        </Container>
      )}
    </>
  );
};

export default ArtistBox;
