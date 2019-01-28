import { NextFC } from "next";
import React from "react";

interface IProps {
  slug: string;
}

const DynamicPage: NextFC<IProps> = ({ slug }) => (
  <div>
    <h1>Dynamic page</h1>
    <h2>{slug}</h2>
  </div>
);

DynamicPage.getInitialProps = ctx => ({
  slug: typeof ctx.query.slug === "string" ? ctx.query.slug : "Fallback value"
});

export default DynamicPage;
