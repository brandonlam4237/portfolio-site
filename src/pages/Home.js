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
import { motion } from "framer-motion";

function Home({ toContact }) {
  const [aboutHover, setAboutHover] = useState(false);
  const [linkedinHover, setLinkedinHover] = useState(false);
  const [gitHover, setGitHover] = useState(false);
  const [resumeHover, setResumeHover] = useState(false);
  const arrowPopup = {
    init: {
      y: 10,
      opacity: 0.4,
    },
    end: {
      y: 0,
      opacity: 1,
    },
  };

  const moduleAnimation = {
    init: {
      y: "100vh",
    },
    end: {
      y: 0,
      transition: {
        type: "tween",
        duration: 1.2,
      },
    },
  };

  const parentAnimation = {
    init: {
      y: 0,
    },
    end: {
      y: 0,
      transition: {
        when: "beforeChildren",
        type: "spring",
        staggerChildren: 5,
      },
    },
  };
  return (
    <div className="home">
      <motion.div
        variants={moduleAnimation}
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        transition={{ type: "tween", duration: 1.2, delay: 0 }}
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
      </motion.div>
      <motion.a
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        transition={{ type: "tween", duration: 1.2, delay: 0.15 }}
        className="github"
        href="https://github.com/brandonlam4237"
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => {
          setGitHover(true);
        }}
        onMouseLeave={() => {
          setGitHover(false);
        }}
      >
        {gitHover && (
          <motion.img
            variants={arrowPopup}
            initial="init"
            animate="end"
            id="arrow"
            src={arrow}
            alt="arrow"
          />
        )}
        <img src={github} alt="github icon" />
      </motion.a>
      <Skills />
      <motion.a
        className="linkedin"
        initial={{ y: "80vh" }}
        animate={{ y: 0 }}
        transition={{ type: "tween", duration: 1.2, delay: 0.4 }}
        href="https://www.linkedin.com/in/brandon-lam-b30819165/"
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => {
          setLinkedinHover(true);
        }}
        onMouseLeave={() => {
          setLinkedinHover(false);
        }}
      >
        {linkedinHover && (
          <motion.img
            id="arrow"
            variants={arrowPopup}
            initial="init"
            animate="end"
            src={arrow}
            alt="arrow"
          />
        )}
        <img src={linkedin} alt="linkedin icon" />
      </motion.a>
      <motion.a
        initial={{ y: "80vh" }}
        animate={{ y: 0 }}
        transition={{ type: "tween", duration: 1.2, delay: 0.55 }}
        className="resume"
        href={pdf}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => {
          setResumeHover(true);
        }}
        onMouseLeave={() => {
          setResumeHover(false);
        }}
      >
        {resumeHover && (
          <motion.img
            id="arrow"
            variants={arrowPopup}
            initial="init"
            animate="end"
            src={arrow}
            alt="arrow"
          />
        )}
        <img src={resume} alt="resume icon" />
      </motion.a>
    </div>
  );
}

export default Home;
