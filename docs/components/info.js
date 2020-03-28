import React from "react";
import { DIV } from "html-styled";
import Heading from "./heading";
import Paragraph from "./paragraph";

export default ({ title, children, ...props }) => (
  <DIV borderLeft="solid 5px #28464B" pl={3} pt={2} mt={3} {...props}>
    <Heading small>{title}</Heading>
    <Paragraph>{children}</Paragraph>
  </DIV>
);
