import "../assets/scss/home.scss";
import github from "../assets/icons/github.png";
import linkedin from "../assets/icons/linkedin.png";
import resume from "../assets/icons/resume.png";
import pdf from "../assets/icons/pdf.pdf";
import Skills from "../components/Skills";
//import face from "../assets/icons/face.png";
import kirby from "../assets/icons/kirby.jpeg";
import arrow from "../assets/icons/arrow.png";
//import stars from "../assets/icons/stars.png";
import blush from "../assets/icons/blush.png";
import { useState } from "react";

function Home({ toContact }) {
  const [aboutHover, setAboutHover] = useState(false);
  const [linkedinHover, setLinkedinHover] = useState(false);
  const [gitHover, setGitHover] = useState(false);
  const [resumeHover, setResumeHover] = useState(false);
  return (
    <div className="home">
      <div
        className="about-me"
        onMouseEnter={() => {
          setAboutHover(true);
        }}
        onMouseLeave={() => {
          setAboutHover(false);
        }}
      >
        {aboutHover && (
          <div className="overlay">
            <div className="content">
              <div className="text">
                <div>Hello! My name is Brandon. </div>
                <div>I'm a full-stack web developer </div>
                <div>with a passion for creating aesthetic</div>
                <div>and performative applications. </div>
              </div>
              <button onClick={toContact}>
                <div className="contact-btn">
                  <img src={blush} alt="blush" />
                  <div>Contact</div>
                  <img src={blush} alt="blush" />
                </div>
              </button>
            </div>

            <span className="screen" />
          </div>
        )}
        {!aboutHover && <img src={kirby} alt="personal-icon" />}
      </div>
      <a
        href="https://github.com/brandonlam4237"
        target="_blank"
        rel="noreferrer"
        className="github"
        onMouseEnter={() => {
          setGitHover(true);
        }}
        onMouseLeave={() => {
          setGitHover(false);
        }}
      >
        {gitHover && <img id="arrow" src={arrow} alt="arrow" />}
        <img src={github} alt="github icon" />
      </a>
      <Skills />
      <a
        href="https://www.linkedin.com/in/brandon-lam-b30819165/"
        target="_blank"
        rel="noreferrer"
        className="linkedin"
        onMouseEnter={() => {
          setLinkedinHover(true);
        }}
        onMouseLeave={() => {
          setLinkedinHover(false);
        }}
      >
        {linkedinHover && <img id="arrow" src={arrow} alt="arrow" />}
        <img src={linkedin} alt="linkedin icon" />
      </a>
      <a
        href={pdf}
        target="_blank"
        rel="noreferrer"
        className="resume"
        onMouseEnter={() => {
          setResumeHover(true);
        }}
        onMouseLeave={() => {
          setResumeHover(false);
        }}
      >
        {resumeHover && <img id="arrow" src={arrow} alt="arrow" />}
        <img src={resume} alt="resume icon" />
      </a>
    </div>
  );
}

export default Home;
