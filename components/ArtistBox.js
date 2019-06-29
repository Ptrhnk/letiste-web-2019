import React from "react";
import styled from "styled-components";

import { Spring } from "react-spring/renderprops.cjs";

const Svg = styled.svg`
  display: none;
`;

const Box = styled.div`
  width: 20rem;
  height: 16rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  border: 4px solid black;
  /* border-radius: 1rem; */
  margin: 3rem;
  color: white;
`;

const ArtistNameBox = styled.div`
  padding: 1rem 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  border-top: 3px solid black;
  background-color: white;
  color: black;
  text-transform: uppercase;
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
            <Box key={key} image={artist.image}>
              <ArtistNameBox>{artist.name.replace("<br>", "\n")}</ArtistNameBox>
            </Box>
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
              </defs>
            </Svg>
          </div>
        )}
      </Spring>
    </>
  );
};

export default ArtistBox;
