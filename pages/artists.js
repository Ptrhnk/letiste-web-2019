import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import ArtistContainer from "../components/ArtistContainer";
import GoHomeButton from "../components/GoHomeButton";
import Modal from "../components/Modal";
import ArtistModalBox from "../components/ArtistModalBox";

import artists from "../json/artists";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* overflow-y: scroll;
  -webkit-overflow-scrolling: touch; */
`;

const Artists = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const [artist, setArtist] = useState(1);
  const content = useRef();
  const patek = useRef();
  const sobota = useRef();

  const openArtist = artist => {
    setArtist(artist);
    setModalOpened(true);
  };

  return (
    <>
      <Page ref={content}>
        <GoHomeButton />
        <ArtistContainer
          artists={artists.friday}
          openArtist={openArtist}
          name={"Pátek"}
          ref={patek}
        />
        <ArtistContainer
          artists={artists.saturday}
          openArtist={openArtist}
          name={"Sobota"}
          ref={sobota}
        />
        <Modal
          isOpen={modalOpened}
          onRequestClose={() => setModalOpened(false)}
          appElement={ReactDOM.findDOMNode(content.current)}
          component={
            <ArtistModalBox
              artist={artist}
              closeModal={() => setModalOpened(false)}
            />
          }
        />
      </Page>
    </>
  );
};

export default Artists;
