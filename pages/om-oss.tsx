import Head from "next/head";
import React, { useState } from "react";
import UnderConstruction from "../components/underConstruction/UnderConstruction.component";

export default function About() {
  const [dropdownOpen, setdropdownOpen] = useState(false);
  const blurIfDropdownOpen = dropdownOpen ? "blur-md" : "";
  return (
    <>
      <Head>
        <title>Ozonbehandling - Om oss</title>
        <link rel="icon" href="/favicon.svg" /> 
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="Om oss. Vi tilbyr ozonbehandling for bedrifter som ønsker å redusere smittefare og øke hygienen." />
        <meta name="keywords" content="Ozonbehandling, lukt, hotell, hybel, leilighet, camping, hytte, hus, bil, bobil"/>
        <meta name="author" content="Mangus Pladsen" />

      </Head>
      <UnderConstruction />
    </>
  );
}
