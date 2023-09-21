import React from 'react';
import classes from './Contact.module.css';
import { FaMailBulk, FaYoutube, FaGithub, FaLinkedin } from 'react-icons/fa';

const handleURL = (url) => {
  return () => window.open(url, '_blank');
};

const Contacts = () => {
  // Get the current year for the copyright notice
  const currentYear = new Date().getFullYear();

  return (
    <div className={classes.Contact} id="contact">
      <div className={classes.ContactIcons}>
        <FaYoutube color='white' size='30px' style={{ padding: '1%' }} onClick={handleURL('https://www.youtube.com')} />
        <FaMailBulk color='white' size='30px' style={{ padding: '1%' }} onClick={handleURL('mailto:a.bruehl2019@gmail.com')} />
        <FaGithub color='white' size='30px' style={{ padding: '1%' }} onClick={handleURL('https://www.github.com')} />
        <FaLinkedin color='white' size='30px' style={{ padding: '1%' }} onClick={handleURL('https://www.linkedin.com')} />
      </div>
      {/* Copyright notice with new line */}
      <div className={classes.Copyright} style={{ clear: 'both' }}>
        &copy; {currentYear} A. Brühl
      </div>
    </div>
  );
};

export default Contacts;
