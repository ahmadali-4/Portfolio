import React from "react";
import "./navbar.scss";
import { IconGithub, IconLinkedin, IconUpwork } from "../../utils/IconsData";
import resumePdf from "../../assets/Resume.pdf";

export const Navbar = () => {

  const handleDownloadResume = () => {
    // Create a virtual link element
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'resume.pdf';
    // Simulate a click event to trigger the download
    document.body.appendChild(link);
    link.click();
    // Clean up the link element
    document.body.removeChild(link);
  };

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
          <button onClick={handleDownloadResume} >My Resume</button>
        </div>
      </div>
    </div>
  );
};
