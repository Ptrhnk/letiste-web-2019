import React from "react";
import styled from "styled-components";

import leftArrow from "../img/icons/left-arrow.png";

const Image = styled.img`
  width: 1rem;
  height: 1rem;
`;

const Icon = ({ type }) => {
  const getIcon = () => {
    switch (type) {
      case "left-arrow":
        return leftArrow;
    }
  };

  return <Image src={getIcon()} alt={social} />;
};

export default Icon;
