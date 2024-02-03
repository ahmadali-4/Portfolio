import React from "react";
import "./project.scss";
import { ProjectCard } from "./ProjectCard";

export const Project = () => {
  return (
    <div className="project-container">
      <div className="project-head">
        <div className="project-line"></div>
        <h3>Project</h3>
        <div className="project-circle"></div>
      </div>
      <div className="project-wrapper">
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
      </div>
    </div>
  );
};
