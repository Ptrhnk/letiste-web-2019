import React, { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import { Spring, animated } from "react-spring/renderprops.cjs";

import Main from "../layout/main";
import ArtistContainer from "../components/ArtistContainer";
import BgContainer from "../layout/BgContainer";

import artists from "../json/artists";

const Page = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLink = styled.a`
  padding: 1rem;
  border: 3px solid black;
  background-color: white;
  cursor: pointer;
  z-index: 1000;

  transition: all 0.3s ease;

  :hover {
    background-color: rgba(255, 255, 255, 0);
  }
`;

const Artists = () => {
  return (
    <Main>
      <BgContainer trip={false} />
      <Page>
        <h1>Welcome to artist section</h1>
        <Link href="/">
          <StyledLink>go home</StyledLink>
        </Link>
        <ArtistContainer artists={artists} />
      </Page>
    </Main>
  );
};

export default Artists;
