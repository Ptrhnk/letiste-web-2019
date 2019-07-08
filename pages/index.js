import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useSpring, animated, config } from "react-spring";

import SocialPanel from "../components/SocialPanel";
import TripButton from "../components/TripButton";
import LogoLetiste from "../components/LogoLetiste";
import Menu from "../components/Menu";

import pismena from "../img/grafika/pismena-karneval.png";
import symbols from "../img/grafika/symboly.png";
import corner from "../img/grafika/corner.png";
import rightSide from "../img/grafika/right-side.png";

const Relative = styled.div`
  position: relative;
  transform: translateZ(0);
`;

// Písmena a Karneval
const Letters = styled(animated.div)`
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url(${pismena});
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  z-index: 2000;

  @media (max-width: 700px) {
    background-size: auto 68%;
  }
`;

// Symbols
const Symbols = styled(animated.div)`
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url(${symbols});
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  z-index: 3000;

  @media (max-width: 700px) {
    background-size: auto 68%;
  }
`;

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);
  const lettersAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { tension: 150, friction: 80, mass: 20 },
    delay: 4000
  });
  const symbolsAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { tension: 150, friction: 80, mass: 20 },
    delay: 5000
  });
  return (
    <>
      <Relative>
        <SocialPanel />
        <Letters style={lettersAnimation} />
        <Symbols style={symbolsAnimation} />
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
