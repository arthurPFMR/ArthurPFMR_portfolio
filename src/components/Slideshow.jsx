import React, { useState } from "react";
import tvImg from "../assets/images/television.png";
import gitHub from "../assets/images/gitShiny.webp"
import getData from "../assets/database/projects.json";

const Slideshow = () => {
  const data = getData;

  const filterImg = data.projects.map((obj) => obj.image);
  const filterDescription = data.projects.map((obj) => obj.description);
  const filterTitle = data.projects.map((obj) => obj.title);
  const filterLink = data.projects.map((obj) => obj.link);

  const [indexProjects, setIndexProjects] = useState({ index: 0 });

  const handleNextBtn = () => {
    if (
      (indexProjects.index >= filterImg.length - 1) &
      (filterDescription.length - 1) &
      (filterLink.length - 1)
    ) {
      return setIndexProjects({
        index: 0,
      });
    } else {
      indexProjects.index++;

      return setIndexProjects({
        index: indexProjects.index,
      });
    }
  };

  const handlePreviousBtn = () => {
    if (indexProjects.index <= 0) {
      return setIndexProjects({
        index: (filterImg.length - 1) & (filterDescription.length - 1) & (filterLink.length - 1),
      });
    } else {
      indexProjects.index--;

      return setIndexProjects({
        index: indexProjects.index,
      });
    }
  };

  return (
    <div className="projectsSlide">
      <div className="slideBtn">
        <button className="projectsBtn prevBtn" onClick={handlePreviousBtn}></button>
        <button className="projectsBtn nextBtn" onClick={handleNextBtn}></button>
        </div>
      <div className="imgAndText">
        <div className="onTvImg">
          <img className="tvBorder" src={tvImg} alt="cadre tv" />
          <div className="background"></div>
          <img
            className="projectsImg"
            src={filterImg[indexProjects.index]}
            alt={filterTitle[indexProjects.index]}
          />
        </div>
        <div className="projectsDescription">
        <p>
          {filterDescription[indexProjects.index]}
        </p>
        <div className="link">
        <a href={filterLink[indexProjects.index]}>
          <img src={gitHub} alt="Logo github" />
          <p>Voire le projet sur GitHub</p>
          </a>
        </div>
        {/* <a href={filterLink[indexProjects.index]}>ici</a> */}
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
