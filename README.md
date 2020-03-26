# html-styled

> HTML for React with styled-system props

![GitHub package.json version](https://img.shields.io/github/package-json/v/jackleslie/html-styled?color=red&logo=npm)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/jackleslie/html-styled/Node%20CI?logo=github)

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

const App = () => (
  <div>
    <h1>Hello world!</h1>
    <P color="red" p={[1, 2]}>
      This is a paragraph element from html-styled. It is now red and has
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

### Why are the components in uppercase?

Believe it or not, HTML element names are case insensitive, so uppercase HTML elements are actually [valid syntax](https://developer.mozilla.org/en-US/docs/Web/HTML). However, since conventionally developers use lowercase element names you can easily spot which elements you write are standard HTML and which ones are from `html-styled`. React component names are [normally just capitalised](https://reactjs.org/docs/components-and-props.html) as well, so you can also distunguish between normal components and `html-styled` components.
