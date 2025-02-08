import { useState } from "react";
import SkillInfo from "./SkillInfo";
import skillsData from "./data";
import "./Skills.css";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<string>("Frontend");

  return (
    <section id="Skills" className="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        <div className="select-skill-to-display">
          {skillsData.map((skill) => (
            <div
              className={`skill-card ${
                skill.title === selectedSkill && "selected"
              }`}
              key={skill.title}
              onClick={() => setSelectedSkill(skill.title)}
            >
              <img
                src={skill.iconURL}
                className="skill-card-img"
                alt={skill + "image"}
              />
              <h3>{skill.title}</h3>
            </div>
          ))}
        </div>

        <SkillInfo selectedSkill={selectedSkill} />
      </div>
    </section>
  );
};
export default Skills;
