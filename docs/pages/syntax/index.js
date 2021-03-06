import React from "react";
import { Layout } from "../../components";
import MDXDocument from "./syntax.mdx";

export default () => (
  <Layout title="Syntax" next={{ title: "HTML", href: "/html" }}>
    <MDXDocument />
  </Layout>
);
