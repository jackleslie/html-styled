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
  shadow,
} from "styled-system";
import { css } from "@styled-system/css";
import elements from "./elements";
import additionalCss from "./css";

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
    shadow,
    additionalCss,
    (props) => {
      const config = Object.entries(props).reduce((obj, [key, value]) => {
        if (key.endsWith("_hover")) {
          const cssProperty = key.slice(0, -6);
          const hoverProperties = obj["&:hover"];
          const newHoverProperties = {
            ...hoverProperties,
            [cssProperty]: value,
          };
          return {
            ...obj,
            "&:hover": {
              ...newHoverProperties,
            },
          };
        }
        return {
          ...obj,
        };
      }, {});
      return css(config);
    }
  );

  return {
    ...obj,
    [element.toUpperCase()]: ({ ...props }) => <StyledElement {...props} />,
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
  BODY,
  BR,
  BUTTON,
  CAPTION,
  CITE,
  CODE,
  COL,
  COLGROUP,
  DATA,
  DATALIST,
  DD,
  DEL,
  DFN,
  DIV,
  DL,
  DT,
  EM,
  FIELDSET,
  FIGCAPTION,
  FIGURE,
  FOOTER,
  FORM,
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
  INPUT,
  INS,
  KBD,
  LABEL,
  LEGEND,
  LI,
  MAIN,
  MARK,
  METER,
  NAV,
  OL,
  OPTGROUP,
  OPTION,
  OUTPUT,
  P,
  PRE,
  PROGRESS,
  Q,
  RB,
  RP,
  RT,
  RTC,
  RUBY,
  S,
  SAMP,
  SECTION,
  SELECT,
  SMALL,
  SPAN,
  STRONG,
  SUB,
  SUP,
  TABLE,
  TBODY,
  TD,
  TEXTAREA,
  TFOOT,
  TH,
  THEAD,
  TIME,
  TR,
  U,
  UL,
  VAR,
  WBR,
} = output;
