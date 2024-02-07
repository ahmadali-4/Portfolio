import React from "react";
import "./navbar.scss";
import { IconGithub, IconLinkedin, IconUpwork } from "../../utils/IconsData";

export const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="wrapper">
        <div className="icon-container">

        <div className="icon">
        <IconGithub  className="glow-icon" />
        </div>
        <div className="icon">
        <IconLinkedin className="glow-icon" />
        </div>
        <div className="icon">
          <IconUpwork className="glow-icon" />

        </div>
        </div>
          
       
        <div className="nav-btn">
          <button>My Resume</button>
        </div>
      </div>
    </div>
  );
};
