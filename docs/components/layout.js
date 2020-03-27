import React from "react";
import Head from "next/head";
import Link from "next/link";
import { DIV, HEADER, BODY, A, ARTICLE, MAIN, SECTION } from "html-styled";
import Heading from "./heading";
import Button from "./button";

const pages = [
  { page: "Getting started", href: "/getting-started" },
  { page: "Syntax", href: "/syntax" },
];

export default ({ center, title, next, children }) => (
  <BODY m={0} bg="#eee" fontFamily="system-ui">
    <MAIN p={[4, 5]}>
      <Head>
        <title>html-styled | {title}</title>
      </Head>

      <HEADER
        display="flex"
        alignItems="center"
        flexWrap="wrap"
        justifyContent="space-between"
      >
        <DIV display="flex" flexDirection="column" mb={3} mr={3}>
          <Link href="/">
            <Heading color="#041B15" cursor="pointer">
              html-styled
            </Heading>
          </Link>
          <Heading small>{title}</Heading>
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

      {center ? (
        <ARTICLE
          mt={4}
          display="flex"
          alignItems={center ? "center" : "flex-start"}
          justifyContent="center"
          flexWrap="wrap"
          flexDirection="column"
        >
          {children}
        </ARTICLE>
      ) : (
        <DIV
          display="flex"
          mt={3}
          alignItems="flex-start"
          flexDirection={["column", "row"]}
        >
          <SECTION
            borderLeft="solid 5px #28464B"
            px={4}
            mr={4}
            flex={1}
            position={["auto", "sticky"]}
            top="40px"
            lineHeight="2"
            bg="#eee"
            width="100%"
          >
            {pages.map(({ page, href }) => (
              <Link key={page} href={href}>
                <Heading
                  small
                  color={page === title ? "#05668D" : "#28464B"}
                  cursor="pointer"
                  fontSize={2}
                >
                  {page}
                </Heading>
              </Link>
            ))}
          </SECTION>

          <ARTICLE
            mt={4}
            display="flex"
            alignItems={center ? "center" : "flex-start"}
            justifyContent="center"
            flexWrap="wrap"
            flexDirection="column"
            flex={6}
          >
            {children}
            {next ? (
              <Button mt={5} mx={0} href={next.href}>
                Next: {next.title} &rarr;
              </Button>
            ) : null}
          </ARTICLE>
        </DIV>
      )}
    </MAIN>
  </BODY>
);
