import React from "react";
import "./about.scss";
import skills from "../../utils/data";
import { IconGithub, IconLinkedin, IconUpwork } from "../../utils/IconsData";

export const About = () => {
  return (
    <div className="about-container">
      <div className="headline">
        <div className="line"></div>
        <div className="circle"></div>
        <h3>About</h3>
      </div>
      <div className="text-wrapper">
        <div className="text-container">
          <div className="text">
            <p>
              Hello there! I'm Ahmad Ali, a creative force in the digital realm,
              specializing in both UI/UX design and web development.
            </p>
          </div>
          <div className="text">
            <p>
              <span>As a UI/UX Designer:</span> Dive into my world of design
              where I merge aesthetics with functionality to craft captivating
              user experiences. From wireframes to polished prototypes, I strive
              to create interfaces that not only look beautiful but also delight
              users at every interaction. Let's work together to make your
              digital dreams a reality! 💻🎨
            </p>
          </div>
          <div className="text">
            <p>
              <span>As a Web Developer:</span> Explore my arsenal of web
              development projects where I bring concepts to life with code.
              From responsive websites to dynamic web applications, I thrive on
              pushing the boundaries of what's possible in the online world.
              Let's collaborate and turn your ideas into digital masterpieces!
              🚀🌐
            </p>
          </div>
          <div className="text">
            <p>
              <span>Looking to Hire or Collaborate?</span> Whether you're
              seeking a skilled designer or a proficient developer, I'm here to
              bring your projects to fruition. Let's discuss your needs, explore
              opportunities for partnership, and embark on a journey of
              creativity and innovation together. Drop me a line, and let's make
              magic happen! ✨🤝
            </p>
          </div>
          <div className="link">
            <h2>Links</h2>
            <div className="link-icon">
              <a href=""><IconLinkedin className="lnk-icons"/></a>
              <a href=""><IconGithub className="lnk-icons"/></a>
              <a href=""><IconUpwork className="lnk-icons"/></a>
            </div>
          </div>
        </div>
        <div className="about-skill">
          <div className="skill-head">
            <div className="skill-title">
              <h3>What I Learn</h3>
            </div>
            <div className="about-items">
              {skills.map((item) => (
                <div className="item-wrapper">
                  <li className="skill-data" key={item.id}>
                    {item.name}
                  </li>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
