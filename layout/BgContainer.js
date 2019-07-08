import React from "react";
import styled, { keyframes } from "styled-components";
import { animated, Keyframes } from "react-spring/renderprops.cjs";

import backgroundHigh from "../img/grafika/pozadi-01-high.png";
import backgroundMid from "../img/grafika/pozadi-01-mid.png";
import backgroundLow from "../img/grafika/pozadi-01-low.png";

const initOpacity = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${backgroundHigh});
  background-size: cover;
  background-position: center;
  z-index: 0;
  animation: ${initOpacity} 1.6s ease-in-out;
  animation-fill-mode: backwards;
  animation-delay: 0.2s;

  @media (max-width: 700) {
    background-image: url(${backgroundMid});
  }
  /* filter: url(#tripFilter); */
  /* filter: url(#colorFilter); */
`;

const Svg = styled.svg`
  display: none;
`;

const SpringContainer = Keyframes.Spring(async next => {
  while (true) {
    await next({
      from: { angle: 360, opacity: 0, baseFreq: 0.001, scale: 1 },
      to: { angle: 0, opacity: 5, baseFreq: 0.006, scale: 60 }
    });
    await next({
      from: { angle: 0, opacity: 5, baseFreq: 0.006, scale: 60 },
      to: { angle: 360, opacity: 0, baseFreq: 0.011, scale: 1 }
    });
  }
});

const BgContainer = ({ trip }) => {
  return (
    <>
      {trip ? (
        <SpringContainer reset config={{ duration: 6000 }} trip={trip}>
          {spring => (
            <Container trip={trip}>
              <Svg xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <filter id="tripFilter">
                    <feTurbulence
                      type="fractalNoise"
                      baseFrequency={spring.baseFreq}
                      numOctaves="1"
                      result="turbulence"
                      seed="10"
                    />
                    <feDisplacementMap
                      xChannelSelector="R"
                      yChannelSelector="B"
                      in="SourceGraphic"
                      in2="turbulence"
                      scale={spring.scale}
                    />
                  </filter>
                  <filter id="colorFilter">
                    <feColorMatrix
                      type="hueRotate"
                      in="SourceGraphic"
                      values={spring.angle}
                    />
                  </filter>
                </defs>
              </Svg>
            </Container>
          )}
        </SpringContainer>
      ) : (
        <Container />
      )}
    </>
  );
};

export default BgContainer;
