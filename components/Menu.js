import React from "react";
import styled from "styled-components";

import MenuButton from "./MenuButton";

const Panel = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10000;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
`;
const Menu = ({ onClick }) => {
  return (
    <Panel>
      <MenuButton onClick={onClick}>Trip</MenuButton>
      {/* <Link href="/artists">
        <MenuButton>Artists</MenuButton>
      </Link> */}
    </Panel>
  );
};

export default Menu;
