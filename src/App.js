import React from "react";
import Career from "./components/Career";
import Contact from "./components/Contact";
import Description from "./components/Description";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";


const App = () => {
  return (
    <div className="noise">
      <Navbar />
      <Description />
      <Portfolio />
      <Career />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
