import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

import TripButton from "./TripButton";
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
  flex-direction: row;
  flex-wrap: wrap;
`;

const Menu = ({ onClick }) => {
  return (
    <Panel>
      <TripButton onClick={onClick} name={"LET 19"} />
      <Link href="/artists">
        <MenuButton name={"ARTISTS"} />
      </Link>
    </Panel>
  );
};

export default Menu;
