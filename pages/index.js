import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

import SocialPanel from "../components/SocialPanel";
import TripButton from "../components/TripButton";
import LogoLetiste from "../components/LogoLetiste";
import DescriptionBox from "../components/DescriptionBox";
import Menu from "../components/Menu";

import pismena from "../img/grafika/pismena-karneval.png";
import symbols from "../img/grafika/symboly.png";
import corner from "../img/grafika/corner.png";
import rightSide from "../img/grafika/right-side.png";
import GlobalStyle from "../layout/GlobalStyle";

const Relative = styled.div`
  position: relative;
  /* height: 100vh; */
  transform: translateZ(0);
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

  animation: ${initOpacity} 1.4s ease-in-out;
  animation-fill-mode: backwards;
  animation-delay: 4s;

  @media (max-width: 700px) {
    background-size: auto 68%;
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

  animation: ${initOpacity} 1.5s ease-in-out;
  animation-fill-mode: backwards;
  animation-delay: 5s;

  @media (max-width: 700px) {
    background-size: auto 68%;
  }
`;

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      {/* <GlobalStyle /> */}
      <Relative>
        <SocialPanel />
        <Letters />
        <Symbols />
        {!showMenu && (
          <>
            <LogoLetiste />
            <TripButton
              href={
                "https://goout.net/cs/festivaly/letiste-karneval-2019/cwyxd/+jxgql/"
              }
              name={"LET 19"}
            />
          </>
        )}
        <Menu onHamburgerClick={() => setShowMenu(!showMenu)} />
      </Relative>
    </>
  );
};

export default Home;
