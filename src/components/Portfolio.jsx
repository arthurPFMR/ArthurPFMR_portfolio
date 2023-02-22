import React from "react";

import tvImg from "../assets/images/television.png";
import getData from "../assets/database/projects.json";
import Slideshow from "./Slideshow";

const Portfolio = () => {
  const data = getData.projects.find((data) => data);
console.log(getData.projects[1].image);

  return (
    
    <div className="portfolio">
      <h2>PORTFOLIO</h2>
      <div className="bar"></div>
      <div className="tv">
        <img className="tvBorder" src={tvImg} alt="cadre tv" />
        <div>
        {/* {getData.map((image, id) => (
          <Slideshow key={id} image={image} />
        ))} */}
        <Slideshow data={data} image={data.image} description={data.description} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
