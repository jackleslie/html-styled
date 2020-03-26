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
  const StyledElement = styled(element)(
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
  );

  return {
    ...obj,
    [output[element.toUpperCase()]]: ({ ...props }) => (
      <StyledElement {...props} />
    )
  };
}, {});

export const {
  A,
  ABBR,
  ADDRESS,
  ARTICLE,
  ASIDE,
  B,
  BDI,
  BDO,
  BLOCKQUOTE,
  BR,
  CITE,
  CODE,
  DATA,
  DD,
  DFN,
  DIV,
  DL,
  DT,
  EM,
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
  HR,
  I,
  KBD,
  LI,
  MAIN,
  MARK,
  NAV,
  OL,
  P,
  PRE,
  Q,
  RB,
  RP,
  RT,
  RTC,
  RUBY,
  S,
  SAMP,
  SECTION,
  SMALL,
  SPAN,
  STRONG,
  SUB,
  SUP,
  TIME,
  U,
  UL,
  VAR,
  WBR
} = output;
