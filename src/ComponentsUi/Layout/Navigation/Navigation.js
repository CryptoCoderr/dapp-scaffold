import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  // const location = useLocation();
  // const [isActiveLink, setIsActiveLink] = useState(false);
  // const [isActive, setIsActive] = useState(false);
  // const menuRef = useRef(null);
  // const menuToggleRef = useRef(null);

  // useEffect(() => {
  //   setIsActiveLink(location.pathname === "/");

  //   const hash = location.hash;
  //   if (hash) {
  //     const targetElement = document.querySelector(hash);
  //     if (targetElement) {
  //       targetElement.scrollIntoView({ behavior: "smooth" });
  //     }
  //   }
  // }, [location]);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (menuRef.current && !menuRef.current.contains(event.target)) {
  //       setIsActive(false);
  //       menuToggleRef.current.classList.remove(styles.active);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [menuRef, menuToggleRef]);

  // const toggleMenu = () => {
  //   if (isActive) {
  //     setIsActive(false);
  //     menuRef.current.classList.remove(styles.active);
  //     menuToggleRef.current.classList.remove(styles.active);
  //   } else {
  //     setIsActive(true);
  //     menuRef.current.classList.add(styles.active);
  //     menuToggleRef.current.classList.add(styles.active);
  //   }
  // };

  // const handleLinkClick = () => {
  //   setIsActive(false);
  //   menuRef.current.classList.remove(styles.active);
  //   menuToggleRef.current.classList.remove(styles.active);
  // };

  // const subnavRef = useRef(null);
  // const navigationRef = useRef(null);
  // const [isSticky, setIsSticky] = useState(false);
  // const [fontLoaded, setFontLoaded] = useState(false);

  // useEffect(() => {
  //   const subnavElement = subnavRef.current;
  //   const navigationElement = navigationRef.current;

  //   const measureHeightAndSetTop = () => {
  //     if (subnavElement && navigationElement) {
  //       const subnavHeight = subnavElement.clientHeight;
  //       navigationElement.style.top = `${subnavHeight}px`;
  //     }
  //   };

  //   if (fontLoaded) {
  //     measureHeightAndSetTop();
  //   } else {
  //     document.fonts.ready.then(() => {
  //       setFontLoaded(true);
  //       measureHeightAndSetTop();
  //     });
  //   }
  // }, [fontLoaded]);

  // useEffect(() => {
  //   const navigation = navigationRef.current;
  //   const offset = navigation.offsetTop;

  //   const handleScroll = () => {
  //     if (window.pageYOffset >= offset) {
  //       setIsSticky(true);
  //     } else {
  //       setIsSticky(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      {/* <nav
        className={`${styles.subnav} spaceless fw stripe exclude`}
        ref={subnavRef}
      >
        <div className="fw spaceless">
          <div className={`${styles.marquee} bordered marquee-left`}>
            <div className="marquee-el" style={{ animationDuration: "75s" }}>
              <p>
                <span>LET THE BLOCKCHAIN GAMES BEGIN - SOLYMPICS!</span>
                &nbsp;&nbsp;
                <span>LET THE BLOCKCHAIN GAMES BEGIN - SOLYMPICS!</span>
                &nbsp;&nbsp;
                <span>LET THE BLOCKCHAIN GAMES BEGIN - SOLYMPICS!</span>
                &nbsp;&nbsp;
                <span>LET THE BLOCKCHAIN GAMES BEGIN - SOLYMPICS!</span>
                &nbsp;&nbsp;
                <span>LET THE BLOCKCHAIN GAMES BEGIN - SOLYMPICS!</span>
                &nbsp;&nbsp;
                <span>LET THE BLOCKCHAIN GAMES BEGIN - SOLYMPICS!</span>
                &nbsp;&nbsp;
                <span>LET THE BLOCKCHAIN GAMES BEGIN - SOLYMPICS!</span>
                &nbsp;&nbsp;
                <span>LET THE BLOCKCHAIN GAMES BEGIN - SOLYMPICS!</span>
                &nbsp;&nbsp;
                <span>LET THE BLOCKCHAIN GAMES BEGIN - SOLYMPICS!</span>
                &nbsp;&nbsp;
                <span>LET THE BLOCKCHAIN GAMES BEGIN - SOLYMPICS!</span>
                &nbsp;&nbsp;
                <span>LET THE BLOCKCHAIN GAMES BEGIN - SOLYMPICS!</span>
                &nbsp;&nbsp;
                <span>LET THE BLOCKCHAIN GAMES BEGIN - SOLYMPICS!</span>
                &nbsp;&nbsp;
                <span>LET THE BLOCKCHAIN GAMES BEGIN - SOLYMPICS!</span>
                &nbsp;&nbsp;
                <span>LET THE BLOCKCHAIN GAMES BEGIN - SOLYMPICS!</span>
                &nbsp;&nbsp;
                <span>LET THE BLOCKCHAIN GAMES BEGIN - SOLYMPICS!</span>
                &nbsp;&nbsp;
                <span>LET THE BLOCKCHAIN GAMES BEGIN - SOLYMPICS!</span>
                &nbsp;&nbsp;
                <span>LET THE BLOCKCHAIN GAMES BEGIN - SOLYMPICS!</span>
                &nbsp;&nbsp;
              </p>
            </div>
            <div className="marquee-el" style={{ animationDuration: "75s" }}>
              <p>
                <span>LET THE BLOCKCHAIN GAMES BEGIN - SOLYMPICS!</span>
                &nbsp;&nbsp;
                <span>LET THE BLOCKCHAIN GAMES BEGIN - SOLYMPICS!</span>
                &nbsp;&nbsp;
                <span>LET THE BLOCKCHAIN GAMES BEGIN - SOLYMPICS!</span>
                &nbsp;&nbsp;
                <span>LET THE BLOCKCHAIN GAMES BEGIN - SOLYMPICS!</span>
                &nbsp;&nbsp;
                <span>LET THE BLOCKCHAIN GAMES BEGIN - SOLYMPICS!</span>
                &nbsp;&nbsp;
                <span>LET THE BLOCKCHAIN GAMES BEGIN - SOLYMPICS!</span>
                &nbsp;&nbsp;
                <span>LET THE BLOCKCHAIN GAMES BEGIN - SOLYMPICS!</span>
                &nbsp;&nbsp;
                <span>LET THE BLOCKCHAIN GAMES BEGIN - SOLYMPICS!</span>
                &nbsp;&nbsp;
                <span>LET THE BLOCKCHAIN GAMES BEGIN - SOLYMPICS!</span>
                &nbsp;&nbsp;
                <span>LET THE BLOCKCHAIN GAMES BEGIN - SOLYMPICS!</span>
                &nbsp;&nbsp;
                <span>LET THE BLOCKCHAIN GAMES BEGIN - SOLYMPICS!</span>
                &nbsp;&nbsp;
                <span>LET THE BLOCKCHAIN GAMES BEGIN - SOLYMPICS!</span>
                &nbsp;&nbsp;
                <span>LET THE BLOCKCHAIN GAMES BEGIN - SOLYMPICS!</span>
                &nbsp;&nbsp;
                <span>LET THE BLOCKCHAIN GAMES BEGIN - SOLYMPICS!</span>
                &nbsp;&nbsp;
                <span>LET THE BLOCKCHAIN GAMES BEGIN - SOLYMPICS!</span>
                &nbsp;&nbsp;
              </p>
            </div>
          </div>
        </div>
      </nav>

      <nav
        className={`${styles.navigation} spaceless exclude ${
          isSticky ? styles.sticky : ""
        }`}
        ref={navigationRef}
      >
        <button
          className={`btn small spaceless primary ${
            isActive ? styles.active : ""
          }`}
          id="menuToggle"
          onClick={toggleMenu}
          ref={menuToggleRef}
        >
          <span>MENU</span>
        </button>

        <div
          className={`${styles.submenu} pattern ${
            isActive ? styles.active : ""
          }`}
          ref={menuRef}
        >
          <ul className={styles.mitems}>
            <li>
              <ul className={styles.nlink}>
                <li>
                  <ul>
                    <li>
                      <a
                        className={styles.gradfill}
                        href="https://solympics.vip#about"
                        title="ABOUT"
                        data-text="ABOUT"
                        onClick={handleLinkClick}
                      >
                        ABOUT
                      </a>
                    </li>
                    <li>
                      <a
                        className={styles.gradfill}
                        href="https://solympics.vip#draw"
                        title="LUCKY DRAW"
                        data-text="LOTTERY"
                        onClick={handleLinkClick}
                      >
                        LOTTERY
                      </a>
                    </li>
                    <li>
                      <a
                        className={styles.gradfill}
                        href="https://solympics.vip/makememes"
                        title="MAKE MEMES"
                        data-text="MAKE MEMES"
                        onClick={handleLinkClick}
                      >
                        MAKE MEMES
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>
                      <a
                        className={styles.gradfill}
                        href="https://solympics.vip#tokenomics"
                        title="TOKENOMICS"
                        data-text="TOKENOMICS"
                        onClick={handleLinkClick}
                      >
                        TOKENOMICS
                      </a>
                    </li>
                    <li>
                      <a
                        className={styles.gradfill}
                        href="https://solympics.vip#roadmap"
                        title="ROADMAP"
                        data-text="ROADMAP"
                        onClick={handleLinkClick}
                      >
                        ROADMAP
                      </a>
                    </li>
                    <li>
                      <a
                        className={styles.gradfill}
                        href="https://solympics.vip#faq"
                        title="FAQ"
                        data-text="FAQ"
                        onClick={handleLinkClick}
                      >
                        FAQ
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <ul className={styles.socialblocks}>
                <li className="socblock">
                  <a
                    className="twitter"
                    href="#"
                    title="SOLYMPICS Twitter"
                    rel="noreferrer"
                    target="_blank"
                    onClick={handleLinkClick}
                  >
                    <figure>
                      <i data-ico="tw"></i>
                    </figure>
                    <span>Twitter</span>
                  </a>
                </li>
                <li className="socblock">
                  <a
                    className="telegram"
                    href="#"
                    title="SOLYMPICS Telegram"
                    rel="noreferrer"
                    target="_blank"
                    onClick={handleLinkClick}
                  >
                    <figure>
                      <i data-ico="tg"></i>
                    </figure>
                    <span>Telegram</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <ul className={styles.slist}>
            <li>
              <a
                className="btn primary tiny spaceless"
                href="#"
                target="_black"
                rel="noreferrer"
              >
                <span>APE SOLYMPICS</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                rel="noreferrer"
                title="SOLYMPICS DexTools"
                target="_blank"
              >
                DexTools
              </a>
            </li>
            <li>
              <a
                href="#"
                rel="noreferrer"
                title="SOLYMPICS DexScreener"
                target="_blank"
              >
                DexScreener
              </a>
            </li>
            <li>
              <a
                href="#"
                rel="noreferrer"
                title="SOLYMPICS SolScan"
                target="_blank"
              >
                SolScan
              </a>
            </li>
          </ul>

          <button onClick={handleLinkClick} className={styles.dataClose}>
            <span>✖</span>
          </button>
        </div>

        <div>
          <a
            href="https://solympics.vip/"
            rel="noreferrer"
            title="SOLYMPICS"
            target="_blank"
          >
            <i className={styles.logo}></i>
          </a>
        </div>

        <div className={styles.quicklinks}>
          <div className={styles.socials}>
            <a
              href="#"
              rel="noreferrer"
              title="SOLYMPICS Twitter"
              target="_blank"
            >
              <i data-ico="tw"></i>
            </a>
            <a
              href="#"
              rel="noreferrer"
              title="SOLYMPICS Telegram"
              target="_blank"
            >
              <i data-ico="tg"></i>
            </a>
          </div>
        </div>
      </nav> */}
    </>
  );
};

export default Navigation;
