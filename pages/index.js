import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Spring, animated, Keyframes } from "react-spring/renderprops.cjs";

import Page from "../layout/main";
import image from "../img/obrazek.jpg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  filter: url(#pictureFilter);
  background-image: url(${image});
  background-size: cover;
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
  background-color: inherit;
  cursor: pointer;

  transition: all 0.3s ease;
  :hover {
    box-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.5);
  }
`;

const StyledImage = styled(animated.div)`
  height: 100vh;
  width: 100%;
  filter: url(#pictureFilter);
  background-image: url(${image});
  background-size: cover;
`;

const SpringContainer = Keyframes.Spring(async next => {
  while (true) {
    await next({
      from: { angle: 200, counter: 1 },
      to: { angle: 130, counter: 0 }
    });
    await next({
      from: { angle: 130, counter: 0 },
      to: { angle: 200, counter: 1 }
    });
  }
});

const Home = () => {
  return (
    <Page>
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
        </Menu>
        <SpringContainer
          reset
          config={{ duration: 2000 /*, easing: Easing.linear*/ }}
        >
          {spring => (
            <div>
              <svg width="0" height="0">
                <defs>
                  <filter id="pictureFilter">
                    <feColorMatrix
                      type="hueRotate"
                      in="SourceGraphic"
                      values={spring.angle}
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          )}
        </SpringContainer>
      </Container>
      <Container />
    </Page>
  );
};

export default Home;
