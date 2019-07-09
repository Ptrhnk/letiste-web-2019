import React from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

import ArtistTextBox from "./ArtistTextBox";
import ArtistNameModalBox from "./ArtistNameModalBox";
import ArtistSocialPanel from "./ArtistSocialPanel";
import ImageBox from "./ImageBox";

const Box = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-items: space-around;
  flex-direction: column;
  width: 30rem;
  flex-shrink: 0;
  flex-grow: 1;
  -webkit-overflow-scrolling: touch;
  margin-bottom: 3rem;

  @media (max-width: 1100px) {
    width: 50%;
  }
  @media (max-width: 700px) {
    width: 90%;
  }
`;

const ArtistModalContent = styled.div`
  left: 0;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  padding: 3rem 0;

  ::-webkit-scrollbar {
    width: 0 !important;
  }
`;

const Row = styled(animated.div)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
`;

const ArtistModalBox = ({ artist, closeModal }) => {
  const { name, text, image, links, website } = artist;
  const boxAnimation = useSpring({
    opacity: 1,
    transform: "translate(0, 0)",
    from: { opacity: 0, transform: "translate(20rem, 0)" },
    config: { tension: 200, friction: 50, mass: 6 }
  });

  return (
    <ArtistModalContent onClick={closeModal}>
      <Box style={boxAnimation}>
        <ImageBox image={image} modal />
        <Row>
          <ArtistNameModalBox name={name} />
          {(links || website) && (
            <ArtistSocialPanel links={links} website={website} />
          )}
        </Row>
        {text && <ArtistTextBox text={text} />}
      </Box>
    </ArtistModalContent>
  );
};

export default ArtistModalBox;
