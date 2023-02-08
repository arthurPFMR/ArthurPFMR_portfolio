import React from "react";
import bioImg from "../assets/images/ident.png";

const Description = () => {
  return (
    <div className="description">
      <div className="left">
        <p className="descripionPartOne">DÉVELOPPEUR</p>
        <p className="descripionPartTwo margin">FRONTEND</p>
        <p className="descripionPartThree margin">
          CRÉATIF
          <div className="roller">
            <span className="rolltext">
              CONSCIENCIEUX
              <br />
              DÉTERMINÉ
              <br />
              CALME
              <br />
              AGILE
              <br />
              <span className="sentence">sensible à l'UX DESIGN</span>
            </span>
          </div>
        </p>
      </div>
      <div className="right">
        <img src={bioImg} alt="Arthur" />
      </div>
    </div>
  );
};

export default Description;
