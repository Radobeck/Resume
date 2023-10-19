import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div>
      {" "}
      <div className="experience">
        <div className="experience-top">
          <h4 className="experience-h4">EXPERIENCE</h4>
        </div>

        <div className="exp-bottom">
          <div className="exp-bottom-left">
            <p className="exp-bottom-left-p" id="exp-bottom-left-p1">
              2018 - 2020
            </p>
            <p className="exp-bottom-left-p" id="exp-bottom-left-p2">
              2018 - 2020
            </p>
          </div>

          <div className="exp-bottom-right">
            <p className="paragraph">COLLEGE NAME 1</p>
            <p className="exp-bottom-right-p" id="exp-bottom-right-p1">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod tempor.
            </p>

            <p className="paragraph">COLLEGE NAME 1</p>
            <p className="exp-bottom-right-p" id="exp-bottom-right-p2">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod tempor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
