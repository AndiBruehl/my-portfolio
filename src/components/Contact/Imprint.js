import React from "react";
import { motion } from "framer-motion";

const Imprint = () => {
  return (
    <motion.div
      style={{
        backgroundColor: "#141313",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "75vh",
        color: "white",
        padding: "20px",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="custom-size">Impressum/Imprint</h1>

      <p>
        Andreas Brühl
        {/* <br />
        Schillerstraße 66
        <br />
        99096 Erfurt */}
      </p>

      <h2 className="custom-size">Kontakt/Contact</h2>
      <p>E-mail: a.bruehl2019@gmail.com</p>
      <p>
        Source: <a href="https://www.e-recht24.de">https://www.e-recht24.de</a>
      </p>
    </motion.div>
  );
};

const styles = {
  ".custom-size": {
    fontSize: "1.5rem", // Adjust this value as needed
  },
};

// Adding custom styles to the document
const styleSheet = document.styleSheets[0];
for (const [selector, style] of Object.entries(styles)) {
  const styleString = Object.entries(style)
    .map(([prop, value]) => `${prop}: ${value};`)
    .join(" ");
  styleSheet.insertRule(
    `${selector} { ${styleString} }`,
    styleSheet.cssRules.length
  );
}

export default Imprint;
