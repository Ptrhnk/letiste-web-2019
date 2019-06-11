import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { animated, Keyframes } from "react-spring/renderprops.cjs";

import Main from "../layout/main";
import image from "../img/obrazek.jpg";
import logo from "../img/grafika/vrstva1.png";

const Container = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  background-image: url(${logo});
  background-size: cover;
  background-position: center;
  transform: scale(1.02);

  /* @media (min-width: 700px) { */
  filter: url(#tripFilter);
  /* } */
`;

const Relative = styled.div`
  position: relative;
  height: 100vh;
`;

const Menu = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const MenuButton = styled.button`
  margin: 0.4rem;
  padding: 0.5rem 0.8rem;
  border: 2px solid black;
  color: black;
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

const SpringContainer = Keyframes.Spring(async next => {
  while (true) {
    await next({
      from: { angle: 200, opacity: 0, baseFreq: 0.001, scale: 1 },
      to: { angle: 130, opacity: 5, baseFreq: 0.006, scale: 30 }
    });
    await next({
      from: { angle: 130, opacity: 5, baseFreq: 0.006, scale: 30 },
      to: { angle: 200, opacity: 0, baseFreq: 0.011, scale: 1 }
    });
  }
});

const Home = () => {
  const [trip, setTrip] = useState(true);
  return (
    <Main>
      <Relative>
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
      </Relative>
      {trip ? (
        <SpringContainer reset config={{ duration: 5000 }} trip={trip}>
          {spring => (
            <div>
              <Container>
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
      ) : (
        <Container />
      )}
    </Main>
  );
};

export default Home;
