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
  system,
} from "styled-system";
import css from "@styled-system/css";
import { elements } from "./data";
import { propertiesConfig, selectorsConfig } from "./config";

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
    system(propertiesConfig),
    (props) => {
      const config = Object.entries(props).reduce((obj, [key, value]) => {
        const cssSelector = selectorsConfig[key];
        if (cssSelector) {
          const styledSelectorProperties = {
            ...obj[cssSelector],
            ...value,
          };
          return {
            ...obj,
            [cssSelector]: {
              ...styledSelectorProperties,
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

export { elements, properties, selectors } from "./data";
