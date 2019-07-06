import React from "react";
import styled from "styled-components";

import facebookIcon from "../img/social_icons/facebook-bl.png";
import instagramIcon from "../img/social_icons/instagram-bl.png";
import spotifyIcon from "../img/social_icons/spotify-bl.png";
import youtubeIcon from "../img/social_icons/youtube-bl.png";
import soundcloudIcon from "../img/social_icons/soundcloud-bl.png";
import mixcloudIcon from "../img/social_icons/mixcloud-bl.png";
import websiteIcon from "../img/social_icons/website-bl.png";

const Icon = styled.img`
  width: 2rem;
  height: 2rem;

  @media (max-width: 700px) {
    width: 1.9rem;
    height: 1.9rem;
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
      case "mixcloud":
        return mixcloudIcon;
      case "website":
        return websiteIcon;
    }
  };
  return <Icon src={getIcon()} />;
};

export default ArtistSocialIcon;
