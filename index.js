import React from "react";
import styled from "styled-components";
import {
  space,
  color,
  typography,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow
} from "styled-system";

const elements = [
  "Address",
  "Article",
  "Aside",
  "Footer",
  "Header",
  "H1",
  "H2",
  "H3",
  "H4",
  "H5",
  "H6",
  "P",
  "Div",
  "A"
];

const output = {};

elements.forEach(element => {
  const StyledElement = styled(element.toLowerCase())`
    ${space}
    ${color}
    ${typography}
    ${layout}
    ${flexbox}
    ${grid}
    ${background}
    ${border}
    ${position}
    ${shadow}
  `;

  output[element] = ({ ...props }) => <StyledElement {...props} />;
});

export const {
  Address,
  Article,
  Aside,
  Footer,
  Header,
  H1,
  H2,
  H3,
  H4,
  H5,
  H,
  P,
  Div,
  A
} = output;
