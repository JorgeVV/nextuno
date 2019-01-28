import NextSeo from "next-seo";
import App, { Container, NextAppContext } from "next/app";
import React from "react";
import NProgress from "../app/components/nprogress";
import defaultSeoConfig from "../app/seo.config";

export default class MyApp extends App {
  public static async getInitialProps({ Component, ctx }: NextAppContext) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  public render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <NextSeo config={defaultSeoConfig} />
        <NProgress />
        <Component {...pageProps} />
      </Container>
    );
  }
}
