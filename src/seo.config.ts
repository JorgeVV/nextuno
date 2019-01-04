import { INextSeoConfig } from "next-seo";

const title = "nextuno";
const description = "An opinionated boilerplate for Next.js";

const defaultConfig: INextSeoConfig = {
  description,
  title,

  openGraph: {
    description,
    title,

    locale: "en_US",
    site_name: title,
    type: "website",
    url: "https://localhost",

    defaultImageHeight: 1200,
    defaultImageWidth: 1200,
    images: [
      {
        alt: "Next logo",
        url:
          "https://camo.githubusercontent.com/1f8dec51cb01842d7bb7a7cd50ade17c75c5e3bd/68747470733a2f2f6173736574732e7a6569742e636f2f696d6167652f75706c6f61642f76313533383336313039312f7265706f7369746f726965732f6e6578742d6a732f6e6578742d6a732e706e67",

        height: 600,
        width: 1800
      }
    ]
  },
  twitter: {
    cardType: "summary_large_image",
    handle: "@handle",
    site: "@site"
  }
};

export default defaultConfig;
