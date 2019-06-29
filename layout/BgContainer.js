import React from "react";
import styled from "styled-components";
import { animated, Keyframes } from "react-spring/renderprops.cjs";

import background from "../img/grafika/background.png";

const Container = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${background});
  background-size: cover;
  background-position: center;
  transform: scale(1.03);

  z-index: 0;

  filter: url(#tripFilter);
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
              <Svg width="0" height="0">
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
