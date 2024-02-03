import React from 'react'
import "./project.scss"

export const ProjectCard = () => {
  return (
    <div className="project-box">
          <div className="image-box">
            <img src="/about-image.png" alt="" />
          </div>
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
  )
}
