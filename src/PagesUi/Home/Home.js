import React from "react";
import { Helmet } from "react-helmet";

// components
import Navigation from "../../ComponentsUi/Layout/Navigation/Navigation";
import Footer from "../../ComponentsUi/Layout/Footer/Footer";
import Promo from "../../ComponentsUi/Layout/Promo/Promo";
// css
// import "./../../CSSUi/Globals/Marquee.css";
import Faq from "../../ComponentsUi/Layout/Faq/Faq";
import MintUi from "../../ComponentsUi/Layout/MintUi/MintUi";
import { ParallaxProvider } from "react-scroll-parallax";
import { Router } from "react-router-dom";

// images

const Home = () => {
  return (
    <>
      <Helmet>
        <title>SOLYMPICS - MINT LOTTERY TICKETS!</title>
        <link rel="canonical" href="https://mint.solympics.vip/" />
      </Helmet>
      <aside className="texture"></aside>
      <ParallaxProvider>
        <Navigation />

        <MintUi />
        <Faq />
        <Promo />
        <Footer />
      </ParallaxProvider>
    </>
  );
};

export default Home;
