import React from "react";

import Slideshow from "./Slideshow";

import tvImg from "../assets/images/television.png";

const Portfolio = () => {
  // const data = getData.projects.find((data) => data);
// console.log(getData.projects[1].image);


  return (
    
    <div className="portfolio">
      <h2>PORTFOLIO</h2>
      <div className="bar"></div>
      <div className="tv">
        <img className="tvBorder" src={tvImg} alt="cadre tv" />
        <Slideshow />
      </div>
    </div>
  );
};

export default Portfolio;
