import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <div>
      <div className="education">
        <div className="education-top">
          <h4 className="education-h4">EDUCATION</h4>
        </div>

        <div className="edu-bottom">
          <div className="edu-bottom-left">
            <p className="edu-bottom-left-p" id="edu-bottom-left-p1">
              2018 - 2020
            </p>
            <p className="edu-bottom-left-p" id="edu-bottom-left-p2">
              2018 - 2020
            </p>
          </div>

          <div className="edu-bottom-right">
            <p className="paragraph">COLLEGE NAME 1</p>
            <p className="edu-bottom-right-p" id="edu-bottom-right-p1">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod tempor.
            </p>
            <p className="paragraph">COLLEGE NAME 1</p>
            <p className="edu-bottom-right-p" id="edu-bottom-right-p2">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod tempor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
