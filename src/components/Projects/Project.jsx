import React from "react";
import "./project.scss";

export const Project = () => {
  return (
    <div className="project-container">
      <div className="project-head">
        <div className="project-line"></div>
        <h3>Project</h3>
        <div className="project-circle"></div>
      </div>
      <div className="project-wrapper">
        <div className="project-box">
          <div className="image-box"></div>
          <div className="text-box">
            <div className="text-title">
              <h2>Paint.app</h2>
              <div className="line"></div>
            </div>
            <div className="text-sub">
              <h3>Flutter - MUI - Python - FastAPI</h3>
            </div>
            <div className="text-discription">
              <p>
                A real-time coaching app for students learning to paint. This
                app is my baby, designed and built on my own{" "}
                <span> learn more</span>
              </p>
            </div>
          </div>
        </div>
        <div className="project-box">
          <div className="image-box"></div>
          <div className="text-box">
            <div className="text-title">
              <h2>Paint.app</h2>
              <div className="line"></div>
            </div>
            <div className="text-sub">
              <h3>Flutter - MUI - Python - FastAPI</h3>
            </div>
            <div className="text-discription">
              <p>
                A real-time coaching app for students learning to paint. This
                app is my baby, designed and built on my own
                <span>learn more</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
