import React, { useEffect, useState } from "react";
import styled from "styled-components";

import LogoLetisteVar from "../components/logo/LogoLetisteVar";
import { useSpring, config, animated } from "react-spring";

const Container = styled(animated.div)`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  /* background-color: ${({ color }) => color}; */
  background-color: black;
  z-index: 10000;
`;

const logo = () => {
  const [color, setColor] = useState("black");

  const strobeAnim = useSpring({
    config: {
      tension: 200,
      friction: 10,
      mass: 1
    },
    backgroundColor: color
  });

  // useEffect(() => void setInterval(() => strobe(), 1000), []);

  const strobe = () => {
    setTimeout(() => {
      setColor("rgb(200, 200, 200)");
      setTimeout(() => {
        setColor("black");
      }, Math.floor(Math.random() * 150 + 50));
    }, Math.floor(Math.random() * 4000 + 100));
  };

  return (
    <Container color={color} style={strobeAnim}>
      <LogoLetisteVar />
    </Container>
  );
};

export default logo;
