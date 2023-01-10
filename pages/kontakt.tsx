import Head from "next/head";
import { useState } from "react";
import ContactForm from "../components/contact/ContactForm.component";
import Footer from "../components/footer/Footer.component";
import NavBar from "../components/navigation/NavBar.component";
import SiteWrapper from "../components/siteWrapper/SiteWrapper.component";

export default function Contact() {
  const [dropdownOpen, setdropdownOpen] = useState(false);
  const blurIfDropdownOpen = dropdownOpen ? "blur-md" : "";
  return (
    <>
      <Head>
        <title>Ozonbehandling - Kontakt oss</title>
        <meta
          name="description"
          content="Kontakt oss for å få en uforpliktende tilbud på ozonbehandling."
        />
        <meta
          name="keywords"
          content="Ozonbehandling, lukt, hotell, hybel, leilighet, camping, hytte, hus, bil, bobil"
        />
        <meta name="author" content="Mangus Pladsen" />
      </Head>
      <NavBar dropdownOpen={dropdownOpen} setdropdownOpen={setdropdownOpen} />
      <SiteWrapper>
        <ContactForm />
      </SiteWrapper>
      <Footer />
    </>
  );
}
