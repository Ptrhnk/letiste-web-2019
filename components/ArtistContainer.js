import React from "react";
import styled from "styled-components";
import { Trail } from "react-spring/renderprops.cjs";

import ArtistBox from "./ArtistBox";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  height: 80%;
  width: 100%;
`;

const ArtistContainer = ({ artists }) => {
  return (
    <>
      <Container>
        <Trail
          reverse={false}
          items={artists}
          keys={item => item.key}
          from={{ transform: "translate3d(0px,-150px,0)" }}
          to={{ transform: "translate3d(0,0px,0)" }}
          config={{ tension: 250, friction: 12, mass: 1, delay: 300 }}
        >
          {item => props => (
            <div style={props}>
              <ArtistBox style={props} artist={item} key={item.key} />
            </div>
          )}
        </Trail>
        <Trail
          reverse={false}
          items={artists}
          keys={item => item.key}
          from={{ transform: "translate3d(0px,-150px,0)" }}
          to={{ transform: "translate3d(0,0px,0)" }}
          config={{ tension: 250, friction: 12, mass: 1, delay: 400 }}
        >
          {item => props => (
            <div style={props}>
              <ArtistBox style={props} artist={item} key={item.key} />
            </div>
          )}
        </Trail>
      </Container>
    </>
  );
};

export default ArtistContainer;