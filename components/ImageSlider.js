import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTransition, animated, config } from "react-spring";

import foto1 from "../img/karneval/1.jpg";
import foto2 from "../img/karneval/2.jpg";
import foto3 from "../img/karneval/3.jpg";
import foto4 from "../img/karneval/4.jpg";
import foto5 from "../img/karneval/5.jpg";
import foto6 from "../img/karneval/6.jpg";
import foto7 from "../img/karneval/7.jpg";
import foto8 from "../img/karneval/8.jpg";

const Container = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${foto5});
  background-size: cover;
  background-position: center;
  z-index: 1000;
`;

const slides = [
  { id: 0, url: foto1 },
  { id: 1, url: foto2 },
  { id: 2, url: foto3 },
  { id: 3, url: foto4 },
  { id: 4, url: foto5 },
  { id: 5, url: foto6 },
  { id: 6, url: foto7 },
  { id: 7, url: foto8 }
];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);
  const transitions = useTransition(slides[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { tension: 450, friction: 500, mass: 1 }
  });
  useEffect(
    () =>
      void setInterval(
        () => setIndex(index => (index + 1) % slides.length),
        8000
      ),
    []
  );

  return transitions.map(({ item, props, key }) => (
    <Container
      key={key}
      style={{
        ...props,
        backgroundImage: `url(${item.url}`
      }}
    />
  ));
};

export default ImageSlider;
