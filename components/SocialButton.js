import React from "react";
import styled from "styled-components";

import SocialIcon from "./SocialIcon";

const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.4rem;
  margin: 0.4rem;
  border-radius: 2rem;
`;

const SocialButton = ({ social }) => {
  const getHref = () => {
    switch (social) {
      case "facebook":
        return "https://www.facebook.com/letistedisaster/";
      case "twitter":
        return "https://www.twitter.com/letistefest/";
      case "instagram":
        return "https://www.instagram.com/letistekarneval/";
      case "calendar":
        return "";
    }
  };

  return (
    <Button href={getHref()} target="_blank">
      <SocialIcon social={social} />
    </Button>
  );
};

export default SocialButton;
