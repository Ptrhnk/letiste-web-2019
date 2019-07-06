import React, { useState } from "react";
import styled from "styled-components";
import { Trail } from "react-spring/renderprops.cjs";

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
  /* width: 80%; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const GroupNameDiv = styled.div`
  color: white;
  background-color: ${globalBlack};
  border: ${globalBorder};
  z-index: 2000;
  padding: 1.2rem;
  margin: 2rem 0;
  font-size: 1rem;
  padding: 0.7rem;
  text-transform: uppercase;
`;

const ArtistContainer = ({ artists, openArtist, name }) => {
  return (
    <>
      <GroupContainer>
        <GroupNameDiv>{name}</GroupNameDiv>
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
