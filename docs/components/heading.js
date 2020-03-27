import React from "react";
import { H1, H3 } from "html-styled";

export default ({ small = false, ...props }) => {
  let heading;

  if (small) {
    heading = <H3 m={0} color="#28464B" fontWeight={500} {...props}></H3>;
  } else {
    heading = <H1 m={0} color="#222" {...props}></H1>;
  }

  return heading;
};
