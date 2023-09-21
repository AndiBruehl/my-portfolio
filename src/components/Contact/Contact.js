import React from 'react';
import classes from './Contact.module.css';
import { FaMailBulk, FaYoutube, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const handleURL = (url) => {
  return () => window.open(url, '_blank');
};

const Contacts = () => {
  // Get the current year for the copyright notice
  const currentYear = new Date().getFullYear();

  return (
    <div className={classes.Contact} id="contact">
      <div className={classes.ContactIcons}>
        <motion.div
          whileHover={{ scale: 1.3, color: '#141313' }}>
          <FaYoutube color='white' size='30px' style={{ padding: '1%' }} onClick={handleURL('https://www.youtube.com')} />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3, color: '#141313' }}>
          <FaMailBulk color='white' size='30px' style={{ padding: '1%' }} onClick={handleURL('mailto:a.bruehl2019@gmail.com')} />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3, color: '#141313' }}>
          <FaGithub color='white' size='30px' style={{ padding: '1%' }} onClick={handleURL('https://www.github.com')} />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3, color: '#141313' }}>
          <FaLinkedin color='white' size='30px' style={{ padding: '1%' }} onClick={handleURL('https://www.linkedin.com')} />
        </motion.div>
      </div>
      {/* Copyright notice with new line */}
      <div className={classes.Copyright} style={{ clear: 'both' }}>
        &copy; {currentYear} A. Brühl
      </div>
    </div>
  );
};

export default Contacts;
