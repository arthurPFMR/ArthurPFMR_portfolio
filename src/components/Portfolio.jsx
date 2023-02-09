import React from "react";

import getData from "../assets/database/projects.json";

// {
//   console.log(getData.projects[0].image);
// }

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h2>PORTFOLIO</h2>
      <div className="bar"></div>
      <ul className="flexCard">
        {getData.projects.map((projects, id) => (
          <div>
            <li className="projects">
            <img src={projects.image} alt="lala" />
            <p className="portfolioText" key={id}>{projects.description}</p>
            </li>
          </div>
        ))}
      </ul>
      {/* <img src={getData.projects[0].image} alt="lala" /> */}
    </div>
  );
};

export default Portfolio;
