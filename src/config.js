import { properties, selectors } from "./data";

// ["cursor"] -> { "cursor": true }
export const propertiesConfig = properties.reduce(
  (obj, property) => ({ ...obj, [property]: true }),
  {}
);

// ["hover"] -> { "hover": "&:hover" }
export const selectorsConfig = selectors.reduce(
  (obj, selector) => ({ ...obj, [selector]: `&:${selector}` }),
  {}
);
