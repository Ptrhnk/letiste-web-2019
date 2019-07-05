import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { globalBorder } from "../constants";

const description =
  "Co je důležitější - diverzita nebo unita? Mohou tyto dva pojmy existovat zároveň? Letiště Karneval skýtá odpovědi. Místo standardní divadelní formy představíme site-specific koncept přesahující až do imerzivního divadla. Spolu s nejrůznějšími umělci z celé republiky vytvoříme alternativní svět mystického karnevalu. Prožij s námi příběh extravagance a jednoty. Pronikneme do setkání rozumných lidí a staneme se součástí elitního společenství.";

const descriptionArr = [
  {
    id: 0,
    text:
      "Co je důležitější - diverzita nebo unita? Mohou tyto dva pojmy existovat zároveň? Letiště Karneval skýtá odpovědi."
  },
  {
    id: 1,
    text:
      "Místo standardní divadelní formy představíme site-specific koncept přesahující až do imerzivního divadla."
  },
  {
    id: 2,
    text:
      "Spolu s nejrůznějšími umělci z celé republiky vytvoříme alternativní svět mystického karnevalu."
  },
  {
    id: 3,
    text:
      "Prožij s námi příběh extravagance a jednoty. Pronikneme do setkání rozumných lidí a staneme se součástí elitního společenství."
  },
  {
    id: 4,
    text: `Letiště Karneval \n 12. - 13. 7. 2019`
  }
];

const Box = styled.p`
  padding: 1rem;
  /* margin: 1rem; */
  width: 26rem;

  background-color: rgba(255, 255, 255, 1);
  border: ${globalBorder};
  font-size: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  white-space: pre-wrap;

  ::first-letter {
    font-weight: bold;
    color: red;
    initial-letter: 2;
  }
`;

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 50rem;
  z-index: 10000;

  @media (max-width: 700px) {
    bottom: 0;
  }
`;

const DescriptionBox = () => {
  return (
    <>
      <Container>
        <Box>{description}</Box>
      </Container>
    </>
  );
};

export default DescriptionBox;
