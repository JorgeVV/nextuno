import NextSeo from "next-seo";
import App, { Container } from "next/app";
import React from "react";
import NProgress from "../app/components/nprogress";
import defaultSeoConfig from "../app/seo.config";

export default class MyApp extends App {
  public render() {
    const { Component } = this.props;
    return (
      <Container>
        <NextSeo config={defaultSeoConfig} />
        <NProgress />
        <Component />
      </Container>
    );
  }
}
