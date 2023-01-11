import Head from "next/head";
import { useState } from "react";
import CompanyComponent from "../components/company/Company.component";
import CompanyHero from "../components/company/CompanyHero.component";
import Footer from "../components/footer/Footer.component";
import NavBar from "../components/navigation/NavBar.component";
import SiteWrapper from "../components/siteWrapper/SiteWrapper.component";

export default function Company() {
  const [dropdownOpen, setdropdownOpen] = useState(false);
  const blurIfDropdownOpen = dropdownOpen ? "blur-md" : "";
  return (
    <>
      <Head>
        <title>Ozonbehandling - Bedrift</title>
        <meta
          name="description"
          content="Ozonbehandling for bedrifter. Vi tilbyr ozonbehandling for bedrifter som ønsker å redusere smittefare og øke hygienen."
        />
        <meta
          name="keywords"
          content="Ozonbehandling, lukt, hotell, hybel, leilighet, camping, hytte, hus, bil, bobil"
        />
        <meta name="author" content="Mangus Pladsen" />
      </Head>
      <NavBar dropdownOpen={dropdownOpen} setdropdownOpen={setdropdownOpen} />
      <CompanyHero />
      <SiteWrapper>
        <CompanyComponent header="For Bedrift"/>
      </SiteWrapper>
      <Footer />
    </>
  );
}
