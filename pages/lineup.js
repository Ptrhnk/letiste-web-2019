import React from "react";
import styled from "styled-components";
import GoHomeButton from "../components/GoHomeButton";

import patek from "../img/line-up/patek.png";
import sobota from "../img/line-up/sobota.png";
import { globalBlack } from "../constants";

const Page = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  height: 100vh;
  width: 100%;
`;

const ImageContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const Image = styled.img`
  display: flex;
  height: 90%;
  border: 4px solid ${globalBlack};
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 2000;
  margin: 2rem;
  /* padding: 2rem; */

  @media (max-width: 700px) {
    height: 79%;
  }
`;

const LineUp = () => {
  return (
    <>
      <Page>
        <GoHomeButton />
        <ImageContainer>
          <Image src={patek} />
          <Image src={sobota} />
        </ImageContainer>
      </Page>
    </>
  );
};

export default LineUp;
