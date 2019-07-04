import React, { useState, useRef, useEffect } from "react";
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
  const [shown, setShown] = useState(0);
  const [showAll, setShowAll] = useState(true);

  const isShown = id => {
    if (showAll) {
      return true;
    } else {
      if (shown > 0 && id === shown) {
        return true;
      }
    }
    return false;
  };

  const isTextShown = id => {
    if (!showAll && id === shown) {
      window.scrollTo(0, 0);
      return true;
    }
  };

  const handleClick = artistId => {
    console.log(artistId);
    setShowAll(!showAll);
    setShown(artistId);
  };

  return (
    <>
      <Container>
        <Trail
          reverse={false}
          items={artists}
          keys={item => item.id}
          from={{ transform: "translate3d(0px,-150px,0)" }}
          to={{ transform: "translate3d(0,0px,0)" }}
          config={{ tension: 260, friction: 16, mass: 1, delay: 400 }}
        >
          {item => props => (
            <div style={props}>
              <ArtistBox
                style={props}
                artist={item}
                key={item.id}
                handleClick={() => handleClick(item.id)}
                showArtist={isShown(item.id)}
                showText={isTextShown(item.id)}
              />
            </div>
          )}
        </Trail>
      </Container>
    </>
  );
};

export default ArtistContainer;
