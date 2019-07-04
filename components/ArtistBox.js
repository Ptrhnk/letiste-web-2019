import React, { useState } from "react";
import styled from "styled-components";
import { Spring } from "react-spring/renderprops.cjs";

import logo from "../img/grafika/logo.png";
import { globalBorder } from "../constants";

const Svg = styled.svg`
  display: none;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  margin: 3rem;
`;

const ImageBox = styled.div`
  width: 20rem;
  height: 16rem;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  /* filter: url(#linear); */
  filter: grayscale();
  background-size: cover;
  background-position: center;
  border: ${globalBorder};
  margin-bottom: 2rem;
  color: white;
  cursor: pointer;
`;

const ArtistNameBox = styled.div`
  padding: 1rem 1rem;
  /* width: 100%; */
  /* width: 20rem; */
  display: flex;
  justify-content: center;
  align-items: center;

  border: ${globalBorder};
  background-color: white;
  color: black;
  text-transform: uppercase;
  cursor: pointer;
  white-space: pre-wrap;

  transition: all 0.5s ease;

  :hover {
    background-color: black;
    color: white;
  }
`;

const ArtistTextBox = styled.div`
  border: ${globalBorder};
  background-color: white;
  width: 30rem;
  padding: 1rem;
  margin-top: 2rem;
  cursor: pointer;
`;

const ArtistBox = ({ artist, handleClick, showText, showArtist }, key) => {
  return (
    <>
      <Spring
        config={{ tension: 250, friction: 100, mass: 20 }}
        from={{ opacity: 0, value: 180 }}
        to={{ opacity: 1, value: 0 }}
      >
        {spring => (
          <div style={spring}>
            {showArtist && (
              <Container>
                <ImageBox
                  key={key}
                  image={artist.image}
                  onClick={handleClick}
                />
                <ArtistNameBox onClick={handleClick}>
                  {artist.name}
                </ArtistNameBox>
                {showText && (
                  <ArtistTextBox onClick={handleClick}>
                    {artist.text}
                  </ArtistTextBox>
                )}
              </Container>
            )}
          </div>
        )}
      </Spring>
    </>
  );
};

export default ArtistBox;
