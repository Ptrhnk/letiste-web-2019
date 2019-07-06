import React from "react";
import styled from "styled-components";

import { globalBorder, globalBlack } from "../constants";

const NameBox = styled.div`
  padding: 1rem 1rem;
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

  transition: all 0.5s ease;

  :hover {
    background-color: ${globalBlack};
    color: white;
  }
`;

const ArtistNameBox = ({ onClick, name }) => {
  return <NameBox onClick={onClick}>{name}</NameBox>;
};

export default ArtistNameBox;
