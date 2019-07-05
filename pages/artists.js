import React from "react";
import styled from "styled-components";

import ArtistContainer from "../components/ArtistContainer";
import GoHomeButton from "../components/GoHomeButton";

import artists from "../json/artists";

const Page = styled.div`
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Artists = () => {
  return (
    <>
      <Page>
        <GoHomeButton />
        <ArtistContainer artists={artists} />
      </Page>
    </>
  );
};

export default Artists;
