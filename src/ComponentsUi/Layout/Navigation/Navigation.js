import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();
  const [isActiveLink, setIsActiveLink] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const menuRef = useRef(null);
  const menuToggleRef = useRef(null);

  useEffect(() => {
    setIsActiveLink(router.pathname === "/");

    const hash = router.asPath.split("#")[1];
    if (hash) {
      const targetElement = document.querySelector(`#${hash}`);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [router]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsActive(false);
        menuToggleRef.current.classList.remove("active");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef, menuToggleRef]);

  const toggleMenu = () => {
    if (isActive) {
      setIsActive(false);
      menuRef.current.classList.remove("active");
      menuToggleRef.current.classList.remove("active");
    } else {
      setIsActive(true);
      menuRef.current.classList.add("active");
      menuToggleRef.current.classList.add("active");
    }
  };

  const handleLinkClick = () => {
    setIsActive(false);
    menuRef.current.classList.remove("active");
    menuToggleRef.current.classList.remove("active");
  };

  const subnavRef = useRef(null);
  const navigationRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const subnavElement = subnavRef.current;
    const navigationElement = navigationRef.current;

    const measureHeightAndSetTop = () => {
      if (subnavElement && navigationElement) {
        const subnavHeight = subnavElement.clientHeight;
        navigationElement.style.top = `${subnavHeight}px`;
      }
    };

    if (fontLoaded) {
      measureHeightAndSetTop();
    } else {
      document.fonts.ready.then(() => {
        setFontLoaded(true);
        measureHeightAndSetTop();
      });
    }
  }, [fontLoaded]);

  useEffect(() => {
    const navigation = navigationRef.current;
    const offset = navigation.offsetTop;

    const handleScroll = () => {
      if (window.pageYOffset >= offset) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`subnav spaceless fw stripe exclude`} ref={subnavRef}>
        <div className="fw spaceless">
          <div className={`marquee bordered marquee-left`}>
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
              </p>
            </div>
          </div>
        </div>
      </nav>

      <nav
        className={`navigation spaceless exclude ${isSticky ? "sticky" : ""}`}
        ref={navigationRef}
      >
        <button
          className={`btn small spaceless primary ${isActive ? "active" : ""}`}
          id="menuToggle"
          onClick={toggleMenu}
          ref={menuToggleRef}
        >
          <span>MENU</span>
        </button>

        <div
          className={`submenu pattern ${isActive ? "active" : ""}`}
          ref={menuRef}
        >
          <ul className="mitems">
            <li>
              <ul className="nlink">
                <li>
                  <ul>
                    <li>
                      <Link href="/#about">
                        <span
                          className="gradfill"
                          title="ABOUT"
                          data-text="ABOUT"
                          onClick={handleLinkClick}
                        >
                          ABOUT
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#draw">
                        <span
                          className="gradfill"
                          title="LUCKY DRAW"
                          data-text="LOTTERY"
                          onClick={handleLinkClick}
                        >
                          LOTTERY
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/makememes">
                        <span
                          className="gradfill"
                          title="MAKE MEMES"
                          data-text="MAKE MEMES"
                          onClick={handleLinkClick}
                        >
                          MAKE MEMES
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>
                      <Link href="/#tokenomics">
                        <span
                          className="gradfill"
                          title="TOKENOMICS"
                          data-text="TOKENOMICS"
                          onClick={handleLinkClick}
                        >
                          TOKENOMICS
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#roadmap">
                        <span
                          className="gradfill"
                          title="ROADMAP"
                          data-text="ROADMAP"
                          onClick={handleLinkClick}
                        >
                          ROADMAP
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#faq">
                        <span
                          className="gradfill"
                          title="FAQ"
                          data-text="FAQ"
                          onClick={handleLinkClick}
                        >
                          FAQ
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <ul className="socialblocks">
                <li className="socblock">
                  <Link href="#">
                    <figure
                      className="twitter"
                      title="SOLYMPICS Twitter"
                      rel="noreferrer"
                      target="_blank"
                      onClick={handleLinkClick}
                    >
                      <i data-ico="tw"></i>
                      <span>Twitter</span>
                    </figure>
                  </Link>
                </li>
                <li className="socblock">
                  <Link href="#">
                    <figure
                      className="telegram"
                      title="SOLYMPICS Telegram"
                      rel="noreferrer"
                      target="_blank"
                      onClick={handleLinkClick}
                    >
                      <i data-ico="tg"></i>
                      <span>Telegram</span>
                    </figure>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          <ul className="slist">
            <li>
              <Link href="#" target="_blank" rel="noreferrer">
                <span className="btn primary tiny spaceless">
                  APE SOLYMPICS
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                rel="noreferrer"
                title="SOLYMPICS DexTools"
                target="_blank"
              >
                <span>DexTools</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                rel="noreferrer"
                title="SOLYMPICS DexScreener"
                target="_blank"
              >
                <span>DexScreener</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                rel="noreferrer"
                title="SOLYMPICS SolScan"
                target="_blank"
              >
                <span>SolScan</span>
              </Link>
            </li>
          </ul>

          <button onClick={handleLinkClick} className="dataClose">
            <span>✖</span>
          </button>
        </div>

        <div>
          <Link href="/">
            <i className="logo" title="SOLYMPICS"></i>
          </Link>
        </div>

        <div className="quicklinks">
          <div className="socials">
            <Link
              href="#"
              rel="noreferrer"
              title="SOLYMPICS Twitter"
              target="_blank"
            >
              <i data-ico="tw"></i>
            </Link>
            <Link
              href="#"
              rel="noreferrer"
              title="SOLYMPICS Telegram"
              target="_blank"
            >
              <i data-ico="tg"></i>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
