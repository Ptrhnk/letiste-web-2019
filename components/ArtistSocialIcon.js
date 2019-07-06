import React from "react";
import styled from "styled-components";

import facebookIcon from "../img/social_icons/facebook-bl.png";
import instagramIcon from "../img/social_icons/instagram-bl.png";
import spotifyIcon from "../img/social_icons/spotify-bl.png";
import youtubeIcon from "../img/social_icons/youtube-bl.png";
import soundcloudIcon from "../img/social_icons/soundcloud-bl.png";
import websiteIcon from "../img/social_icons/website-bl.png";

const Icon = styled.img`
  width: 2.6rem;
  height: 2.6rem;

  @media (max-width: 700px) {
    width: 1.3rem;
    height: 1.3rem;
  }
`;

const ArtistSocialIcon = ({ social }) => {
  const getIcon = () => {
    switch (social) {
      case "facebook":
        return facebookIcon;
      case "instagram":
        return instagramIcon;
      case "spotify":
        return spotifyIcon;
      case "youtube":
        return youtubeIcon;
      case "soundcloud":
        return soundcloudIcon;
      case "website":
        return websiteIcon;
    }
  };
  return <Icon src={getIcon()} />;
};

export default ArtistSocialIcon;
