import React, { useState } from "react";

import getData from "../assets/database/projects.json";

const Slideshow = () => {
  const [currentImg, SetcurrentImg] = useState([{ index: 1, counter: 1 }]);

  const data = getData.projects.find((data) => data);

  return (
    <div className="slideshow">
        {/* {getData.projects.map((projects, id) => (
          <div>
              <img key={id} className="projectsImg" src={projects.image} alt="lala" />
          </div>
        ))} */}
        <img className="projectsImg" src={data.image[currentImg.index]} alt="lala" />
    </div>
  );
};

export default Slideshow;
