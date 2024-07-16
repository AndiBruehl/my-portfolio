// src/components/Downloads/Downloads.js

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import classes from "./Downloads.module.css";
import PageHeader from "../PageHeader/PageHeader";
import downloadsData from "./DownloadsData"; // Import the downloads data

const Downloads = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const animation = useAnimation();

  useEffect(() => {
    const animateInView = async () => {
      if (inView) {
        await animation.start({
          x: 0,
          transition: { type: "spring", duration: 1, bounce: 0.3 },
        });
      } else {
        await animation.start({
          x: "100vw",
        });
      }
    };

    animateInView(); // Call the animation
  }, [inView, animation]);

  const handleDownload = (event, link) => {
    event.preventDefault(); // Prevent the default action of the link

    // Create a link to the PDF file
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = link;
    a.target = "_blank"; // Open in a new tab
    a.rel = "noopener noreferrer"; // Security best practice for opening in a new tab

    // Append the a element to the DOM and simulate the click
    document.body.appendChild(a);
    a.click();

    // Remove the a element from the DOM
    document.body.removeChild(a);
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

  const h2Style = {
    fontWeight: "normal",
    fontSize: "26px",
    marginBottom: "15px",
    fontStyle: "italic bold",
    fontFamily: '"Playfair Display", serif',
    color: "white",
  };

  const h3Style = {
    fontWeight: "normal",
    fontSize: "16px",
    marginBottom: "16px",
    fontStyle: "italic bold",
    fontFamily: '"Playfair Display", serif',
    color: "white",
  };

  const paragraphStyles = {
    fontWeight: "normal",
    fontSize: "18px",
    marginBottom: "20px",
    fontFamily: '"Playfair Display", serif',
    color: "white",
  };

  const linkStyles = {
    color: "white",
    textDecoration: "none", // No underline
  };

  return (
    <div className={classes.Downloads} id="downloads">
      <PageHeader title={"Downloads"} />
      <div ref={ref} className={classes.DownloadContent}>
        <motion.div initial={{ x: "-100vw" }} animate={animation}>
          <div id="root">
            <div className="welcome-section" style={containerStyles}>
              <div style={textContainerStyles}>
                <h2 style={h2Style}>Downloads</h2>
                <h3 style={h3Style}>
                  (Weiterleitung erfolgt auf GoogleDrive, dort stehen die
                  Dateien zur Verfügung.)
                </h3>
                <br></br>
                {downloadsData.map((download) => (
                  <p style={paragraphStyles} key={download.id}>
                    <a
                      href={download.id}
                      onClick={(e) => handleDownload(e, download.link)}
                      style={linkStyles}
                    >
                      {download.text}
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

export default Downloads;
