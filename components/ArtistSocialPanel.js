import React from "react";
import styled from "styled-components";

import { globalBorder } from "../constants";
import ArtistSocialButton from "./ArtistSocialButton";

const Panel = styled.div`
  background-color: white;
  border: ${globalBorder};
  padding: 0.2rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-self: flex-end;
  justify-self: flex-end;
`;

const ArtistSocialPanel = ({ links, website }) => {
  return (
    <Panel>
      {links.map((link, key) => (
        <ArtistSocialButton key={key} link={link} />
      ))}
      {website && <ArtistSocialButton link={website} website={true} />}
    </Panel>
  );
};

export default ArtistSocialPanel;
