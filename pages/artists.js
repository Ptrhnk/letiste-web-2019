import React, { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";

import ArtistContainer from "../components/ArtistContainer";
import BgContainer from "../layout/BgContainer";

import artists from "../json/artists";

const Page = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledLink = styled.a`
  position: sticky;
  top: 0;
  padding: 1rem;
  border: 3px solid black;
  background-color: black;
  color: white;
  cursor: pointer;
  z-index: 5000;
  border-radius: 0 0 1rem 0;

  transition: all 0.7s ease;

  :hover {
    /* background-color: rgba(255, 255, 255, 0); */
    background-color: white;
    color: black;
  }
`;

const Artists = () => {
  return (
    <>
      <BgContainer trip={false} />
      <Page>
        <Link href="/">
          <StyledLink>go home</StyledLink>
        </Link>
        <ArtistContainer artists={artists} />
      </Page>
    </>
  );
};

export default Artists;
