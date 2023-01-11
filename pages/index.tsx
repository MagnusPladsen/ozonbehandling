import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "../components/footer/Footer.component";
import FAQ from "../components/index/FAQ.component";
import HowInfo from "../components/index/HowInfo.component";
import Hero from "../components/index/hero/Hero.component";
import NavBar from "../components/navigation/NavBar.component";
import SiteWrapperHome from "../components/siteWrapper/SiteWrapperHome.component";
import Spacer from "../components/spacer/Spacer.component";
import Prices from "../components/index/Prices.component";
import BulletInfoHorizontal from "../components/index/BulletInfoHorizontal.component";

const Home: NextPage = () => {
  const [dropdownOpen, setdropdownOpen] = useState(false);
  const [howInfoOpen, setHowInfoOpen] = useState(true);
  const [pricesOpen, setpricesOpen] = useState(false);
  const [faqOpen, setfaqOpen] = useState(false);

  const openComponent = (component: string) => {
    // create a function that opens the component that is passed in, also closes the one

    if (component === "how") {
      setHowInfoOpen(!howInfoOpen);
      setpricesOpen(false);
      howInfoOpen ? setfaqOpen(false) : setfaqOpen(false);
    }
    if (component === "prices") {
      setHowInfoOpen(false);
      setfaqOpen(false);
      pricesOpen ? setpricesOpen(false) : setpricesOpen(true);
    }
    if (component === "faq") {
      setHowInfoOpen(false);
      setpricesOpen(false);
      faqOpen ? setfaqOpen(false) : setfaqOpen(true);
    }
  };

  return (
    <div className="">
      <Head>
        <title>Ozonbehandling</title>
        <meta name="description" content="Permanent fjerning av lukt" />
        <meta
          name="keywords"
          content="Ozonbehandling, lukt, hotell, hybel, leilighet, camping, hytte, hus, bil, bobil"
        />
        <meta name="author" content="Mangus Pladsen" />
      </Head>
      <NavBar dropdownOpen={dropdownOpen} setdropdownOpen={setdropdownOpen} />
      <Hero />
      <BulletInfoHorizontal />
      <SiteWrapperHome>
        <HowInfo open={howInfoOpen} setOpen={openComponent} />
        <Prices open={pricesOpen} setOpen={openComponent} />
        <FAQ open={faqOpen} setOpen={openComponent} />
      </SiteWrapperHome>
      <Footer />
    </div>
  );
};

export default Home;
