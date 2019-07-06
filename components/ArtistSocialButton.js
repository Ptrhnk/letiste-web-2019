import React from "react";
import styled from "styled-components";
import ArtistSocialIcon from "./ArtistSocialIcon";

const Button = styled.a`
  padding: 0.6rem;
  margin: 0 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
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
