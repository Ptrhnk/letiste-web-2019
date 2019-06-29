import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { animated, Keyframes } from "react-spring/renderprops.cjs";

import Main from "../layout/main";
import SocialPanel from "../components/SocialPanel";
import Menu from "../components/Menu";
import BgContainer from "../layout/BgContainer";
import TripButton from "../components/TripButton";

import pismena from "../img/grafika/pismena-karneval.png";
import symbols from "../img/grafika/symboly.png";
import logo from "../img/grafika/logo.png";
import corner from "../img/grafika/corner.png";
import rightSide from "../img/grafika/right-side.png";

const Relative = styled.div`
  position: relative;
  height: 100vh;
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
  /* background-size: cover; */

  @media (max-width: 700px) {
    background-size: auto 60%;
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

  @media (max-width: 700px) {
    background-size: auto 60%;
  }
`;

// Logo
const Logo = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;

  background-image: url(${logo});
  background-size: auto 25%;
  background-repeat: no-repeat;
  background-position: 50% 28%;
  z-index: 4000;

  @media (max-width: 700px) {
    background-size: auto 14%;
    background-position: 50% 38%;
  }
`;

const Home = () => {
  const [trip, setTrip] = useState(false);
  return (
    <Main>
      <BgContainer trip={trip} />
      <Relative>
        <SocialPanel />
        {/* <Menu onClick={() => setTrip(!trip)} /> */}
        <TripButton onClick={() => setTrip(!trip)} name={"LET 19"} />
        {/* <TripButton
          href="https://goout.net/cs/festivaly/letiste-karneval-2019/cwyxd/+jxgql/"
          name={"LET 19"}
        /> */}
        <Letters />
        <Symbols />
        <Logo />
      </Relative>
    </Main>
  );
};

export default Home;
