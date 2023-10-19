import React from "react";
import "./Skills.css";
import scale1 from "../Images/skill-scale1.svg";
import scale2 from "../Images/skill-scale2.svg";
import scale3 from "../Images/skill-scale3.svg";
import scale4 from "../Images/skill-scale4.svg";
const Skills = () => {
  return (
    <div>
      <div className="skills">
        <div className="skills-top">
          <h4 className="skills-h4">SKILLS</h4>
        </div>

        <div className="skills-bottom">
          <p className="paragraph">SKILL1</p>
          <img src={scale1} alt="" />
          <p className="paragraph">SKILL2</p>
          <img src={scale2} alt="" />
          <p className="paragraph">SKILL3</p>
          <img src={scale3} alt="" />
          <p className="paragraph">SKILL4</p>
          <img src={scale4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
