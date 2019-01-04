import NextSeo from "next-seo";
import App, { Container } from "next/app";
import React from "react";
import defaultSeoConfig from "../src/seo.config";

export default class MyApp extends App {
  public render() {
    const { Component } = this.props;
    return (
      <Container>
        <NextSeo config={defaultSeoConfig} />
        <Component />
      </Container>
    );
  }
}
