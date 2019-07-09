import React from "react";
import styled from "styled-components";

import { globalBorder } from "../constants";

const NameBox = styled.div`
  padding: 0.8rem 1rem;
  margin: 0 1rem 1rem 0;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  border: ${globalBorder};
  background-color: white;
  color: black;
  text-transform: uppercase;
  cursor: pointer;
  white-space: pre-wrap;
  letter-spacing: 1px;
  font-weight: 600;

  @media (max-width: 700px) {
    font-size: 0.9rem;
  }
`;

const ArtistNameBox = ({ onClick, name }) => {
  return <NameBox onClick={onClick}>{name}</NameBox>;
};

export default ArtistNameBox;
