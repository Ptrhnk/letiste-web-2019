import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { Trail } from "react-spring/renderprops.cjs";

import MenuButton from "./MenuButton";
import HamburgerButton from "./HamburgerButton";

const Panel = styled.div`
  position: absolute;
  top: 22%;
  left: 50%;
  transform: translate(-50%, 0);

  z-index: 10000;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Page = styled.div`
  height: 100vh;
`;

const menuItems = [
  { id: 0, href: "/artists", buttonName: "UMĚLCI" },
  { id: 1, href: "/lineup", buttonName: "PROGRAM" },
  { id: 2, href: "/karneval", buttonName: "KARNEVAL" },
  { id: 3, href: "/partners", buttonName: "PARTNEŘI" }
];

const Menu = ({ onHamburgerClick }) => {
  const [open, setOpen] = useState(false);

  const handleHamburgerClick = () => {
    onHamburgerClick();
    setOpen(!open);
  };

  // const isMobile = () => screen.width < 700;
  return (
    <>
      <Page>
        <HamburgerButton onClick={() => handleHamburgerClick()} active={open} />
        {open && (
          <Panel>
            <Trail
              reverse={false}
              items={menuItems}
              keys={item => item.id}
              from={{ transform: "translate3d(-50px,0,0)", opacity: 0 }}
              to={{ transform: "translate3d(0,0px,0)", opacity: 1 }}
              config={{ tension: 260, friction: 26, mass: 2 }}
            >
              {item => props => (
                <div style={props}>
                  <Link href={item.href}>
                    <MenuButton name={item.buttonName} />
                  </Link>
                </div>
              )}
            </Trail>
          </Panel>
        )}
      </Page>
    </>
  );
};

export default Menu;
