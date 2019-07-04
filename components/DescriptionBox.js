import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useTransition, animated, config, useSpring } from "react-spring";

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

const Box = styled(animated.div)`
  padding: 1rem;
  /* margin: 1rem; */
  width: 20rem;

  background-color: rgba(255, 255, 255, 1);
  border: ${globalBorder};
  font-size: 0.8rem;
  border-radius: 1rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  white-space: pre-wrap;
`;

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  height: 10rem;
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

const DescriptionBox = ({ visible, animated }) => {
  const [index, set] = useState(4);
  const transitions = useTransition(descriptionArr[index], item => item.id, {
    from: {
      opacity: 0.2,
      transform: "rotateY(180deg)"
    },
    enter: {
      opacity: 1,
      transform: "rotateY(0deg)"
    },
    leave: {
      opacity: 0.2,
      transform: "rotateY(-180deg)",
      visibility: "hidden"
    },
    config: { tension: 450, friction: 30, mass: 3 }
  });
  const opacityAnimation = useSpring({ opacity: visible ? 1 : 0 });

  useEffect(
    () => void setInterval(() => set(state => (state + 1) % 5), 3000),
    []
  );

  return (
    <>
      {animated ? (
        <animated.div style={{ ...opacityAnimation }}>
          {visible &&
            transitions.map(({ item, props, key }) => (
              <Container key={key}>
                <Box key={key} style={{ ...props }}>
                  {item.text}
                </Box>
              </Container>
            ))}
        </animated.div>
      ) : (
        <Container>
          <Box>{description}</Box>
        </Container>
      )}
    </>
  );
};

export default DescriptionBox;
