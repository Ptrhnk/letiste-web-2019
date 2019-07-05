import React from "react";
import styled from "styled-components";

import PartnersContainer from "../components/PartnersContainer";
import GoHomeButton from "../components/GoHomeButton";

import partners from "../json/partners";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Partners = () => {
  const { hlavni, medialni, financne, partneri } = partners;

  return (
    <>
      <Page>
        <GoHomeButton />
        <PartnersContainer partners={hlavni} name={"Hlavní partner"} />
        <PartnersContainer partners={financne} name={"Finančně podpořili"} />
        <PartnersContainer partners={partneri} name={"Partneři"} />
        <PartnersContainer partners={medialni} name={"Mediální partneři"} />
      </Page>
    </>
  );
};

export default Partners;
