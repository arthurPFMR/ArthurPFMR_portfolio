import React from "react";
import Description from "./components/Description";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";


const App = () => {
  return (
    <div className="noise">
      <Navbar />
      <Description />
      <Portfolio />
    </div>
  );
};

export default App;
