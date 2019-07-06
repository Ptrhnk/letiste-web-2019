import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

import logo from "../img/grafika/logo.png";
import ArtistNameBox from "./ArtistNameBox";
import ImageBox from "./ImageBox";

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
  flex-wrap: wrap;

  margin: 2rem 2rem 0 2rem;
  margin-bottom: 1rem;
`;

const ArtistBox = ({ artist, showText, showArtist, openArtist }, key) => {
  const [hover, setHover] = useState(false);
  const { name, image } = artist;

  return (
    <>
      {showArtist && (
        <Container>
          <ImageBox
            key={key}
            image={image}
            onClick={() => openArtist(artist)}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {hover && !showText && <Logo src={logo} />}
          </ImageBox>
          <ArtistNameBox onClick={openArtist} name={name} />
        </Container>
      )}
    </>
  );
};

export default ArtistBox;
