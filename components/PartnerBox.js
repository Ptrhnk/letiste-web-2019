import React from "react";
import styled from "styled-components";

import { globalBorder, globalBlack } from "../constants";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin: 1rem 2rem 3rem 2rem;
  z-index: 1000;
`;

const ImageBox = styled.div`
  width: 20rem;
  height: 12rem;

  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 900px) {
    width: 14rem;
    height: 8rem;
  }
`;

const PartnerNameBox = styled.div`
  padding: 1rem 1rem;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  border: ${globalBorder};
  color: ${globalBlack};
  background-color: white;
  text-transform: uppercase;
  white-space: pre-wrap;

  transition: all 0.5s ease;
`;

const PartnerBox = ({ partner }, key) => {
  const { name, image } = partner;

  return (
    <>
      <Container key={key}>
        {image && <ImageBox image={image} />}
        <PartnerNameBox>{name}</PartnerNameBox>
      </Container>
    </>
  );
};

export default PartnerBox;
