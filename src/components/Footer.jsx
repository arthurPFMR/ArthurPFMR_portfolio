import React from 'react';
import LogoImg from "../assets/images/logo.ico";

const Footer = () => {
    return (
        <div className="footer">
            <img src={LogoImg} alt="logo" />
            <p>©2023 Pulfermuller Arthur</p>
        </div>
    );
};

export default Footer;