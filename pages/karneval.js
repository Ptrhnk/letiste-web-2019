import React from "react";
import styled from "styled-components";

import DescriptionBox from "../components/DescriptionBox";
import GoHomeButton from "../components/GoHomeButton";

const Container = styled.div`
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Karneval = () => {
  return (
    <>
      <Page>
        <GoHomeButton />
        <Container>
          <DescriptionBox />
        </Container>
      </Page>
    </>
  );
};

export default Karneval;
