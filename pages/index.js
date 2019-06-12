import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { animated, Keyframes } from "react-spring/renderprops.cjs";

import Main from "../layout/main";
import layerOne from "../img/grafika/vrstva1.png";
import layerTwo from "../img/grafika/vrstva2.png";
import layerThree from "../img/grafika/vrstva3.png";
import layerFour from "../img/grafika/vrstva4.png";

const Container = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  background-image: url(${layerOne});
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
  z-index: 10000;

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
    box-shadow: 0rem 0.2rem 0.2rem rgba(0, 0, 0, 0.3);
    background-color: rgba(200, 0, 150, 0.3);
  }
`;

const LayerTwo = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;

  background-image: url(${layerTwo});
  background-size: cover;
  background-position: center;
  z-index: 2000;
`;
const LayerThree = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;

  background-image: url(${layerThree});
  background-size: cover;
  background-position: center;
  z-index: 3000;
`;
const LayerFour = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;

  background-image: url(${layerFour});
  background-size: cover;
  background-position: center;
  z-index: 4000;
`;

const Svg = styled.svg`
  display: none;
`;

const SpringContainer = Keyframes.Spring(async next => {
  while (true) {
    await next({
      from: { angle: 200, opacity: 0, baseFreq: 0.001, scale: 1 },
      to: { angle: 130, opacity: 5, baseFreq: 0.006, scale: 40 }
    });
    await next({
      from: { angle: 130, opacity: 5, baseFreq: 0.006, scale: 40 },
      to: { angle: 200, opacity: 0, baseFreq: 0.011, scale: 1 }
    });
  }
});

const Home = () => {
  const [trip, setTrip] = useState(false);
  return (
    <Main>
      <Relative>
        <Menu>
          <Link href="/artists">
            <MenuButton>Artists</MenuButton>
          </Link>
          {/* <Link href="/about">
            <MenuButton>Festival</MenuButton>
          </Link>
          <Link href="/history">
            <MenuButton>History</MenuButton>
          </Link> */}
          <MenuButton onClick={() => setTrip(!trip)}>Trip</MenuButton>
        </Menu>
        {/* <LayerTwo /> */}
        <LayerThree />
        {/* <LayerFour /> */}
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
