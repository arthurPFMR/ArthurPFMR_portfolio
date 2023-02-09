import React from "react";
import { NavLink } from "react-router-dom";
import { Link, ScrollLink } from "react-scroll";
import LogoImg from "../assets/images/logo.ico";
import NavbarIcon from "../assets/images/croix.ico";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="leftContainer">
        <div className="logo">
          <img src={LogoImg} alt="logo" />
        </div>
        <div className="title">
          <p className="name" data-text="PULFERMULLER">
            PULFERMULLER
          </p>
          <p className="firstName" data-text="ARTHUR">
            ARTHUR
          </p>
        </div>
      </div>
      <div className="nav rightContainer">
        <ul className="menu">
          <Link to="noise" spy={true} smooth={true} duration={500}>
            <li>ACCUEIL</li>
          </Link>
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <li>PORTFOLIO</li>
          </Link>
          <Link
            to="career"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <li>PARCOURS</li>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <li>CONTACT</li>
          </Link>
        </ul>
      </div>
      <div className="sideNavbar">
        <ul className="icons">
          <Link to="noise" spy={true} smooth={true} duration={500}>
            <img className="iconImg" src={NavbarIcon} alt="retour accueil" />
          </Link>
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <img className="iconImg" src={NavbarIcon} alt="retour accueil" />
          </Link>
          <Link
            to="career"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <img className="iconImg" src={NavbarIcon} alt="retour accueil" />
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <img className="iconImg" src={NavbarIcon} alt="retour accueil" />
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
