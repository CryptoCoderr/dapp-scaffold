import React from "react";
import { Parallax } from "react-scroll-parallax";
// components

// css

//assets

const Promo = () => {
  return (
    <section id="promo">
      <div className="window-wrap">
        <div className="window big">
          <div className="navpan">
            <i className="navicons"></i>
          </div>
          <div className="body">
            <aside className="pattern"></aside>
            <div className="grid-x align-middle justify">
              <div className="cell-7 cnt-img">
                <figure>
                  <Parallax translateX={["-15vw", "0vw"]} rotate={["10", "0"]}>
                    <div>
                      <img
                        className="award"
                        loading="lazy"
                        src="./Images/trophy.webp"
                        width="1105"
                        height="865"
                        alt="SOLYMPICS"
                      />

                      <span className="glare">
                        <img
                          loading="lazy"
                          src="./Images/glare.webp"
                          width="114"
                          height="114"
                          alt="SOLYMPICS"
                        />
                        <img
                          loading="lazy"
                          src="./Images/glare.webp"
                          width="54"
                          height="54"
                          alt="SOLYMPICS"
                        />
                        <img
                          loading="lazy"
                          src="./Images/glare.webp"
                          width="34"
                          height="34"
                          alt="SOLYMPICS"
                        />
                      </span>
                    </div>
                  </Parallax>
                </figure>
              </div>

              <div className="cell-5 cnt-txt">
                <h2>
                  BECOME A<br />
                  CHAMPION!
                </h2>
                <ul className="socialblocks">
                  <li className="socblock">
                    <a
                      className="twitter"
                      href="#"
                      title="SOLYMPICS Twitter"
                      rel="noreferrer"
                      target="_blank"
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
                    >
                      <figure>
                        <i data-ico="tg"></i>
                      </figure>
                      <span>Telegram</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="behind-ani">
          <div className="window big">
            <div className="navpan">
              <i className="navicons"></i>
            </div>
            <div className="body"></div>
          </div>
          <div className="window big">
            <div className="navpan">
              <i className="navicons"></i>
            </div>
            <div className="body"></div>
          </div>
        </div>
      </div>

      <a
        href="#"
        className="btn primary huge"
        title="APE SOLYMPICS"
        rel="noreferrer"
        target="_blank"
      >
        <span>APE SOLYMPICS</span>
      </a>
    </section>
  );
};

export default Promo;
