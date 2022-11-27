import Head from "next/head";
import React, { useState } from "react";
import NavBar from "../components/navigation/NavBar.component";
import SiteWrapper from "../components/siteWrapper/SiteWrapper.componen";
import UnderConstruction from "../components/underConstruction/UnderConstruction.component";
import CompanyComponent from "../components/company/Company.component";
import CompanyHero from "../components/company/CompanyHero.component";
import Footer from "../components/footer/Footer.component";

export default function Company() {
  const [dropdownOpen, setdropdownOpen] = useState(false);
  const blurIfDropdownOpen = dropdownOpen ? "blur-md" : "";
  return (
    <>
      <Head>
        <title>OzonMaskinen - Bedrift</title>
        <link rel="icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NavBar dropdownOpen={dropdownOpen} setdropdownOpen={setdropdownOpen} />
      <CompanyHero />
      <SiteWrapper className={blurIfDropdownOpen} >
        <CompanyComponent />
      </SiteWrapper>
      <Footer />
    </>
  );
}
