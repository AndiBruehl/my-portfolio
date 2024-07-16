// src/components/Links/Links.js

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PageHeader from "../PageHeader/PageHeader";
import classes from "./Links.module.css";
import linksData from "./LinksData"; // Import the links data

const svgStyles = {
  filter: "invert(1)", // Invert the colors of the SVG
};

const containerStyles = {
  margin: "0 15%",
  marginTop: "-3%",
  backgroundColor: "rgba(135, 206, 235, 0.5)",
  padding: "2%",
  borderRadius: "20px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
  display: "flex",
  zIndex: 2000000000000,
  maxWidth: "100vw",
  marginLeft: "20vw",
};

const textContainerStyles = {
  flex: 1,
  paddingRight: "20px",
};

const paragraphStyles = {
  fontWeight: "normal",
  fontSize: "18px",
  marginBottom: "20px",
  fontFamily: '"Playfair Display", serif',
  color: "white",
  textDecoration: "none",
};

const Links = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();

  useEffect(() => {
    const animateInView = async () => {
      if (inView) {
        await animation.start({
          x: 0,
          transition: { type: "spring", duration: 1, bounce: 0.3 },
        });
      } else {
        await animation.start({ x: "100vw" });
      }
    };

    animateInView();
  }, [inView, animation]);

  return (
    <div className={classes.Links} id="links">
      <PageHeader title="Links" />
      <div ref={ref} className={classes.DownloadContent}>
        <motion.div initial={{ x: "-100vw" }} animate={animation}>
          <div id="root">
            <div className="welcome-section" style={containerStyles}>
              <div style={textContainerStyles}>
                <br />
                {linksData.map(({ href, icon, alt, text, extraLink }) => (
                  <p style={paragraphStyles} key={href}>
                    <a href={href} target="_blank" rel="noreferrer">
                      <img
                        src={icon}
                        width="20px"
                        height="20px"
                        alt={alt}
                        style={svgStyles}
                      />{" "}
                      {text}
                      {extraLink && (
                        <a
                          href={extraLink.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {extraLink.text}
                        </a>
                      )}
                    </a>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Links;
