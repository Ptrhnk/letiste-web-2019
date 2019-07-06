import React from "react";
import styled from "styled-components";

import ArtistTextBox from "./ArtistTextBox";
import ArtistNameBox from "./ArtistNameBox";
import ArtistSocialPanel from "./ArtistSocialPanel";
import ImageBox from "./ImageBox";

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: space-around;
  flex-direction: column;
  width: 60%;
  flex-shrink: 0;
  flex-grow: 1;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  /* margin: 1rem 0; */
  /* background-color: palevioletred; */

  @media (max-width: 1300px) {
    width: 80%;
  }
  @media (max-width: 1100px) {
    width: 90%;
  }
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  /* background-color: blue; */
`;

const ArtistModalBox = ({ artist, closeModal }) => {
  const { name, text, image, links, website } = artist;
  return (
    <Box onClick={closeModal}>
      <ImageBox image={image} modal />
      <Row>
        <ArtistNameBox name={name} />
        {(links || website) && (
          <ArtistSocialPanel links={links} website={website} />
        )}
      </Row>
      {text && <ArtistTextBox text={text} />}
    </Box>
  );
};

export default ArtistModalBox;
