// Contact.js

import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Contact.module.css';
import { FaMailBulk, FaYoutube, FaGithub, FaLinkedin, FaTwitch, FaEnvelope } from 'react-icons/fa';
import credly_white from "../../assets/credly_white.png";
import ContactForm from './ContactForm';

const Contacts = () => {

  const openContactForm = () => {
    // Berechnen der Position des Fensters, um es zentriert zu platzieren
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const windowWidth = 640; // Die Breite des neuen Fensters
    const windowHeight = 480; // Die Höhe des neuen Fensters
    const left = (screenWidth - windowWidth) / 2;
    const top = (screenHeight - windowHeight) / 2;
  
    // Öffnen des neuen Fensters und Zentrieren
    const ContactFormWindow = window.open("", "_blank", `width=${windowWidth},height=${windowHeight},left=${left},top=${top}`);
    ContactFormWindow.document.write("<html><head><title>Kontakt</title></head><body>");
    ContactFormWindow.document.write("<div id='ContactForm'></div>");
    ContactFormWindow.document.write("</body></html>");
  
    // Rendern des ContactForm in das neue Fenster
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
          <a href="https://www.twitch.tv/tigersoul89" target="_blank">
            <FaTwitch style={youtubeIconStyle} />
          </a>
          <a href="" onClick={e => { e.preventDefault(); openContactForm(); }}> 
            <FaEnvelope style={messageIconStyle} />
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
