import React from "react";
import styled from "styled-components";

import SocialButton from "./SocialButton";

const Socials = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 0.8rem;
  animation-fill-mode: backwards;
  animation-delay: 7.6s;
  z-index: 10000;

  @media (max-width: 700px) {
    left: 0;
    flex-direction: row;
  }
`;

const SocialPanel = () => {
  return (
    <Socials>
      <SocialButton social={"facebook"} />
      <SocialButton social={"twitter"} />
      <SocialButton social={"instagram"} />
    </Socials>
  );
};

export default SocialPanel;
