import React from "react";
import styled from "styled-components";

import PartnerBox from "./PartnerBox";
import { globalBlack, globalBorder } from "../constants";

const Container = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const GroupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
`;

const GroupNameDiv = styled.div`
  color: white;
  background-color: ${globalBlack};
  border: ${globalBorder};
  z-index: 2000;
  padding: 1.2rem;
  margin: 2rem 0;
`;

const PartnersContainer = ({ partners, name }) => {
  return (
    <Container>
      <GroupNameDiv>{name}</GroupNameDiv>
      <GroupContainer>
        {partners.map((item, key) => (
          <PartnerBox partner={item} key={key} />
        ))}
      </GroupContainer>
    </Container>
  );
};

export default PartnersContainer;
