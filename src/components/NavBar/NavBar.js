import React, { useState, useEffect } from 'react';
import classes from './NavBar.module.css';

const NavBar = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [activeLink, setActiveLink] = useState('Home'); // Initialize with 'Home'

  // Update the currentDateTime every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  // const daysOfWeek = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
  const daysOfWeek = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
  const currentDayOfWeek = daysOfWeek[currentDateTime.getDay()];

  const formattedDateTime = currentDateTime.toLocaleString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  // Function to handle link click and set the active link
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className={classes.NavBar}>
      <nav>
        <ul>
          <li>
            <a
              href="/#"
              onClick={() => handleLinkClick('Home')}
              className={activeLink === 'Home' ? classes.active : ''}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/#about"
              onClick={() => handleLinkClick('About Me')}
              className={activeLink === 'About Me' ? classes.active : ''}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="/#skills"
              onClick={() => handleLinkClick('Skills')}
              className={activeLink === 'Skills' ? classes.active : ''}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="/#youtube"
              onClick={() => handleLinkClick('YouTube')}
              className={activeLink === 'YouTube' ? classes.active : ''}
            >
              YouTube
            </a>
          </li>
          <li>
            <a
              href="/#contact"
              onClick={() => handleLinkClick('Contact')}
              className={activeLink === 'Contact' ? classes.active : ''}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className={classes.Time}>{currentDayOfWeek}, {formattedDateTime} Uhr</div>
    </div>
  );
};

export default NavBar;
