import React from "react";
import styled from "styled-components";

import SocialButton from "./SocialButton";

const Socials = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 0 0 0 0.7rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: rgba(0, 0, 0, 0.9);
  z-index: 10000;
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
