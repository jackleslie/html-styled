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
import elements from "./elements";

const output = elements.reduce((obj, element) => {
  const StyledElement = styled(element)`
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

  return {
    ...obj,
    [output[element.toUpperCase()]]: ({ ...props }) => (
      <StyledElement {...props} />
    )
  };
}, {});

export const {
  A,
  ARTICLE,
  ASIDE,
  BLOCKQUOTE,
  DD,
  DIV,
  DL,
  DT,
  FIGCAPTION,
  FIGURE,
  FOOTER,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  HEADER,
  HGROUP,
  NAV,
  P,
  SECTION,
  ADDRESS,
  MAIN
} = output;
