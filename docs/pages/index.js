import React from "react";
import Head from "next/head";
import {
  BODY,
  MAIN,
  ARTICLE,
  H1,
  H3,
  HEADER,
  A,
  DIV,
  CODE,
  P,
} from "html-styled";

const Home = () => (
  <BODY m={0} bg="#eee" fontFamily="system-ui">
    <MAIN p={[4, 5]}>
      <Head>
        <title>html-styled</title>
      </Head>

      <HEADER
        display="flex"
        alignItems="center"
        flexWrap="wrap"
        justifyContent="space-between"
      >
        <DIV display="flex" flexDirection="column" mb={3} mr={3}>
          <H1 m={0}>html-styled</H1>
          <H3 m={0} color="#555" fontWeight={500}>
            HTML for React with styled-system props
          </H3>
        </DIV>
        <A
          className="github-button"
          href="https://github.com/jackleslie/html-styled"
          data-icon="octicon-star"
          data-size="large"
          data-show-count="true"
          aria-label="Star jackleslie/html-styled on GitHub"
        >
          Star
        </A>
      </HEADER>

      <ARTICLE
        mt={4}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        flexDirection="column"
      >
        <H1
          color="#333"
          mb={4}
          maxWidth={600}
          textAlign="center"
          fontWeight={600}
        >
          Use HTML elements in React with styled-system props to prototype with
          ease!
        </H1>
        <P color={["#222", "#cb3837"]}>This text changes color responsively</P>
        <P color="#222" mt={0} mb={3} fontSize={4}>
          {String.fromCharCode("0x2195")}
        </P>
        <CODE borderRadius={5} p={3} mb={4} bg="#333" color="#eee">{`
          <P color={["#222", "#cb3837"]}>This text changes color responsively</P>
        `}</CODE>
        <DIV display="flex">
          <A
            p={3}
            m={2}
            appearance="none"
            bg="#222"
            border="none"
            color="#eee"
            borderRadius={5}
            fontSize={2}
            fontWeight={500}
            href="https://github.com/jackleslie/html-styled"
            textDecoration="none"
          >
            GitHub
          </A>
          <A
            p={3}
            m={2}
            appearance="none"
            bg="#cb3837"
            border="none"
            color="#eee"
            borderRadius={5}
            fontSize={2}
            fontWeight={500}
            href="https://npm.im/html-styled"
            textDecoration="none"
          >
            NPM
          </A>
        </DIV>
      </ARTICLE>
    </MAIN>
  </BODY>
);

export default Home;
