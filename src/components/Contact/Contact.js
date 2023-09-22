import React, { useState } from 'react';
import classes from './Contact.module.css';
import { FaMailBulk, FaYoutube, FaGithub, FaLinkedin } from 'react-icons/fa';
// import {FaEnvelope } from 'react-icons/fa';
import credly_white from "../../assets/credly_white.png";
// import ContactForm from './ContactForm'; // Import the ContactForm component

const Contacts = () => {
  // Get the current year for the copyright notice
  const currentYear = new Date().getFullYear();

  const githubIconStyle = {
    margin: "1vw",
    marginTop: "1vh",
    fontSize: '3vw', // Adjust the font size for the GitHub icon
  };

  const linkedInIconStyle = {
    margin: "1vw",
    marginTop: "1vh",
    fontSize: '3vw', // Adjust the font size for the LinkedIn icon
  };

  const emailIconStyle = {
    margin: "1vw",
    marginTop: "1vh",
    fontSize: '3vw', // Adjust the font size for the Email icon
  };

  const youtubeIconStyle = {
    margin: "1vw",
    marginTop: "1vh",
    fontSize: '3vw', // Adjust the font size for the Email icon
  };

  const messageIconStyle = {
    margin: "1vw",
    marginTop: "1vh",
    fontSize: '3vw', // Adjust the font size for the Email icon
  };

  const credlyIconStyle = {
    margin: "1vw",
    marginTop: "1vh",
    width: '6vw', // Adjust the width for the Credly icon
  };

  const containerStyle = {
    textAlign: "center", // Center all content horizontally
  };

  // State to control whether to show the email form
  const [showEmailForm, setShowEmailForm] = useState(false);

  return (
    <div className={classes.Contact} id="contact">
      <div className={classes.ContactIcons}>
        <div className="footer-icons">
          <a href="https://github.com/AndiBruehl" target="_blank">
            <FaGithub style={githubIconStyle} />
          </a>
          <a href="https://www.linkedin.com/in/andreas-br%C3%BChl/" target="_blank">
            <FaLinkedin style={linkedInIconStyle} />
          </a>
          <a href="mailto:a.bruehl2019@gmail.com" target="_blank">
            <FaMailBulk style={emailIconStyle} />
          </a>
          <a href="https://www.credly.com/users/andreas-bruhl/badges" target="_blank">
            <img src={credly_white} alt="Credly" style={credlyIconStyle} />
          </a>
          <a href="https://www.youtube.com/@andreasbruehldev" target="_blank">
            <FaYoutube style={youtubeIconStyle} />
          </a>
          {/* <a href="#" onClick={() => setShowEmailForm(!showEmailForm)}>
            <FaEnvelope style={messageIconStyle} />
          </a> */}
        </div>
      </div>

      {/* Conditionally render the ContactForm */}
      {/* {showEmailForm && <ContactForm />} */}

      <p className={classes.Copyright} style={{ clear: 'both' }}>
        &copy; {currentYear} A. Brühl - All rights reserved
      </p>
    </div>
  );
};

export default Contacts;
