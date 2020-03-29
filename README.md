# html-styled

> HTML for React with styled-system props

![npm](https://img.shields.io/npm/v/html-styled?color=red)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/jackleslie/html-styled/Node%20CI?logo=github)

## Documentation

You can find the full documentation at [html-styled.now.sh](https://html-styled.now.sh), which is also built with `html-styled`! View the code in the `docs` folder in this repository.

## Getting Started

This package is for projects using React that allows you to write HTML
elements in which you can pass responsive style props easily. Normally when we
write and style HTML elements in React we use the standard style props as
follows:

```jsx
<p style={{ color: "red", fontSize: "18px" }}>Hello world!</p>
```

The syntax is a little bit clunky, and gets a bit harder to read as we add
more and more css rules. And if we wanted to make it responsive, e.g change
the font size on smaller screens, we'd need to give it a class name and write
some bulky CSS media queries.

Using this package means that we get a nicer style props syntax, and can
easily make this responsive using [Styled System's responsive style](https://styled-system.com/responsive-styles) syntax.
With this in mind, the example above becomes:

```jsx
<P color="red" fontSize={["16px", "18px"]}>
  Hello world!
</P>
```

Now instead of using the standard style prop we have a prop for every css
property, e.g `color` and `fontSize`. If we want to make a property responsive we
simply pass an array of strings instead of just one string, where each element
in the array applies the rule to a certain screen size. In this example, the
font size is 16px on small screens, and 18px on all larger screens. Notice
that `<p>` becomes `<P>`.

## Installation

Install `html-styled` and its peer dependencies.

```
yarn add html-styled styled-system styled-components
```

or

```
npm install html-styled styled-system styled-components
```

> ### What are peer dependencies?
>
> These are dependencies that we rely on, but instead of bundling them in our package we get you to install them separately. This keeps our package size down and allows you to install specific versions of each dependency if you need to.

## FAQ

### Why would I use this?

- [x] You're hacking together a small app with React
- [x] You're fine using HTML but also need a bit more to quickly prototype
- [x] You like `styled-system`'s features like style props and reponsive props but can't be bothered setting it up

### Is it good for bigger projects?

Probably not, since it's essentially just inline css but easier and this isn't very scalable. However, you can make reusable components with them and make you're own mini design system if desired.

### Why are the components in uppercase?

Believe it or not, HTML element names are case insensitive, so uppercase HTML elements are actually [valid syntax](https://developer.mozilla.org/en-US/docs/Web/HTML). However, since conventionally developers use lowercase element names you can easily spot which elements you write are standard HTML and which ones are from `html-styled`. React component names are [normally just capitalised](https://reactjs.org/docs/components-and-props.html) as well, so you can also distunguish between normal components and `html-styled` components.
