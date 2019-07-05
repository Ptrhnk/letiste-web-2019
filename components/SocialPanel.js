import React from "react";
import styled, { keyframes } from "styled-components";

import SocialButton from "./SocialButton";

const initOpacity = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Socials = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0 0 0.7rem 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  /* animation: ${initOpacity} 0.6s ease-in-out; */
  animation-fill-mode: backwards;
  animation-delay: 7.6s;

  background-color: rgba(0, 0, 0, 0.9);
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
