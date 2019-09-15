import React, { useRef } from "react";
import styled from "styled-components";

import DescriptionBox from "../components/DescriptionBox";
import GoHomeButton from "../components/GoHomeButton";
import ImageSlider from "../components/ImageSlider";
import BgContainer from "../layout/BgContainer";

const Page = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  height: 100vh;
  z-index: 1000;
`;

const DescriptionContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  z-index: 1000;

  ::-webkit-scrollbar {
    width: 0 !important;
  }
`;

const Karneval = () => {
  const content = useRef();
  return (
    <>
      <BgContainer />
      <ImageSlider />
      <Page ref={content}>
        <GoHomeButton />
        <DescriptionContainer>
          <DescriptionBox />
        </DescriptionContainer>
      </Page>
    </>
  );
};

export default Karneval;
