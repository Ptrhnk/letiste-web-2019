import React from "react";
import styled from "styled-components";

import facebookIcon from "../img/social_icons/facebook3.png";
import twitterIcon from "../img/social_icons/twitter.png";
import instagramIcon from "../img/social_icons/instagram.png";
import calendarMobil from "../img/social_icons/mobil/calendar-mob.png";

const Image = styled.img`
  width: 2rem;
  height: 2rem;

  @media (max-width: 700px) {
    width: 1.6rem;
    height: 1.6rem;
  }
`;

const SocialIcon = ({ social }) => {
  const getIcon = () => {
    switch (social) {
      case "facebook":
        return facebookIcon;
      case "twitter":
        return twitterIcon;
      case "instagram":
        return instagramIcon;
      case "calendar":
        return calendarMobil;
    }
  };

  return <Image src={getIcon()} alt={social} />;
};

export default SocialIcon;
