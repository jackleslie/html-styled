import React from "react";
import { Layout } from "../../components";
import MDXDocument from "./getting-started.mdx";

export default () => (
  <Layout title="Getting started" next={{ title: "Syntax", href: "/syntax" }}>
    <MDXDocument />
  </Layout>
);
