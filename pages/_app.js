import App, { Container } from "next/app";
import React from "react";
import Router from "next/router";
import { trackPageView } from "../helpers";

export default class MyApp extends App {
  componentDidMount() {
    Router.onRouteChangeComplete = url => {
      trackPageView(url);
    };
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Container>
          <Component {...pageProps} />
        </Container>
      </>
    );
  }
}
