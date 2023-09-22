import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NavLinks = (props) => {
  const [selectedLink, setSelectedLink] = useState('Home');

  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  const handleLinkClick = (link) => {
    setSelectedLink(link);
    if (props.isMobile) {
      props.closeMobileMenu();
    }
  };

  return (
    <ul>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.05 }}
        onClick={() => handleLinkClick('Home')}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 1.2 }}
        className={selectedLink === 'Home' ? 'selected' : ''}
      >
        <a href="/#">Home</a>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.10 }}
        onClick={() => handleLinkClick('About Me')}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 1.2 }}
        className={selectedLink === 'About Me' ? 'selected' : ''}
      >
        <a href="/#about">About Me</a>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.20 }}
        onClick={() => handleLinkClick('Skills')}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 1.2 }}
        className={selectedLink === 'Skills' ? 'selected' : ''}
      >
        <a href="/#skills">Skills</a>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.30 }}
        onClick={() => handleLinkClick('YouTube')}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 1.2 }}
        className={selectedLink === 'YouTube' ? 'selected' : ''}
      >
        <a href="/#youtube">YouTube</a>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.40 }}
        onClick={() => handleLinkClick('Contact')}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 1.2 }}
        className={selectedLink === 'Contact' ? 'selected' : ''}
      >
        <a href="/#contact">Contact</a>
      </motion.li>
    </ul>
  );
};

export default NavLinks;
