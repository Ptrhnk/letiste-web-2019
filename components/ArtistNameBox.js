import React from "react";
import styled from "styled-components";

import { globalBorder, globalBlack } from "../constants";

const NameBox = styled.div`
  padding: 0.8rem 1rem;
  margin: 0 0 1rem 0;
  display: flex;
  justify-content: center;
  align-self: flex-start;

  border: ${globalBorder};
  background-color: white;
  color: black;
  text-transform: uppercase;
  cursor: pointer;
  white-space: pre-wrap;
  line-height: 1.7rem;

  transition: all 0.5s ease;

  :hover {
    background-color: ${globalBlack};
    color: white;
  }

  @media (max-width: 700px) {
    padding: 0.6rem 0.8rem;
  }
`;

const Name = styled.h1`
  font-size: 1rem;
  letter-spacing: 1px;
  font-weight: 600;
  @media (max-width: 700px) {
    font-size: 0.8rem;
  }
`;

const ArtistNameBox = ({ onClick, name }) => {
  return (
    <NameBox onClick={onClick}>
      <Name>{name}</Name>
    </NameBox>
  );
};

export default ArtistNameBox;
