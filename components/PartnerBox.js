import React from "react";
import styled from "styled-components";

import { globalBorder, globalBlack } from "../constants";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin: 3rem;
  z-index: 1000;
`;

const ImageBox = styled.div`
  width: 26rem;
  height: 14rem;

  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const PartnerNameBox = styled.div`
  padding: 1rem 1rem;
  margin-top: 2rem;
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
