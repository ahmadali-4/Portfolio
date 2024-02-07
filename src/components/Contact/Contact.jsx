import React from "react";
import "./contact.scss";

export const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <div className="contact-title">
          <h3>Contact </h3>
          <div className="circle"></div>
       

        </div>
        <div className="contact-sub">
          <p>
            Shoot me an email if you want to connect! You can also find me on
            <a href="https://www.linkedin.com/in/ahmadali4" target="_blank"> Linkedin</a> or <br /> <a href="#"> Twitter</a> if that's more your speed.
          </p>
        </div>
        <div className="contact-email">
          <a href="mailto:ahmada02981@gmail.com"><span>ahmada02981@gmail.com</span></a>
        </div>
      </div>
    </div>
  );
};
