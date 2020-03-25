# html-styled

> HTML for React with styled-system props

## Getting started

Provides React components for HTML elements which allow you to use the [Styled System API](https://styled-system.com/api/).

```
npm install html-styled styled-system styled-components
```

or

```
yarn add html-styled styled-system styled-components
```

## Example

The following is an example of a `p` element using `html-styled`

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { P } from "html-styled";

const App = ({ ...props }) => (
  <div>
    <h1>Hello world!</h1>
    <P color="red" p={[1, 2]}>
      This is a paragraph element from html-styled. It's now red and has
      responsive padding - easy!
    </P>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
```

Whenever you want to use an HTML element, just import it from `html-styled` in uppercase and you can instantly use the `styled-system` style props!

## FAQ

### Why would I use this?

- [x] You're hacking together a small app with React
- [x] You're fine using HTML but also need a bit more to quickly prototype
- [x] You like `styled-system`'s features like style props and reponsive props but can't be bothered setting it up

### Is it good for bigger projects?

Probably not, since it's essentially just inline css but easier and this isn't very scalable. However, you can make reusable components with them and make you're own mini design system if desired.
