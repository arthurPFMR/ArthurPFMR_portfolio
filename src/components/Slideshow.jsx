import React, { useState } from "react";
import getData from "../assets/database/projects.json";

const Slideshow = (props) => {
  const data = getData;

  const filterImg = data.projects.map((obj) => obj.image);
  const filterDescription = data.projects.map((obj) => obj.description);
  const filterTitle = data.projects.map((obj) => obj.title);

  const [indexProjects, setIndexProjects] = useState({ index: 1 });

  const handleNextBtn = () => {
    if (
      (indexProjects.index >= filterImg.length - 1) &
      (filterDescription.length - 1)
    ) {
      return setIndexProjects({
        index: 0,
        // description: 0,
      });
    } else {
      indexProjects.index++;
      // indexOfProjects.description++;

      return setIndexProjects({
        index: indexProjects.index,
        // description: indexOfProjects.description,
      });
    }
  };

  const handlePreviousBtn = () => {
    if (indexProjects.index <= 0) {
      return setIndexProjects({
        index: (filterImg.length - 1) & (filterDescription.length - 1),
        // description: props.length - 1,
      });
    } else {
      indexProjects.index--;
      // indexProjects.description--;

      return setIndexProjects({
        index: indexProjects.index,
      });
    }
  };

  return (
    <div className="projects">
      <button className="previousBtn" onClick={handlePreviousBtn}></button>
      <div>
        <img className="projectsImg" src={filterImg[indexProjects.index]} alt={filterTitle[indexProjects.index]} />
       <p className="projectsDescription" >{filterDescription[indexProjects.index]}</p>
      </div>
      <button className="previousBtn" onClick={handleNextBtn}></button>
      {/* {console.log(setIndexProjects)} */}
      <p className="portofolioText"></p>
    </div>
  );
};

export default Slideshow;
