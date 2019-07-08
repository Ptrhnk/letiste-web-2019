import React from "react";
import styled from "styled-components";
import { Trail } from "react-spring/renderprops.cjs";
import { useSpring, animated, config } from "react-spring";

import ArtistBox from "./ArtistBox";
import { globalBlack, globalBorder } from "../constants";

const GroupContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2rem;

  @media (max-width: 1000px) {
    width: 90%;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
`;

const GroupNameDiv = styled(animated.div)`
  color: white;
  background-color: ${globalBlack};
  border: ${globalBorder};
  z-index: 1000;
  padding: 1.2rem;
  margin: 2rem 0;
  font-size: 1rem;
  padding: 0.7rem;
  text-transform: uppercase;
`;

const ArtistContainer = ({ artists, openArtist, name }) => {
  const initOpacity = useSpring({
    opacity: 1,
    transform: "translate(0,0) scale(1)",
    from: { opacity: 0, transform: "translate(0,10rem) scale(0)" },
    config: { tension: 300, friction: 50, mass: 4 },
    delay: 800
  });
  return (
    <>
      <GroupContainer>
        <GroupNameDiv style={initOpacity}>{name}</GroupNameDiv>
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
                  openArtist={openArtist}
                  showArtist={true}
                />
              </div>
            )}
          </Trail>
        </Container>
      </GroupContainer>
    </>
  );
};

export default ArtistContainer;
