import React, { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import { Spring, animated } from "react-spring/renderprops.cjs";

import Main from "../layout/main";
import ArtistBox from "../components/ArtistBox";
import ArtistContainer from "../components/ArtistContainer";
import artistList from "../json/artistList";

import artists from "../json/artists";

const Page = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Artists = () => {
  return (
    <Main>
      <Page>
        {/* <Spring
          config={{ tension: 200, friction: 100, mass: 20 }}
          from={{ opacity: 0, value: 180 }}
          to={{ opacity: 1, value: 0 }}
        >
          {spring => (
            <div> */}
        <h1>Welcome to artist section</h1>
        <Link href="/">
          <a>go home</a>
        </Link>
        <ArtistContainer artists={artists} />
        {/* </div>
          )}
        </Spring> */}
      </Page>
    </Main>
  );
};

export default Artists;
