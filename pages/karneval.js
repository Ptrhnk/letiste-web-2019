import React, { useRef } from "react";
import styled from "styled-components";

import DescriptionBox from "../components/DescriptionBox";
import GoHomeButton from "../components/GoHomeButton";
import foto1 from "../img/karneval/4.jpg";

const Page = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  height: 100vh;
  /* justify-content: flex-start; */
  /* background-image: ${foto1}; */
  /* background-size: cover; */
  /* background-position: center; */
`;

const Container = styled.div`
  position: absolute;
  width: 100%;
  background-image: ${foto1};
  background-size: cover;
  background-position: center;
  z-index: 10000;
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2000;
`;

const Karneval = () => {
  const content = useRef();
  return (
    <>
      <Page ref={content}>
        <GoHomeButton />
        {/* <Container /> */}
        {/* <Image src={foto1} /> */}
        <DescriptionBox />
      </Page>
    </>
  );
};

export default Karneval;
