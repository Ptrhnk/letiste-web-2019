import React, { useState } from "react";
import styled from "styled-components";
import { Trail } from "react-spring/renderprops.cjs";

import ArtistBox from "./ArtistBox";

const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const ArtistContainer = ({ artists }) => {
  const [shown, setShown] = useState(-1);
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
          from={{ transform: "translate3d(0px,-150px,0)", opacity: 0 }}
          to={{ transform: "translate3d(0,0px,0)", opacity: 1 }}
          config={{ tension: 260, friction: 20, mass: 1, delay: 400 }}
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
