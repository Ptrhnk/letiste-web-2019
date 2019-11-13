import React from "react";
import styled from "styled-components";

import LogoLetisteVar from "../components/logo/LogoLetisteVar";

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  background-color: black;
  z-index: 10000;
`;

const logo = () => {
  return (
    <Container>
      <LogoLetisteVar />
    </Container>
  );
};

export default logo;
