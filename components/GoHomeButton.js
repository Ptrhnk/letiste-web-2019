import React from "react";
import styled from "styled-components";

import Link from "next/link";

const StyledLink = styled.a`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-self: flex-start;
  justify-self: flex-start;
  padding: 1rem;
  border: 3px solid black;
  background-color: black;
  color: white;
  cursor: pointer;
  z-index: 5000;
  border-radius: 0 0 1rem 0;

  transition: all 0.5s ease;

  :hover {
    background-color: white;
    color: black;
  }
`;

const GoHomeButton = () => {
  return (
    <>
      <Link href="/">
        <StyledLink>go home</StyledLink>
      </Link>
    </>
  );
};

export default GoHomeButton;
