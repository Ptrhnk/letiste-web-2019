import React, { useState } from "react";
import styled from "styled-components";
import { Spring } from "react-spring/renderprops.cjs";

import logo from "../img/grafika/logo.png";
import { globalBorder } from "../constants";

const Svg = styled.svg`
  display: none;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  margin: 3rem;
  z-index: 1000;
`;

const ImageBox = styled.div`
  width: 20rem;
  height: 16rem;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  filter: grayscale();
  background-size: cover;
  background-position: center;
  border: ${globalBorder};
  margin-bottom: 2rem;
  color: white;
  cursor: pointer;
`;

const PartnerNameBox = styled.div`
  padding: 1rem 1rem;
  /* width: 100%; */
  /* width: 20rem; */
  display: flex;
  justify-content: center;
  align-items: center;

  border: ${globalBorder};
  background-color: white;
  color: black;
  text-transform: uppercase;
  cursor: pointer;
  white-space: pre-wrap;

  transition: all 0.5s ease;

  :hover {
    background-color: black;
    color: white;
  }
`;

const PartnerBox = ({ partner }, key) => {
  return (
    <>
      <Container key={key}>
        {/* <ImageBox key={key} image={partner.image} /> */}
        <PartnerNameBox>{partner.name}</PartnerNameBox>
      </Container>
    </>
  );
};

export default PartnerBox;
