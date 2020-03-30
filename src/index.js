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
import selectors from "./selectors";

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
        const cssProperty =
          key.charAt(5).toLowerCase() + key.slice(6, key.length);
        const cssSelector = key.slice(0, 5);

        const styledSelector = selectors[cssSelector];
        if (styledSelector) {
          const styledSelectorProperties = {
            ...obj[styledSelector],
            [cssProperty]: value,
          };
          return {
            ...obj,
            [styledSelector]: {
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
