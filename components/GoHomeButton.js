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
  border: 5px solid black;
  background-color: black;
  color: white;
  cursor: pointer;
  z-index: 8000;
  border-radius: 0 0 1rem 0;

  transition: all 0.5s ease;

  :hover {
    background-color: white;
    color: black;
  }

  @media (max-width: 700px) {
    padding: 0.6rem;
  }
`;

const GoHomeButton = () => {
  return (
    <>
      <Link href="/">
        <StyledLink>Domů</StyledLink>
      </Link>
    </>
  );
};

export default GoHomeButton;
