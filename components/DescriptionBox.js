import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

const description =
  "Co je důležitější - diverzita nebo unita? Mohou tyto dva pojmy existovat zároveň? Letiště Karneval skýtá odpovědi. Místo standardní divadelní formy představíme site-specific koncept přesahující až do imerzivního divadla. Spolu s nejrůznějšími umělci z celé republiky vytvoříme alternativní svět mystického karnevalu. Prožij s námi příběh extravagance a jednoty. Pronikneme do setkání rozumných lidí\na staneme se součástí elitního společenství.";

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

const Box = styled(animated.p)`
  padding: 1rem;
  width: 30rem;

  background-color: rgba(255, 255, 255, 0.5);
  font-family: "Ubuntu Mono", monospace;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.6rem;
  border-radius: 1rem;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.4);

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  white-space: pre-wrap;
  z-index: 5000;
  margin: 2rem 0;

  /* &::first-letter {
    text-transform: uppercase;
    font-size: 5em;
    font-weight: bold;
    letter-spacing: 5px;
  } */

  @media (max-width: 700px) {
    width: 90%;
    font-size: 1rem;
    line-height: 1.4rem;
    margin: 4rem 0 3rem 0;
  }
`;

const DescriptionBox = () => {
  const animation = useSpring({
    opacity: 1,
    transform: "translate(0, 0)",
    from: { opacity: 0, transform: "translate(0%, -200%)" },
    config: { friction: 50, tension: 200, mass: 1 }
  });

  const descriptionArr = description.split("");
  const [descriptionState, setDescriptionState] = useState(
    descriptionArr.slice()
  );
  const symbols = "abcdefghijklmnopqrstuvwxyz!#$%&*~";

  useEffect(() => void setInterval(() => changeLetter(), 40), []);

  const changeLetter = () => {
    const replacementSymbol = symbols.charAt(
      Math.floor(Math.random() * symbols.length)
    );
    const index = Math.floor(Math.random() * description.length);
    if (
      descriptionArr[index] === descriptionState[index] &&
      descriptionArr[index] !== " " &&
      descriptionArr[index] !== "-"
    ) {
      setTimeout(() => {
        descriptionState[index] = replacementSymbol;
        setDescriptionState(descriptionState.slice());
        setTimeout(() => {
          descriptionState[index] = descriptionArr[index];
          setDescriptionState(descriptionState.slice());
        }, Math.floor(Math.random() * 500 + 100));
      }, Math.floor(Math.random() * 200));
    }
  };

  return <Box style={animation}>{descriptionState}</Box>;
};

export default DescriptionBox;
