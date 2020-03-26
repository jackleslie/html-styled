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
  CAPTION,
  CITE,
  CODE,
  COL,
  COLGROUP,
  DATA,
  DD,
  DEL,
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
  INS,
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
  TABLE,
  TBODY,
  TD,
  TFOOT,
  TH,
  THEAD,
  TIME,
  TR,
  U,
  UL,
  VAR,
  WBR
} = output;
