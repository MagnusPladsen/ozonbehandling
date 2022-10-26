import Head from "next/head";
import React from "react";
import UnderConstruction from "../components/underConstruction/UnderConstruction.component";

export default function About() {
  return (
    <>
      <Head>
        <title>OzonMaskinen - Om oss</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <UnderConstruction />
    </>
  );
}
