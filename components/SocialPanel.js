import React from "react";
import styled from "styled-components";

import SocialButton from "./SocialButton";

const Socials = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: 0.7rem 0 0 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

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
