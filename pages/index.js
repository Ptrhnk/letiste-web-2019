import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { animated, Keyframes } from "react-spring/renderprops.cjs";

import Main from "../layout/main";
import image from "../img/obrazek.jpg";

const Container = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  filter: url(#pictureFilter);
  background-image: url(${image});
  background-size: cover;
  transform: scale(1.02);
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const MenuButton = styled.button`
  margin: 0.4rem;
  padding: 0.5rem 0.8rem;
  border: 2px solid white;
  color: white;
  border-radius: 2rem;
  font-size: 1.2rem;
  outline: none;
  box-shadow: none;
  background-color: rgba(200, 0, 150, 0.2);
  cursor: pointer;

  transition: all 0.3s ease;
  :hover {
    /* box-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.5); */
    background-color: rgba(200, 0, 150, 0.3);
  }
`;

const Svg = styled.svg`
  display: none;
`;

// const StyledImage = styled(animated.img)`
//   height: 100vh;
//   width: 100%;
//   filter: url(#pictureFilter);
//   background-image: url(${image});
//   background-size: cover;
// `;

const SpringContainer = Keyframes.Spring(async next => {
  while (true) {
    await next({
      from: { angle: 200, opacity: 0, baseFreq: 0.008, scale: 1 },
      to: { angle: 130, opacity: 5, baseFreq: 0.02, scale: 5 }
    });
    await next({
      from: { angle: 130, opacity: 5, baseFreq: 0.02, scale: 5 },
      to: { angle: 200, opacity: 0, baseFreq: 0.032, scale: 1 }
    });
  }
});

const Home = () => {
  const [trip, setTrip] = useState(false);
  return (
    <Main>
      <SpringContainer reset config={{ duration: 3000 }}>
        {spring => (
          <div>
            <Container>
              <Menu>
                <Link href="/artists">
                  <MenuButton>Artists</MenuButton>
                </Link>
                <Link href="/about">
                  <MenuButton>Festival</MenuButton>
                </Link>
                <Link href="/history">
                  <MenuButton>History</MenuButton>
                </Link>
                <MenuButton onClick={() => setTrip(!trip)}>Trip</MenuButton>
              </Menu>
              <Svg width="0" height="0">
                <defs>
                  <filter id="pictureFilter">
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
                    {/* <feColorMatrix
                      type="hueRotate"
                      in="SourceGraphic"
                      values={spring.angle}
                    /> */}
                  </filter>
                </defs>
              </Svg>
            </Container>
          </div>
        )}
      </SpringContainer>
    </Main>
  );
};

export default Home;
