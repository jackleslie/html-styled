import React from "react";
import { CODE } from "html-styled";

export default ({ inline = false, ...props }) => {
  let code;

  if (inline) {
    code = (
      <CODE
        borderRadius={5}
        px={2}
        py={1}
        bg="#041B15"
        color="#eee"
        fontFamily="Menlo, monospace"
        fontSize={0}
        {...props}
      ></CODE>
    );
  } else {
    code = (
      <CODE
        borderRadius={5}
        p={3}
        mb={4}
        bg="#041B15"
        color="#eee"
        fontFamily="Menlo, monospace"
        fontSize={0}
        {...props}
      ></CODE>
    );
  }

  return code;
};
