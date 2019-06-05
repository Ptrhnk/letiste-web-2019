import { createGlobalStyle } from "styled-components";
import Meta from "./meta";

export default ({ children }) => (
  <>
    <GlobalStyle />
    <Meta />
    {children}
  </>
);

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    @import url('https://fonts.googleapis.com/css?family=Poppins');
    font-family: 'Poppins', sans-serif;
    letter-spacing: .8px;
    box-sizing: border-box;
    background-image: linear-gradient(to right bottom, palevioletred, pink);
    /* background-color: black; */
    /* height: 100vh; */
  }
  *, *::after, *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
  }
`;
