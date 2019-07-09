import { ServerStyleSheet, createGlobalStyle } from "styled-components";
import Document, { Html, Head, Main, NextScript } from "next/document";

import Meta from "../layout/meta";
import BgContainer from "../layout/BgContainer";

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800&display=swap');
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    letter-spacing: .8px;
    box-sizing: border-box;
    background-color: #267CE1;
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

  setGoogleTags() {
    return {
      __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-143351878-1');
      `
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Letiště Karneval</title>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-143351878-1"
          />
          <script dangerouslySetInnerHTML={this.setGoogleTags()} />
          <Meta />
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
