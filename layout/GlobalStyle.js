import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    @import url('https://fonts.googleapis.com/css?family=Poppins');
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    letter-spacing: .8px;
    box-sizing: border-box;
    background-color: black;
    /* height: 100vh; */
  }
  *, *::after, *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
  }
  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 200ms ease-in-out;
  }
  .ReactModal__Overlay--after-open{
      opacity: 1;
  }
  .ReactModal__Overlay--before-close{
      opacity: 0;
  }
`;

export default GlobalStyle;
