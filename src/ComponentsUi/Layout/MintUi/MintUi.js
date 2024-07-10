import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";
// components

// css
// import "./MintUi.css";

//assets

const MintUi = () => {
  const [value, setValue] = useState(1);

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  return (
    <section id="mint">
      <div className="window-wrap">
        <div className="window big">
          <header>
            <span className="cut"></span>
            <h1>LOTTERY TICKETS</h1>
            <h4>Mint: VIP (1/3564)</h4>
          </header>
          <div className="body">
            <figure>
              <img
                className="award"
                loading="lazy"
                src="./Images/placeholder.webp"
                width="1080"
                height="1080"
                alt="SOLYMPICS"
              />
            </figure>
          </div>

          <footer>
            <div className="controlls">
              <div className="amnt">
                <button onClick={decrement}>
                  <span>-</span>
                </button>
                <div className="val">{value}</div>
                <button onClick={increment}>
                  <span>+</span>
                </button>
              </div>
              <div className="legend">
                <ul>
                  <li>
                    <small>PRICE:</small>
                  </li>
                  <li>100</li>
                </ul>
                <ul>
                  <li>
                    <small>$SOLYMPICS:</small>
                  </li>
                  <li>178,665.00</li>
                </ul>
              </div>
            </div>

            <div className="actions">
              <button className="btn primary large spaceless">
                <span>CONNECT WALLET</span>
              </button>
            </div>
          </footer>
        </div>

        <div className="behind-ani">
          <div className="window big">
            <header>
              <span className="cut"></span>
            </header>
            <div className="body"></div>
          </div>
          <div className="window big">
            <header>
              <span className="cut"></span>
            </header>
            <div className="body"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MintUi;
