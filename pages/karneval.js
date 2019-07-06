import React from "react";
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
  return (
    <>
      <Page>
        <GoHomeButton />
        <DescriptionBox />
      </Page>
    </>
  );
};

export default Karneval;
