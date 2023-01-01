import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "../components/footer/Footer.component";
import FAQ from "../components/index/FAQ.component";
import HowInfo from "../components/index/HowInfo.component";
import Hero from "../components/index/hero/Hero.component";
import NavBar from "../components/navigation/NavBar.component";
import SiteWrapper from "../components/siteWrapper/SiteWrapper.component";
import Spacer from "../components/spacer/Spacer.component";
import Prices from "../components/index/Prices.component";

const Home: NextPage = () => {
  const [dropdownOpen, setdropdownOpen] = useState(false);
  const [howInfoOpen, setHowInfoOpen] = useState(true);
  const [pricesOpen, setpricesOpen] = useState(false);
  const [faqOpen, setfaqOpen] = useState(false);

  // make a function that openes the clicked component and closes the others
  const openComponent = (component: string) => {
    if (component === "howInfo") {
      if (howInfoOpen) {
        setHowInfoOpen(false);
      }
      if (!howInfoOpen) {
        setHowInfoOpen(true);
      }
      setpricesOpen(false);
      setfaqOpen(false);
    }
    if (component === "prices") {
      if (pricesOpen) {
        setpricesOpen(false);
      }
      if (!pricesOpen) {
        setpricesOpen(true);
      }
      setHowInfoOpen(false);
      setfaqOpen(false);
    }
    if (component === "faq") {
      if (faqOpen) {
        setfaqOpen(false);
      }
      if (!faqOpen) {
        setfaqOpen(true);
      }
      setHowInfoOpen(false);
      setpricesOpen(false);
    }
  };

  useEffect(() => {
    if (howInfoOpen === false && pricesOpen === false && faqOpen === false) {
      setHowInfoOpen(true);
    }
  }, [howInfoOpen, pricesOpen, faqOpen]);
  

  return (
    <div className="">
      <Head>
        <title>Ozonbehandling</title>
        <link rel="icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="Permanent fjerning av lukt" />
        <meta
          name="keywords"
          content="Ozonbehandling, lukt, hotell, hybel, leilighet, camping, hytte, hus, bil, bobil"
        />
        <meta name="author" content="Mangus Pladsen" />
      </Head>
      <NavBar dropdownOpen={dropdownOpen} setdropdownOpen={setdropdownOpen} />
      <Hero />
      <SiteWrapper>
        <Prices open={pricesOpen} setOpen={openComponent} />
        <FAQ open={faqOpen} setOpen={openComponent} />
        <HowInfo open={howInfoOpen} setOpen={openComponent} />
      </SiteWrapper>
      <Footer />
    </div>
  );
};

export default Home;
