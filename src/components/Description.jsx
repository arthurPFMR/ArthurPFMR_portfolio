import React from "react";
import bioImg from "../assets/images/ident.png";

const Description = () => {
  return (
    <div className="description">
      <div className="top"></div>
      <div className="left">
        <h1>
          {/* changer les p car erreur console DOMnesting */}
        <p className="descripionPartOne">DÉVELOPPEUR</p>
        <p className="descripionPartTwo margin">WEB</p>
        <p className="descripionPartThree margin">
          FRONTEND
          <div className="roller">
            <span className="rolltext">
              CONSCIENCIEUX
              <br />
              CRÉATIF
              <br />
              CALME
              <br />
              ÉSPRIT D'ÉQQUIPE
              <br />
              <span className="sentence">sensible à l'UX DESIGN</span>
            </span>
          </div>
        </p>
        </h1>
      </div>
      <div className="right">
        <img src={bioImg} alt="Arthur" />
      </div>
    </div>
  );
};

export default Description;
