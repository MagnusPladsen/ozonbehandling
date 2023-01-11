import Head from "next/head";
import { useState } from "react";
import UnderConstruction from "../components/underConstruction/UnderConstruction.component";
import SiteWrapper from "../components/siteWrapper/SiteWrapper.component";
import AboutUs from "../components/aboutUs/AboutUs.component";
import NavBar from "../components/navigation/NavBar.component";
import Footer from "../components/footer/Footer.component";

export default function About() {
  const [dropdownOpen, setdropdownOpen] = useState(false);
  const blurIfDropdownOpen = dropdownOpen ? "blur-md" : "";
  return (
    <>
      <Head>
        <title>Ozonbehandling - Om oss</title>
        <meta
          name="description"
          content="Om oss. Vi tilbyr ozonbehandling for bedrifter som ønsker å redusere smittefare og øke hygienen."
        />
        <meta
          name="keywords"
          content="Ozonbehandling, lukt, hotell, hybel, leilighet, camping, hytte, hus, bil, bobil"
        />
        <meta name="author" content="Mangus Pladsen" />
      </Head>
      {/* <UnderConstruction /> */}
      <NavBar dropdownOpen={dropdownOpen} setdropdownOpen={setdropdownOpen} />
      <SiteWrapper>
        <AboutUs header="Om oss"/>
      </SiteWrapper>
      <Footer />
    </>
  );
}
