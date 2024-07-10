import React, { useState, useRef } from "react";
// scss

const Clipboard = ({ placeholder, contract }) => {
  const addressRef = useRef(null);
  const [showMessage, setShowMessage] = useState(false);
  const cntPlaceholder = `${placeholder}`;
  const FullCnt = `${contract}`;

  const handleCopyClick = () => {
    addressRef.current.select();
    document.execCommand("copy");
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <section className="contractCopy">
      <input
        ref={addressRef}
        type="text"
        defaultValue={FullCnt}
        style={{ position: "fixed", left: "-9999px" }}
      />
      <p className="clipboard" onClick={handleCopyClick}>
        <span className="reduced">{cntPlaceholder}</span>{" "}
        <i data-ico="clipboard"></i>
      </p>
      {showMessage && <aside className="message">Copied</aside>}
    </section>
  );
};

export default Clipboard;
