import React from "react";
// scss
import Idle from "../../Idle/Idle";

// images

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer spaceless">
        <div className="fw spaceless">
          <div className="marquee bordered marquee-left">
            <div className="marquee-el" style={{ animationDuration: "45s" }}>
              <p>
                <span>WELCOME TO SOLYMPICSS OG CLUB!</span>&nbsp;&nbsp;
                <span>WELCOME TO SOLYMPICSS OG CLUB!</span>&nbsp;&nbsp;
                <span>WELCOME TO SOLYMPICSS OG CLUB!</span>&nbsp;&nbsp;
                <span>WELCOME TO SOLYMPICSS OG CLUB!</span>&nbsp;&nbsp;
                <span>WELCOME TO SOLYMPICSS OG CLUB!</span>&nbsp;&nbsp;
                <span>WELCOME TO SOLYMPICSS OG CLUB!</span>&nbsp;&nbsp;
                <span>WELCOME TO SOLYMPICSS OG CLUB!</span>&nbsp;&nbsp;
                <span>WELCOME TO SOLYMPICSS OG CLUB!</span>&nbsp;&nbsp;
                <span>WELCOME TO SOLYMPICSS OG CLUB!</span>&nbsp;&nbsp;
                <span>WELCOME TO SOLYMPICSS OG CLUB!</span>&nbsp;&nbsp;
                <span>WELCOME TO SOLYMPICSS OG CLUB!</span>&nbsp;&nbsp;
                <span>WELCOME TO SOLYMPICSS OG CLUB!</span>&nbsp;&nbsp;
                <span>WELCOME TO SOLYMPICSS OG CLUB!</span>&nbsp;&nbsp;
                <span>WELCOME TO SOLYMPICSS OG CLUB!</span>&nbsp;&nbsp;
                <span>WELCOME TO SOLYMPICSS OG CLUB!</span>&nbsp;&nbsp;
                <span>WELCOME TO SOLYMPICSS OG CLUB!</span>&nbsp;&nbsp;
                <span>WELCOME TO SOLYMPICSS OG CLUB!</span>&nbsp;&nbsp;
                <span>WELCOME TO SOLYMPICSS OG CLUB!</span>&nbsp;&nbsp;
              </p>
            </div>
            <div className="marquee-el" style={{ animationDuration: "45s" }}>
              <p>
                <span>WELCOME TO SOLYMPICSS OG CLUB!</span>&nbsp;&nbsp;
                <span>WELCOME TO SOLYMPICSS OG CLUB!</span>&nbsp;&nbsp;
                <span>WELCOME TO SOLYMPICSS OG CLUB!</span>&nbsp;&nbsp;
                <span>WELCOME TO SOLYMPICSS OG CLUB!</span>&nbsp;&nbsp;
                <span>WELCOME TO SOLYMPICSS OG CLUB!</span>&nbsp;&nbsp;
                <span>WELCOME TO SOLYMPICSS OG CLUB!</span>&nbsp;&nbsp;
                <span>WELCOME TO SOLYMPICSS OG CLUB!</span>&nbsp;&nbsp;
                <span>WELCOME TO SOLYMPICSS OG CLUB!</span>&nbsp;&nbsp;
                <span>WELCOME TO SOLYMPICSS OG CLUB!</span>&nbsp;&nbsp;
                <span>WELCOME TO SOLYMPICSS OG CLUB!</span>&nbsp;&nbsp;
                <span>WELCOME TO SOLYMPICSS OG CLUB!</span>&nbsp;&nbsp;
                <span>WELCOME TO SOLYMPICSS OG CLUB!</span>&nbsp;&nbsp;
                <span>WELCOME TO SOLYMPICSS OG CLUB!</span>&nbsp;&nbsp;
                <span>WELCOME TO SOLYMPICSS OG CLUB!</span>&nbsp;&nbsp;
                <span>WELCOME TO SOLYMPICSS OG CLUB!</span>&nbsp;&nbsp;
                <span>WELCOME TO SOLYMPICSS OG CLUB!</span>&nbsp;&nbsp;
                <span>WELCOME TO SOLYMPICSS OG CLUB!</span>&nbsp;&nbsp;
                <span>WELCOME TO SOLYMPICSS OG CLUB!</span>&nbsp;&nbsp;
              </p>
            </div>
          </div>
        </div>

        <div className="align-center">
          <div>
            <i className="logo"></i>
          </div>

          <div className="info">
            <ul className="socials">
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  title="SOLYMPICS Twitter"
                  target="_blank"
                >
                  <i data-ico="tw"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  title="SOLYMPICS Telegram"
                  target="_blank"
                >
                  <i data-ico="tg"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  title="SOLYMPICS DexTools"
                  target="_blank"
                >
                  <i data-ico="dextools"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  title="SOLYMPICS DexScreener"
                  target="_blank"
                >
                  <i data-ico="dexscreener"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  title="SOLYMPICS EtherScan"
                  target="_blank"
                >
                  <i data-ico="solscan"></i>
                </a>
              </li>
            </ul>
            <p className="copy">
              <span>SOLYMPICS © {currentYear}</span>{" "}
              <a href="mailto:hi@solympics.vip" rel="nofollow" target="_blank">
                hi@solympics.vip
              </a>
            </p>
          </div>
        </div>
      </footer>
      <Idle />
    </>
  );
};

export default Footer;
