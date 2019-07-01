import React, { useState } from "react";
import Link from "next/link";
import styled, { keyframes } from "styled-components";
import { animated, Keyframes } from "react-spring/renderprops.cjs";

import Main from "../layout/main";
import SocialPanel from "../components/SocialPanel";
import Menu from "../components/Menu";
import BgContainer from "../layout/BgContainer";
import TripButton from "../components/TripButton";
import LogoLetiste from "../components/LogoLetiste";

import pismena from "../img/grafika/pismena-karneval.png";
import symbols from "../img/grafika/symboly.png";
import corner from "../img/grafika/corner.png";
import rightSide from "../img/grafika/right-side.png";

const Relative = styled.div`
  position: relative;
  height: 100vh;
`;

const initOpacity = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Písmena a Karneval
const Letters = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;

  background-image: url(${pismena});
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  z-index: 2000;

  animation: ${initOpacity} 1s ease-in-out;
  animation-fill-mode: backwards;
  animation-delay: 4.5s;

  @media (max-width: 700px) {
    background-size: auto 70%;
  }
`;

// Symbols
const Symbols = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;

  background-image: url(${symbols});
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  z-index: 3000;

  animation: ${initOpacity} 1.3s ease-in-out;
  animation-fill-mode: backwards;
  animation-delay: 5.5s;

  @media (max-width: 700px) {
    background-size: auto 70%;
  }
`;

const Page = styled.div`
  height: 100vh;
  /* display: flex;
  flex-direction: column;
  align-items: flex-start; */
`;

const Home = () => {
  const [trip, setTrip] = useState(false);
  return (
    <Main>
      <BgContainer trip={trip} />
      <Relative>
        <SocialPanel />
        <TripButton
          href={
            "https://goout.net/cs/festivaly/letiste-karneval-2019/cwyxd/+jxgql/"
          }
          name={"LET 19"}
        />
        <Letters />
        <Symbols />
        <LogoLetiste />
      </Relative>
    </Main>
  );
};

export default Home;
