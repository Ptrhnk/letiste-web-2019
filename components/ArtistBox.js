import React from "react";
import styled from "styled-components";

import { Spring } from "react-spring/renderprops.cjs";

const Svg = styled.svg`
  display: none;
`;

const Box = styled.div`
  height: 13.5rem;
  width: 13.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  border: 2px solid white;
  border-radius: 1rem;
  margin: 0.6rem;
  color: white;
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
              {/* {artist.name.replace("<br>", "\n")} */}
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
