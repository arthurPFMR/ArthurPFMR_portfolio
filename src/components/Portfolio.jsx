import React from "react";

import getData from "../assets/database/projects.json";
import tvImg from "../assets/images/television.png";
import Slideshow from "./Slideshow";

// {
//   console.log(getData.projects[0].image);
// }

const Portfolio = () => {
  const data = getData.projects.find((data) => data);
  {console.log(data);}
  return (
    <div className="portfolio">
      <h2>PORTFOLIO</h2>
      <div className="bar"></div>
      <div className="tv">
        <img className="tvBorder" src={tvImg} alt="cadre tv" />
        <button className="previousBtn"></button>
        <div className="projects">
          <img className="projectsImg" src={data.image} alt="lala" />
          <p className="portofolioText">{data.description}</p>
        </div>
        {/* <ul className="flexCard">
        {getData.projects.map((projects, id) => (
          <div>
            <li className="projects">
              <img className="projectsImg" src={projects.image} alt="lala" />
              <p className="portfolioText" key={id}>
                {projects.description}
              </p>
            </li>
          </div>
        ))}
      </ul> */}
      </div>
    </div>
  );
};

export default Portfolio;
