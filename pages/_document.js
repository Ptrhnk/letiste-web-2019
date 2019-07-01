import { ServerStyleSheet, createGlobalStyle } from "styled-components";
import Document, { Html, Head, Main, NextScript } from "next/document";

import Meta from "../layout/meta";
import BgContainer from "../layout/BgContainer";

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
`;

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html>
        <Head>
          <Meta />
          <title>Letiště Karneval</title>
        </Head>
        <body>
          <GlobalStyle />
          <BgContainer />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
