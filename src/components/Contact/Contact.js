// Contact.js

import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Contact.module.css';
import { FaMailBulk, FaYoutube, FaGithub, FaLinkedin, FaTwitch } from 'react-icons/fa';
import { GrContact } from "react-icons/gr";
import credly_white from "../../assets/credly_white.png";
import ContactForm from './ContactForm';

const Contacts = () => {

  const openContactForm = () => {
    // Calculate the position of the window to center it
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const windowWidth = 640; // The width of the new window
    const windowHeight = 480; // The height of the new window
    const left = (screenWidth - windowWidth) / 2;
    const top = (screenHeight - windowHeight) / 2;
  
    // Open the new window and center it
    const ContactFormWindow = window.open("", "_blank", `width=${windowWidth},height=${windowHeight},left=${left},top=${top}`);
    ContactFormWindow.document.write("<html><head><title>Contact</title></head><body>");
    ContactFormWindow.document.write("<div id='ContactForm'></div>");
    ContactFormWindow.document.write("</body></html>");
  
    // Render the ContactForm into the new window
    ReactDOM.render(<ContactForm />, ContactFormWindow.document.getElementById("ContactForm"));
  };
  

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

   return (
    <div className={classes.Contact} id="contact">
      <div className={classes.ContactIcons}>
        <div className="footer-icons">
          <a href="https://github.com/AndiBruehl" target="_blank" rel="noreferrer">
            <FaGithub style={githubIconStyle} />
          </a>
          <a href="https://www.linkedin.com/in/andreas-br%C3%BChl/" target="_blank" rel="noreferrer">
            <FaLinkedin style={linkedInIconStyle} />
          </a>
          <a href="mailto:a.bruehl2019@gmail.com" target="_blank" rel="noreferrer">
            <FaMailBulk style={emailIconStyle} />
          </a>
          <a href="https://www.credly.com/users/andreas-bruhl/badges" target="_blank" rel="noreferrer">
            <img src={credly_white} alt="Credly" style={credlyIconStyle} />
          </a>
          <a href="https://www.youtube.com/@andreasbruehldev" target="_blank" rel="noreferrer">
            <FaYoutube style={youtubeIconStyle} />
          </a>
          <a href="https://www.twitch.tv/tigersoul89" target="_blank" rel="noreferrer">
            <FaTwitch style={youtubeIconStyle} />
          </a>
          {/* Add a valid href or use a button instead */}
          <a href="#contact-form" onClick={e => { e.preventDefault(); openContactForm(); }}> 
            <GrContact style={messageIconStyle} />
          </a>
        </div>
      </div>

      <p className={classes.FooterText}>
        &copy; {currentYear} A. Brühl - All rights reserved
      </p>
    </div>
  );
};


export default Contacts;
