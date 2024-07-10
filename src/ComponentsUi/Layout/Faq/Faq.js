import React, { useState } from "react";

// css

const About = () => {
  const highlightsData = [
    {
      title: "Where can I buy $SOLYMPICS?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "How does lottery work?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "WHO IS NEKO?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section id="faq">
      <div className="grid-x align-center">
        <div className="cell-6 mtxt">
          <span className="lbl">
            <img
              loading="lazy"
              src="./Images/flower1.webp"
              width="62"
              height="62"
              alt="FAQ"
            />{" "}
            FAQ
          </span>
          <h2>Frequently Asked Jumps, Throws, and Fumbles</h2>
        </div>

        <div className="cell-6 highlights">
          {highlightsData.map((highlight, index) => (
            <div
              key={index}
              className={`highlight ${index === activeIndex ? "active" : ""}`}
            >
              <button onClick={() => handleButtonClick(index)}>
                <div className="circle">
                  <span></span>
                </div>
                <h4 data-color="light">{highlight.title}</h4>
              </button>
              {index === activeIndex && (
                <section className="box">
                  <p>{highlight.content}</p>
                </section>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
