import React from "react";
import styled from "styled-components";

import PartnerBox from "./PartnerBox";
import { globalBlack, globalBorder } from "../constants";

const GroupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  border: 1px solid black;

  height: 80%;
  width: 100%;
`;

const GroupNameDiv = styled.div`
  color: white;
  background-color: ${globalBlack};
  border: ${globalBorder};
  z-index: 2000;
  padding: 1.2rem;
`;

const PartnersContainer = ({ partners, name }) => {
  return (
    <>
      <GroupNameDiv>{name}</GroupNameDiv>
      <GroupContainer>
        {partners.map((item, key) => (
          <PartnerBox partner={item} key={key} />
        ))}
      </GroupContainer>
    </>
  );
};

export default PartnersContainer;
