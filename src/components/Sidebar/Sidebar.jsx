// Sidebar.jsx

import React, { useEffect, useState } from 'react';
import "./sidebar.scss";

export const Sidebar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedSection, setSelectedSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const sections = ['About', 'Projects', 'Contact'];

      const currentSection = sections.find(section => {
        const targetElement = document.getElementById(section);
        if (targetElement) {
          const targetPosition = targetElement.offsetTop;
          const targetHeight = targetElement.offsetHeight;

          return scrollPosition >= targetPosition && scrollPosition < targetPosition + targetHeight;
        }

        return false;
      });

      setSelectedSection(currentSection || '');
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (section) => {
    const targetElement = document.getElementById(section);

    if (targetElement) {
      const targetPosition = targetElement.offsetTop;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className={`sidebar-container ${isScrolled ? 'scrolled' : ''}`}>
      <div className="wrapper">
        <div className="icon">A <div className='circle'></div></div>
        <a
          href="#About"
          className={`rotated-text ${selectedSection === 'About' ? 'selected' : ''}`}
          onClick={() => handleClick('About')}
        >
          About
        </a>
        <a
          href="#Projects"
          className={`rotated-text ${selectedSection === 'Projects' ? 'selected' : ''}`}
          onClick={() => handleClick('Projects')}
        >
          Projects
        </a>
        <a
          href="#Contact"
          className={`rotated-text ${selectedSection === 'Contact' ? 'selected' : ''}`}
          onClick={() => handleClick('Contact')}
        >
          Contact
        </a>
      </div>
    </div>
  );
};
