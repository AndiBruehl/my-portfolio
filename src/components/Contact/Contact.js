import React, { useState } from "react";
import classes from "./Contact.module.css";
import {
  FaMailBulk,
  FaYoutube,
  FaGithub,
  FaLinkedin,
  FaTwitch,
} from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import credly_white from "../../assets/credly_white.png";
import ContactModal from "./ContactModal";
import { motion } from "framer-motion"; // Import Framer Motion
// import VisitCounter from "../VisitCounter/VisitCounter";

const Contacts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openContactForm = (e) => {
    e.preventDefault(); // Prevents the default behavior of navigating to a new page
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const currentYear = new Date().getFullYear();

  const iconStyle = {
    margin: "1vw",
    marginTop: "1vh",
    fontSize: "3vw", // Adjust the font size for the icons
  };

  const credlyIconStyle = {
    margin: "1vw",
    marginTop: "1vh",
    width: "6vw", // Adjust the width for the Credly icon
  };

  return (
    <motion.div
      className={classes.Contact}
      id="contact"
      initial={{ opacity: 0 }} // Initial opacity set to 0
      animate={{ opacity: 1 }} // Animate opacity to 1
      exit={{ opacity: 0 }} // Animate opacity to 0 when modal is closed
    >
      <div className={classes.ContactIcons}>
        <div className="footer-icons">
          <a
            href="https://github.com/AndiBruehl"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub style={iconStyle} />
          </a>
          <a
            href="https://www.linkedin.com/in/andreas-br%C3%BChl/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin style={iconStyle} />
          </a>
          <a
            href="mailto:a.bruehl2019@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaMailBulk style={iconStyle} />
          </a>
          <a
            href="https://www.credly.com/users/andreas-bruhl/badges"
            target="_blank"
            rel="noreferrer"
          >
            <img src={credly_white} alt="Credly" style={credlyIconStyle} />
          </a>
          <a
            href="https://www.youtube.com/@andreasbruehldev"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube style={iconStyle} />
          </a>
          <a
            href="https://www.twitch.tv/tigersoul89"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitch style={iconStyle} />
          </a>
          <a href="#contact-form" onClick={openContactForm}>
            <GrContact style={iconStyle} />
          </a>
        </div>
      </div>

      {/* <VisitCounter measurementID="G-N12S56676D" /> */}

      <p className={classes.FooterText}>
        &copy; {currentYear} A. Brühl - All rights reserved
      </p>

      {isModalOpen && <ContactModal onClose={closeModal} />}
    </motion.div>
  );
};

export default Contacts;
