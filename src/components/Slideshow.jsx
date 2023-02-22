import React, { useState } from "react";

const Slideshow = (props) => {
  const [indexOfProjects, setIndexOfProjects] = useState({
    index: 0,
    description: 0,
  });

  const handleNextBtn = () => {
    if (indexOfProjects.index >= props.length - 1) {
      return setIndexOfProjects({
        index: 0,
        description: 0,
      });
    } else {
      indexOfProjects.index++;
      indexOfProjects.description++;

      return setIndexOfProjects({
        index: indexOfProjects.index,
        description: indexOfProjects.description,
      });
    }
  };

  const handlePreviousBtn = () => {
    if (indexOfProjects.index <= 0) {
      return setIndexOfProjects({
        index: props.length - 1,
        description: props.length - 1,
      });
    } else {
      indexOfProjects.index--;
      indexOfProjects.description--;

      return setIndexOfProjects({
        index: indexOfProjects.index,
        description: indexOfProjects.description,
      });
    }
  };

  return (
    <div className="projects">
      <button className="previousBtn"  onClick={handlePreviousBtn}></button>
      {console.log(handlePreviousBtn)}
        <div>
          <img src={props.image} alt={props.title} />
          <div>{props.description}</div>
        </div>
      <button className="previousBtn" onClick={handleNextBtn}></button>
      {console.log(handleNextBtn)}
      <p className="portofolioText"></p>
    </div>
  );
};

export default Slideshow;
