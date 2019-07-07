import React, { useState, useRef, useEffect } from "react";
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

  const openArtist = artist => {
    setArtist(artist);
    setModalOpened(true);
    document.body.style.overflow = "hidden";
  };

  const handleModalClose = () => {
    setModalOpened(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <Page ref={content}>
        <GoHomeButton />
        <ArtistContainer
          artists={artists.friday}
          openArtist={openArtist}
          name={"Pátek"}
        />
        <ArtistContainer
          artists={artists.saturday}
          openArtist={openArtist}
          name={"Sobota"}
        />
        <ArtistContainer
          artists={artists.doprogram}
          openArtist={openArtist}
          name={"Doprogram"}
        />
        <Modal
          isOpen={modalOpened}
          onRequestClose={() => setModalOpened(false)}
          appElement={ReactDOM.findDOMNode(content.current)}
          onClick={() => setModalOpened(false)}
          component={
            <ArtistModalBox artist={artist} closeModal={handleModalClose} />
          }
        />
      </Page>
    </>
  );
};

export default Artists;
