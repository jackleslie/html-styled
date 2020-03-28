import React from "react";
import Link from "next/link";
import { DIV, H3, SPAN } from "html-styled";
import { Layout, Button, Code, Heading, Paragraph } from "../components";

const Home = () => (
  <Layout center>
    <Heading mt={[5, 6]} maxWidth={600} textAlign="center">
      HTML for React with <SPAN color="#05668D">responsive style props</SPAN>
    </Heading>
    <Heading small textAlign="center" mt={[3, 1]} mb={5}>
      React components for every HTML element which expose{" "}
      <Code inline>styled-system</Code> props
    </Heading>
    <DIV display="flex" mt={1} mb={4}>
      <Link href="/getting-started">
        <Button>Get started</Button>
      </Link>
      <Button inverted href="https://github.com/jackleslie/html-styled">
        GitHub
      </Button>
    </DIV>
    <DIV
      display="flex"
      borderTop="solid 2px #ddd"
      width="100%"
      mt={5}
      mb={[5, 4]}
      pt={5}
      alignItems="center"
      justifyContent="space-evenly"
      flexWrap="wrap"
    >
      <DIV display="flex" flexDirection="column" m={2}>
        <H3 color="#28464B" mb={0}>
          Simple <SPAN color="#05668D">style props</SPAN> for inline CSS
        </H3>
        <Paragraph maxWidth={400}>
          A simpler inline CSS syntax by adding a CSS rule directly as a style
          prop; to change foreground color just add{" "}
          <Code inline>{`color="blue"`}</Code> as a prop.
        </Paragraph>
      </DIV>
      <DIV display="flex" flexDirection="column" m={2}>
        <H3 color="#28464B" mb={0}>
          Easily make an element{" "}
          <SPAN color={["#05668D", "#28464B", "#05668D"]}>responsive</SPAN>
        </H3>
        <Paragraph maxWidth={400}>
          An easier way to make an element responsive; to change foreground
          color on different screens just add{" "}
          <Code inline>{`color={["red", "blue"]}`}</Code> as a prop.
        </Paragraph>
      </DIV>
    </DIV>
  </Layout>
);

export default Home;
