import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <div>
      <div className="main">
        <div className="main-left">
          <img
            className="main-img"
            src="https://m.media-amazon.com/images/I/61PdVxgNq8L._AC_UF894,1000_QL80_.jpg"
            alt="main-photo"
          />
        </div>

        <div className="main-right">
          <div className="main-right-top">
            <h1 className="main-h1-top">STEVE</h1>
          </div>

          <div className="main-right-bottom">
            <h1 className="main-h1-bottom">JOBS</h1>
            <h2 className="main-h2">UX/UI DESIGNER</h2>
            <p className="main-p">
              Lorem ipsum dolor sit, amet consectetur adipisicing
              <br /> elit. Sequi iusto laboriosam voluptatibus repellat <br />
              est maxime consequuntur
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
