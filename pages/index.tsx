import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Footer from "../components/footer/Footer.component";
import Hero from "../components/hero/Hero.component";
import How from "../components/index/how.component";
import NavBar from "../components/navigation/NavBar.component";
import SiteWrapper from "../components/siteWrapper/SiteWrapper.componen";

const Home: NextPage = () => {
  const [dropdownOpen, setdropdownOpen] = useState(false);
  const blurIfDropdownOpen = dropdownOpen ? "blur-md" : "";
  return (
    <div className="">
      <Head>
        <title>OzonMaskinen</title>
        <link rel="icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NavBar dropdownOpen={dropdownOpen} setdropdownOpen={setdropdownOpen} />
      <Hero className={blurIfDropdownOpen} />
      <SiteWrapper className={blurIfDropdownOpen} >
        <How />
      </SiteWrapper>
      <Footer />
    </div>
  );
};

export default Home;
