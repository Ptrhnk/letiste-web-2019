import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { animated, Keyframes } from "react-spring/renderprops.cjs";

import Main from "../layout/main";
import SocialPanel from "../components/SocialPanel";
import Menu from "../components/Menu";

import layerOne from "../img/grafika/vrstva1.png";
import layerTwo from "../img/grafika/vrstva2.png";
import layerThree from "../img/grafika/vrstva3.png";
import layerFour from "../img/grafika/vrstva4.png";

const BgContainer = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${layerOne});
  background-size: cover;
  background-position: center;
  transform: scale(1.02);

  filter: url(#tripFilter);
`;

const Relative = styled.div`
  position: relative;
  height: 100vh;
`;

// textures and white circle
const LayerTwo = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  opacity: 0.95;

  background-image: url(${layerTwo});
  background-size: auto 100%;
  /* background-size: cover; */
  background-repeat: no-repeat;
  background-position: center;
  z-index: 2000;

  filter: url(#tripFilter);
`;

// Letters
const LayerThree = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;

  background-image: url(${layerThree});
  background-size: auto 80%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  z-index: 3000;

  @media (max-width: 700px) {
    background-size: auto 60%;
  }
`;

// symbols and sides
const LayerFour = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;

  background-image: url(${layerFour});
  background-size: auto 80%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  z-index: 4000;

  @media (max-width: 700px) {
    background-size: auto 60%;
  }
`;

const Svg = styled.svg`
  display: none;
`;

const SpringContainer = Keyframes.Spring(async next => {
  while (true) {
    await next({
      from: { angle: 360, opacity: 0, baseFreq: 0.001, scale: 1 },
      to: { angle: 0, opacity: 5, baseFreq: 0.006, scale: 80 }
    });
    await next({
      from: { angle: 0, opacity: 5, baseFreq: 0.006, scale: 80 },
      to: { angle: 360, opacity: 0, baseFreq: 0.011, scale: 1 }
    });
  }
});

const Home = () => {
  const [trip, setTrip] = useState(false);
  return (
    <Main>
      <Relative>
        <SocialPanel />
        <Menu onClick={() => setTrip(!trip)} />
        {/* <LayerTwo /> */}
        <LayerThree />
        <LayerFour />
      </Relative>
      {trip ? (
        <SpringContainer reset config={{ duration: 5000 }} trip={trip}>
          {spring => (
            <div>
              <BgContainer>
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
              </BgContainer>
            </div>
          )}
        </SpringContainer>
      ) : (
        <BgContainer />
      )}
    </Main>
  );
};

export default Home;
