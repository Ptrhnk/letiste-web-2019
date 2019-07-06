import styled from "styled-components";

import { globalBorder } from "../constants";

const ImageBox = styled.div`
  width: 20rem;
  height: 16rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  filter: grayscale();
  background-size: cover;
  background-position: center;
  border: ${globalBorder};
  margin-bottom: ${({ modal }) => (modal ? "1rem" : "2rem")};
  color: white;
  cursor: pointer;

  @media (max-width: 1000px) {
    width: 16rem;
    height: 12rem;
  }
  @media (max-width: 700px) {
    width: 14rem;
    height: 10rem;
  }
`;

export default ImageBox;
