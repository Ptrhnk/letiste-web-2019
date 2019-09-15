import React, { useRef } from "react";
import styled from "styled-components";

import DescriptionBox from "../components/DescriptionBox";
import GoHomeButton from "../components/GoHomeButton";
import ImageSlider from "../components/ImageSlider";

const Page = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  height: 100vh;
`;

const Karneval = () => {
  const content = useRef();
  return (
    <>
      <Page ref={content}>
        <GoHomeButton />
        <ImageSlider />
        <DescriptionBox />
      </Page>
    </>
  );
};

export default Karneval;
