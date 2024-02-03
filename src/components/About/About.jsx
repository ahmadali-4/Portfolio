import React from "react";
import "./about.scss";
import skills from "../../utils/data"

export const About = () => {
  return (
    <div className="about-container">
      <div className="headline">
        <div className="line"></div>
        <h3>About</h3>
      </div>
      <div className="text-wrapper">
        <div className="text-container">
          <div className="text">
            <p>
              Hey! I'm Bob, if you haven't already gathered that by now. I'm a
              painter turned software engineer from Daytona, Florida. I
              specialize in the backend, primarily Node and Rust, but love
              building with whatever tools are right for the job.
            </p>
          </div>
          <div className="text">
            <p>
              I currently
              work for Google on Google Photos. I also toss in my ¢2 with the
              design systems teams from time to time (once an artist, always an
              artist, amirite?).
            </p>
          </div>
          <div className="text">
            <p>
              Outside of work, I still love to paint. Any
              given Sunday you'll find me scribbling some happy clouds with my
              son ☁️ I even teach courses online if you're looking to learn! 
            </p>
          </div>
          <div className="text">
            <p>
              I'm passively looking for new positions where I can merge my love for
              code with my love for the canvas. If you think you've got an
              opening that I might like, let's connect 🔗
            </p>
          </div>
        <div className="link">
          <h2>Links</h2>
          <div className="link-icon">
            <a href="">LinkedIn</a>
            <a href="">GitHub</a>
            <a href="">Insta</a>
          </div>
        </div>
        </div>
        <div className="about-skill">
          <div className="skill-head">
            <div className="skill-title">
              <h3>What I Learn</h3>
            </div>
            <div className="about-items">
            {skills.map(item => (
          <li className="skill-data" key={item.id}>{item.name}</li>
        ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
