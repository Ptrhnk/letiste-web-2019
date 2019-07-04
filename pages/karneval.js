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

const Karneval = () => {
  return (
    <>
      <GoHomeButton />
      <Container>
        <DescriptionBox visible={true} />
      </Container>
    </>
  );
};

export default Karneval;
