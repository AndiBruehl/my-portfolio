import React, { useState } from "react";
import { motion } from "framer-motion";

const NavLinks = ({ isMobile, closeMobileMenu }) => {
  const [selectedLink, setSelectedLink] = useState("Home");

  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  const handleLinkClick = (link) => {
    setSelectedLink(link);
    if (isMobile) {
      closeMobileMenu();
    }
  };

  const links = [
    { name: "Home", href: "/my-portfolio/", delay: 0.05 },
    { name: "About Me", href: "/my-portfolio/#about", delay: 0.1 },
    { name: "Skills", href: "/my-portfolio/#skills", delay: 0.15 },
    { name: "Portfolio", href: "/my-portfolio/#portfolio", delay: 0.2 },
    { name: "Links", href: "/my-portfolio/#links", delay: 0.25 },
    { name: "YouTube", href: "/my-portfolio/#youtube", delay: 0.3 },
    { name: "Certificates", href: "/my-portfolio/#certs", delay: 0.35 },
    { name: "Downloads", href: "/my-portfolio/#downloads", delay: 0.4 },
    { name: "Contact", href: "/my-portfolio/#contact", delay: 0.45 },
  ];

  return (
    <ul>
      {links.map(({ name, href, delay }) => (
        <motion.li
          key={name}
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay }}
          onClick={() => handleLinkClick(name)}
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 1.2 }}
          className={selectedLink === name ? "selected" : ""}
        >
          <a href={href}>{name}</a>
        </motion.li>
      ))}
    </ul>
  );
};

export default NavLinks;
