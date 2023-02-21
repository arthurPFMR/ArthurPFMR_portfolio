import React from "react";

import tvImg from "../assets/images/television.png";
import getData from "../assets/database/projects.json";
import Slideshow from "./Slideshow";

const Portfolio = () => {


  return (
    <div className="portfolio">
      <h2>PORTFOLIO</h2>
      <div className="bar"></div>
      <div className="tv">
        <img className="tvBorder" src={tvImg} alt="cadre tv" />
      <Slideshow data={getData}
      />

      </div>
    </div>
  );
};

export default Portfolio;
