import React from "react";
import Head from "next/head";
import Link from "next/link";
import { DIV, HEADER, BODY, A, ARTICLE, MAIN, SECTION } from "html-styled";
import Heading from "./heading";
import Button from "./button";

const pages = [
  { page: "Getting started", href: "/getting-started" },
  { page: "Syntax", href: "/syntax" },
  { page: "HTML", href: "/html" },
  { page: "CSS", href: "/css" },
];

export default ({ center, title, next, children }) => (
  <BODY m={0} bg="#eee" fontFamily="system-ui">
    <MAIN p={[4, 5]}>
      <Head>
        <title>{title ? `html-styled | ${title}` : "html-styled"}</title>
      </Head>

      <HEADER
        display="flex"
        alignItems="center"
        flexWrap="wrap"
        justifyContent="space-between"
      >
        <DIV display="flex" flexDirection="column" mb={2} mr={3}>
          <Link href="/">
            <Heading color="#041B15" cursor="pointer">
              html-styled
            </Heading>
          </Link>
        </DIV>
        {center ? (
          <A href="https://github.com/jackleslie/html-styled" mb={1}>
            <img
              alt="GitHub stars"
              src="https://img.shields.io/github/stars/jackleslie/html-styled?style=social"
            />
          </A>
        ) : null}
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
            maxWidth="100%"
            mt={[2, 4]}
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
              <Link href={next.href}>
                <Button mt={5} mx={0}>
                  Next: {next.title} &rarr;
                </Button>
              </Link>
            ) : null}
          </ARTICLE>
        </DIV>
      )}
    </MAIN>
  </BODY>
);
