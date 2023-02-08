import React from "react";
import { NavLink } from "react-router-dom";
import LogoImg from "../assets/images/logo.ico"

const Navbar = () => {
  return (
<div className="navbar">
  <div className="leftContainer">
    <div className="logo">
      <img src={LogoImg} alt="logo" />
    </div>
    <div className="title">
        <p className="name" data-text="PULFERMULLER">PULFERMULLER</p>
        <p className="firstName" data-text="ARTHUR">ARTHUR</p>
    </div>
    </div>
    <div className="nav rightContainer">
      <ul className="menu">
        <NavLink to=""><li>ACCUEIL</li></NavLink>
        <NavLink to=""><li>PORTFOLIO</li></NavLink>
        <NavLink to=""><li>PARCOURS</li></NavLink>
        <NavLink to=""><li>CONTACT</li></NavLink>
      </ul>
    </div>
</div>
  );
};

export default Navbar;
