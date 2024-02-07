import React from "react";
import "./hero.scss";
import Background from "../background/Background";

export const Hero = () => {
  return (
    <div className="hero-container">
      <div className="background-wrapper">
        <Background />
      </div>

        <div className="title">
          <h1>Hey, I'm Ahmad.</h1>
        </div>
        <div className="sub-title">
          <h3>
            I'm a <span>Full Stack Developer</span>
          </h3>
        </div>
        <p>
          A web developer committed to crafting compelling digital experiences.
          Explore my work to see how I bring creativity and innovation to life
          online.<br/>Let's connect and create something amazing together!🌐
        </p>
        <div className="Hero-button">
          <button>Contact me</button>
        </div>
      <div className="wrapper">
      </div>
    </div>
  );
};
