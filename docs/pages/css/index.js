import React from "react";
import { Layout } from "../../components";
import MDXDocument from "./css.mdx";

export default () => (
  <Layout title="CSS" next={{ title: "Recipes", href: "/recipes" }}>
    <MDXDocument />
  </Layout>
);
