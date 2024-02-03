import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faProjectDiagram,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./navbar.scss";

export const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="wrapper">
        <div className="icon">
          <FontAwesomeIcon icon={faHome} className="glow-icon" />
          <FontAwesomeIcon icon={faUser} className="glow-icon" />
          <FontAwesomeIcon icon={faProjectDiagram} className="glow-icon" />
          <FontAwesomeIcon icon={faEnvelope} className="glow-icon" />
        </div>
        <div className="nav-btn">
          <button>My Resume</button>
        </div>
      </div>
    </div>
  );
};
