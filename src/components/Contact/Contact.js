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
import { motion } from "framer-motion";
import ImprintModal from "./ImprintModal";

const svgStyles = {
  filter: "invert(1)", // Invert the colors of the SVG
};

const Contacts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openContactForm = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const openImprint = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const currentYear = new Date().getFullYear();

  const iconStyle = {
    margin: "1vw",
    marginTop: "1vh",
    fontSize: "3vw",
  };

  const credlyIconStyle = {
    margin: "1vw",
    marginTop: "1vh",
    width: "6vw",
  };

  return (
    <motion.div
      className={classes.Contact}
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={classes.ContactIcons}>
        <div className={classes.footerIcons}>
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
      <br />
      <div
        style={{
          marginTop: "-25px",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <a
          href="https://shop.tredition.com/author/michael-jeremy-hard"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://shop.tredition.com/img/tredition_SHOP_Logo.svg"
            height="30vw"
            alt="tredition"
            style={svgStyles}
          />
        </a>
      </div>
      <p className={classes.FooterText}>
        &copy; {currentYear} A. Brühl - All rights reserved
      </p>

      <a
        href="#imprint-form"
        onClick={openImprint}
        style={{ textDecoration: "none" }}
      >
        Legal Notice
      </a>
      {isModalOpen && <ImprintModal onClose={closeModal} />}
    </motion.div>
  );
};

export default Contacts;
