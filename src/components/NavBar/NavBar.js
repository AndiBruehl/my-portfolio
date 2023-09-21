import React, { useState, useEffect } from 'react';
import classes from './NavBar.module.css';

const NavBar = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

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

  return (
    <div className={classes.NavBar}>
      <nav>
        <ul>
          <li>
            <a href="/#">Home</a>
          </li>
          <li>
            <a href="/#about">About Me</a>
          </li>
          <li>
            <a href="/#skills">Skills</a>
          </li>
          <li>
            <a href="/#youtube">YouTube</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className={classes.Time}>{currentDayOfWeek}, {formattedDateTime} Uhr</div>
    </div>
  );
};

export default NavBar;
