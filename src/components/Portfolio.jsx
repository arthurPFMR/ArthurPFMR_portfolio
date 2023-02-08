import React from "react";

import getData from "../assets/database/projects.json";

// {
//   console.log(getData.projects[0].image);
// }

const Portfolio = () => {
  return (
    <div>
      <ul className="portfolio">
        {getData.projects.map((projects, id) => (
          <div>
            <img src={projects.image} alt="lala" />
            <li key={id}>{projects.description}</li>
          </div>
        ))}
      </ul>
      {/* <img src={getData.projects[0].image} alt="lala" /> */}
    </div>
  );
};

export default Portfolio;
