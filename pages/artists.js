import React, { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import { Spring, animated } from "react-spring/renderprops.cjs";

import Page from "../layout/main";
import image from "../img/obrazek.jpg";

const Image = styled.image`
  width: 1400;
  height: 800px;
`;

const Svg = styled.svg`
  width: 1400px;
  height: 800px;
  /* background-color: #fff; */
`;

const Artists = () => {
  const [counter, setCounter] = useState(0);

  return (
    <Page>
      <Spring
        config={{ tension: 200, friction: 100, mass: 20 }}
        from={{ opacity: 0, value: 180 }}
        to={{ opacity: 1, value: 0 }}
      >
        {spring => (
          <div>
            <h1>Welcome to artist section</h1>
            <Link href="/">
              <a>go home</a>
            </Link>
            <Svg>
              <defs>
                <filter id="pictureFilter">
                  <feColorMatrix
                    type="hueRotate"
                    in="SourceGraphic"
                    values={spring.value}
                  />
                  <feMorphology operator="dilate" radius="0" />
                </filter>
              </defs>
              <Image
                filter="url(#pictureFilter)"
                xlinkHref={image}
                x="0"
                y="0"
                style={spring}
              />
            </Svg>
          </div>
        )}
      </Spring>
    </Page>
  );
};

export default Artists;
