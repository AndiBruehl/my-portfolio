import React from "react";

const listTitleStyle = {
  fontWeight: 900,
  color: "#9B1FE8",
  marginBottom: "4px",
};

const SkillList = ({ title, skills }) => {
  return (
    <ul>
      <li style={listTitleStyle}>{title}</li>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
};

export default SkillList;
