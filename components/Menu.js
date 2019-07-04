import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

import MenuButton from "./MenuButton";

const Panel = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10000;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;

  border: 1px solid black;
`;

const Menu = ({ onClick }) => {
  return (
    <Panel>
      <Link href="/artists">
        <MenuButton name={"KAPELY"} />
      </Link>
      <Link href="/karneval">
        <MenuButton name={"KARNEVAL"} />
      </Link>
      <Link href="/partners">
        <MenuButton name={"MECENÁŠI"} />
      </Link>
    </Panel>
  );
};

export default Menu;
