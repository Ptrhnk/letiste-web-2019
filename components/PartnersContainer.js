import React from "react";
import styled from "styled-components";

import PartnerBox from "./PartnerBox";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  height: 80%;
  width: 100%;
`;

const PartnersContainer = ({ partners }) => {
  return (
    <>
      <Container>
        {partners.map((item, key) => (
          <PartnerBox partner={item} key={key} />
        ))}
      </Container>
    </>
  );
};

export default PartnersContainer;
