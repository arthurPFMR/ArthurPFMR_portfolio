import React from "react";

import MailImg from "../assets/images/mail.png"
import gitImg from "../assets/images/mail.png"

const Contact = () => {
  return (
    <div className="contact">
      <h2>CONTACT</h2>
      <div className="bar"></div>
      <div className="contactContent">
        <div className="contactMe">
        <p>ME CONTACTER:</p>
        </div>
        <div className="mailLink">
        <address>
          <a href="mailto:arthur.pulfermuller@gmail.com">
          <img src={MailImg} alt="lien vers email" />
          </a>
        </address>
        </div>
        <div className="socialMedia">
          <a href="https://github.com/arthurPFMR">
            <img src={gitImg} alt="lien vers github" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
