import React, { useRef } from "react";
import styled from "styled-components";

import DescriptionBox from "../components/DescriptionBox";
import GoHomeButton from "../components/GoHomeButton";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Karneval = () => {
  const content = useRef();
  return (
    <>
      <Page ref={content}>
        <GoHomeButton />
        <DescriptionBox />
      </Page>
    </>
  );
};

export default Karneval;
