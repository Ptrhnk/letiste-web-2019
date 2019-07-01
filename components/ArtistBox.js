import React from "react";
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
  filter: url(#linear);
  background-size: cover;
  background-position: center;
  border: ${globalBorder};
  margin-bottom: 2rem;
  color: white;
  cursor: pointer;

  transition: all 1s ease;
  :hover {
    opacity: 0.8;
  }
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

  transition: all 0.5s ease;

  :hover {
    background-color: black;
    color: white;
  }
`;

const ArtistBox = ({ artist }, key) => {
  return (
    <>
      <Spring
        config={{ tension: 250, friction: 100, mass: 20 }}
        from={{ opacity: 0, value: 180 }}
        to={{ opacity: 1, value: 0 }}
      >
        {spring => (
          <div style={spring}>
            <Container>
              <ImageBox key={key} image={artist.image} />
              <ArtistNameBox>{artist.name.replace("<br>", "\n")}</ArtistNameBox>
            </Container>
            <Svg>
              <defs>
                <filter id="pictureFilter">
                  <feColorMatrix
                    type="hueRotate"
                    in="SourceGraphic"
                    values="180"
                    // values={spring.value}
                  />
                </filter>
                <filter id="linear">
                  <feColorMatrix
                    type="matrix"
                    values="0 1 0 0 0
                            0 1 0 0 0
                            0 1 0 0 0
                            0 1 0 1 0 "
                  />
                </filter>
              </defs>
            </Svg>
          </div>
        )}
      </Spring>
    </>
  );
};

export default ArtistBox;
