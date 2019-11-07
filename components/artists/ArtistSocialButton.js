import React from "react";
import styled from "styled-components";
import ArtistSocialIcon from "./ArtistSocialIcon";
import { globalBlack } from "../../constants";

const Button = styled.a`
  padding: 0.6rem 0.9rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    padding: 0.6rem 0.9rem;
  }
`;

const ArtistSocialButton = ({ link, website }) => {
  const getSocial = () => {
    if (link) {
      if (link.includes("facebook")) {
        return "facebook";
      } else if (link.includes("instagram")) {
        return "instagram";
      } else if (link.includes("spotify")) {
        return "spotify";
      } else if (link.includes("youtube")) {
        return "youtube";
      } else if (link.includes("soundcloud")) {
        return "soundcloud";
      } else if (link.includes("mixcloud")) {
        return "mixcloud";
      } else if (website) {
        return "website";
      }
    }
  };

  return (
    <>
      {getSocial() && (
        <Button href={link} target="_blank">
          <ArtistSocialIcon social={getSocial()} />
        </Button>
      )}
    </>
  );
};

export default ArtistSocialButton;
