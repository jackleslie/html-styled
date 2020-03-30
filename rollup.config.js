import resolve from "@rollup/plugin-node-resolve";
import babel from "rollup-plugin-babel";
import commonjs from "@rollup/plugin-commonjs";

import pkg from "./package.json";

// Rollup
const input = pkg.source;

const globals = {
  react: "React",
  "react-dom": "ReactDOM",
  "styled-components": "styled",
  "styled-system": "styledSystem",
  "@styled-system/css": "css",
};

// Plugins
const plugins = [
  resolve(),
  babel({
    runtimeHelpers: true,
    exclude: ["node_modules/**"],
  }),
  commonjs({
    include: ["node_modules/**"],
    namedExports: {
      "node_modules/react-is/index.js": [
        "isElement",
        "isValidElementType",
        "ForwardRef",
      ],
    },
  }),
];

export default [
  {
    input,
    output: [
      { file: "dist/es/index.js", format: "es", globals },
      { file: "dist/umd/index.js", name: pkg.name, format: "umd", globals },
    ],
    external: [
      ...Object.keys(pkg.devDependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
    ],
    plugins,
  },
];
