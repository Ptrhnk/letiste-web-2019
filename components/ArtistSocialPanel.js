import React from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

import { globalBorder } from "../constants";
import ArtistSocialButton from "./ArtistSocialButton";

const Panel = styled(animated.div)`
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
  z-index: 50000;
`;

const ArtistSocialPanel = ({ links, website }) => {
  const animation = useSpring({
    opacity: 1,
    transform: "translate(0, 0)",
    from: { opacity: 0, transform: "translate(-10rem, 0)" },
    config: { tension: 100, friction: 60, mass: 10 },
    delay: 300
  });

  return (
    <Panel style={animation}>
      {links &&
        links.map((link, key) => <ArtistSocialButton key={key} link={link} />)}
      {website && <ArtistSocialButton link={website} website={true} />}
    </Panel>
  );
};

export default ArtistSocialPanel;
