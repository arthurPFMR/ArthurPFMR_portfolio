import React from "react";
import Career from "./components/Career";
import Description from "./components/Description";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";


const App = () => {
  return (
    <div className="noise">
      <Navbar />
      <Description />
      <Portfolio />
      <Career />
    </div>
  );
};

export default App;
