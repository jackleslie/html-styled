import React from "react";
import Link from "next/link";
import { H1, DIV, P } from "html-styled";
import { Layout, Button, Code } from "../components";

const Home = () => (
  <Layout center>
    <H1
      color="#041B15"
      mt={5}
      mb={4}
      maxWidth={600}
      textAlign="center"
      fontWeight={600}
    >
      Use HTML elements in React with styled-system props to prototype with
      ease!
    </H1>
    <P color="#28464B" fontSize={["16px", "18px"]}>
      This text changes size responsively
    </P>
    <P color="#28464B" mt={0} mb={3} fontSize={4}>
      {String.fromCharCode("0x2195")}
    </P>
    <Code>{`
          <P color="#28464B" fontSize={["16px", "18px"]}>This text changes size responsively</P>
        `}</Code>
    <DIV display="flex" mt={3}>
      <Link href="/getting-started">
        <Button>Get started</Button>
      </Link>
      <Button inverted href="https://github.com/jackleslie/html-styled">
        GitHub
      </Button>
    </DIV>
  </Layout>
);

export default Home;
