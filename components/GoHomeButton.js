import React from "react";
import styled from "styled-components";

import Link from "next/link";

const StyledLink = styled.a`
  position: sticky;
  top: 0;
  padding: 1rem;
  border: 3px solid black;
  background-color: black;
  color: white;
  cursor: pointer;
  z-index: 5000;
  border-radius: 0 0 1rem 0;

  transition: all 0.7s ease;

  :hover {
    /* background-color: rgba(255, 255, 255, 0); */
    background-color: white;
    color: black;
  }
`;

const Page = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const GoHomeButton = () => {
  return (
    <Page>
      <Link href="/">
        <StyledLink>go home</StyledLink>
      </Link>
    </Page>
  );
};

export default GoHomeButton;
