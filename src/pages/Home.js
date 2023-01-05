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

  return (
    <div className="home">
      <motion.div
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
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.35 }}
                >
                  Hello! My name is Brandon Lam.
                </motion.div>
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.35, delay: 0.4 }}
                >
                  I'm a full-stack web developer
                </motion.div>
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.35, delay: 0.8 }}
                >
                  with a passion for creating aesthetic
                </motion.div>
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.35, delay: 1.2 }}
                >
                  and performative applications.
                </motion.div>
              </div>
              <motion.button
                onClick={toContact}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.35, delay: 1.6 }}
              >
                <motion.div className="contact-btn">
                  <motion.img
                    src={blush}
                    alt="blush"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2.4 }}
                  />
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.35, delay: 2 }}
                  >
                    Contact
                  </motion.div>
                  <motion.img
                    src={blush}
                    alt="blush"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2.4 }}
                  />
                </motion.div>
              </motion.button>
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
        transition={{ type: "tween", duration: 1.2, delay: 0.35 }}
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
        transition={{ type: "tween", duration: 1.2, delay: 0.5 }}
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
