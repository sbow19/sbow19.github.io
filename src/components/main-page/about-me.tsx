import "@styles/index.css";
import "@styles/App.css";
import React from "react";

const AboutMe: React.FC = () => {
  return (
    <>
      <div className="profile-img-wrapper">
        <img
          alt="Sam Bowditch"
          src="src\assets\Screenshot 2024-03-05 150356.jpg"
        />
        {/* Must be of proper resolution for screen size*/}
      </div>
      <div className="about-me-text-container">
        <div className="about-me-title">
          <h2>About me</h2>
        </div>
        <div className="about-me-text">
          I am a software developer developer with a passion for building
          fullstack productivity applications for mobile and the browser. I have
          a strong understanding of JavaScript and Python, which have formed the
          cornerstone of my projects. I am also learning Go.
          <br />
          <br />
          Most recently, I built a web-scraper Chrome Extension, which speeds up
          the process of collecting data from frequently visited websites. My
          current projects include a CLI-messaging app (Go), a Mobile language
          learning app (React Native), and a 3D browser-game (WebGL,
          TypeScript).
          <br />
          <br />I am based in Rio de Janeiro, Brazil
        </div>

        {/* Contacts container for mobile */}
        <div className="about-me-contact-container">
          <div>
            <a href="mailto:zctlsab@gmail.com">
              <img
                src="src\assets\envelope-regular.svg"
                className="social-icons"
              />
            </a>
          </div>

          <div>
            <a href="https://github.com/sbow19" target="_blank">
              <img src="src\assets\github.svg" className="social-icons" />
            </a>
          </div>

          <div>
            <a
              href="https://www.linkedin.com/in/sam-bowditch-b777032bb"
              target="_blank"
            >
              <img src="src\assets\linkedin.svg" className="social-icons" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
