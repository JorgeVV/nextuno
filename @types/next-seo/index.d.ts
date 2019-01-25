declare module "next-seo" {
  import React from "react";

  interface IOpenGraphImage {
    url: string;
    alt?: string;
    width?: number;
    height?: number;
  }

  interface IOpenGraphArticle {
    publishedTime?: string;
    modifiedTime?: string;
    expirationTime?: string;
    section?: string;
    authors?: string[];
    tags?: string[];
  }

  interface IOpenGraphBook {
    releaseDate?: string;
    isbn?: string;
    authors?: string[];
    tags?: string[];
  }

  interface IOpenGraphProfile {
    firstName?: string;
    lastName?: string;
    username?: string;
    gender?: "male" | "female";
  }

  interface IOpenGraph {
    title?: string;
    description?: string;
    type?: "article" | "book" | "profile" | "website";
    url?: string;
    locale?: string;
    site_name?: string;
    article?: IOpenGraphArticle;
    book?: IOpenGraphBook;
    profile?: IOpenGraphProfile;
    defaultImageHeight?: number;
    defaultImageWidth?: number;
    images?: IOpenGraphImage[];
  }

  interface ITwitter {
    cardType?: string;
    site?: string;
    handle?: string;
  }

  interface IFacebook {
    appId: number;
  }

  export interface INextSeoConfig {
    templateTitle?: string;
    title?: string;
    noindex?: boolean;
    description?: string;
    twitter?: ITwitter;
    openGraph?: IOpenGraph;
    canonical?: string;
    facebook?: IFacebook;
  }

  export interface IProps {
    config: INextSeoConfig;
  }

  const DefaultSeo: React.ComponentType<IProps>;
  export default DefaultSeo;
}
