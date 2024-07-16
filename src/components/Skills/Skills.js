// src/components/Skills/Skills.js

import React from "react";
import classes from "./Skills.module.css";
import PageHeader from "../PageHeader/PageHeader";
import codeThinking from "../../assets/codeThinking.svg";
import SkillList from "./SkillList";
import { skillData } from "./skillsData";

const Skills = () => {
  return (
    <div className={classes.Skills} id="skills">
      <PageHeader title={"Meine Skills"} />
      <p className={classes.Paragraphs}>
        Ich liebe lebenslanges Lernen und genieße es, kontinuierlich neue Dinge
        zu entdecken!
        <br />
        <br />
        Im Laufe der Zeit habe ich mit verschiedenen Programmiersprachen,
        Toolkits, Frameworks und Bibliotheken gearbeitet, und einige davon
        beherrsche ich besser als andere.
        <br />
        <br />
        Dabei bin ich offen neue Techniken und Skills zu lernen!
      </p>
      <div className={classes.Container}>
        <img src={codeThinking} alt="CodeThinking" />
        <br />
        {skillData.map((skillGroup, index) => (
          <div className={classes.List} key={index}>
            <SkillList title={skillGroup.title} skills={skillGroup.skills} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
