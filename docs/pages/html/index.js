import React from "react";
import { Layout } from "../../components";
import MDXDocument from "./html.mdx";

export default () => (
  <Layout title="HTML" next={{ title: "CSS", href: "/css" }}>
    <MDXDocument />
  </Layout>
);
