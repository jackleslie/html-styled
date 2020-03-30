import React from "react";
import { A } from "html-styled";

export default ({ inverted = false, ...props }) => {
  let button;

  if (inverted) {
    button = (
      <A
        p={3}
        m={2}
        appearance="none"
        bg="transparent"
        border="solid 2px #28464B"
        color="#28464B"
        borderRadius={5}
        fontSize={2}
        fontWeight={500}
        href="https://github.com/jackleslie/html-styled"
        textDecoration="none"
        {...props}
      />
    );
  } else {
    button = (
      <A
        p={3}
        m={2}
        appearance="none"
        bg="#05668D"
        border="solid 2px transparent"
        color="#eee"
        borderRadius={5}
        fontSize={2}
        fontWeight={500}
        href="/getting-started"
        textDecoration="none"
        focusColor="red"
        {...props}
      />
    );
  }

  return button;
};
