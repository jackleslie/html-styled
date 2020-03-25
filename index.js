import React from "react";
import styled from "styled-components";
import { space, color, typography, layout } from "styled-system";

const elements = ["p", "div"];
const output = {};

elements.forEach(element => {
  const StyledElement = styled(element)`
    ${space}
    ${color}
    ${typography}
    ${layout}
  `;

  output[element.toUpperCase()] = ({ ...props }) => (
    <StyledElement {...props} />
  );
});

const { P, DIV } = output;

export { P, DIV };
