import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charset="utf-8" />
          <meta name="description" content="Jack Leslie personal website" />
          <meta name="author" content="Jack Leslie" />
          <meta property="og:image" content="./favicon.ico" />
          <meta
            property="og:description"
            content="HTML for React with styled-system props."
          />
          <meta property="og:title" content="html-styled" />
          <link rel="icon" href="./favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <script async defer src="https://buttons.github.io/buttons.js"></script>
      </Html>
    );
  }
}
