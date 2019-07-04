import React from "react";
import Link from "next/link";
import styled from "styled-components";

import PartnersContainer from "../components/PartnersContainer";
import GoHomeButton from "../components/GoHomeButton";

import partners from "../json/partners";

const Page = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Partners = () => {
  return (
    <>
      <Page>
        <GoHomeButton />
        <PartnersContainer
          partners={partners.medialni}
          name={"Mediální partneři"}
        />
        <PartnersContainer
          partners={partners.financne}
          name={"Finančně podpořili"}
        />
        <PartnersContainer partners={partners.partneri} name={"Partneři"} />
      </Page>
    </>
  );
};

export default Partners;
