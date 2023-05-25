import "../assets/scss/projects.scss";
import { motion } from "framer-motion";
import { useState } from "react";

// import icons / images
import noto from "../assets/images/noto.png";
import wordle from "../assets/images/wordle.png";
import budgeting from "../assets/images/budgeting.png";
import typ from "../assets/images/typ.png";
import github from "../assets/icons/github2.png";
import link from "../assets/icons/link-icon.png";
import githubWhite from "../assets/icons/github-white.png";
import linkWhite from "../assets/icons/link-white.png";

function Projects() {
  const [card1Hover, setCard1Hover] = useState(false);
  const [card2Hover, setCard2Hover] = useState(false);
  const [card3Hover, setCard3Hover] = useState(false);
  const [card4Hover, setCard4Hover] = useState(false);

  return (
    <div className="projects">
      <div className="typ project-right">
        <motion.div
          className="image-card"
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          transition={{ type: "tween", duration: 1.2, delay: 0.2 }}
          onMouseEnter={() => {
            setCard4Hover(true);
          }}
          onMouseLeave={() => {
            setCard4Hover(false);
          }}
        >
          {card4Hover && (
            <div className="hover">
              <div className="overlay-links">
                <a
                  href="https://github.com/brandonlam4237/Typ"
                  target="_blank"
                  rel="noreferrer"
                >
                  <motion.img
                    src={githubWhite}
                    alt="github"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.35 }}
                  />
                </a>
                <a
                  href="https://typtest.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <motion.img
                    src={linkWhite}
                    alt="external link"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.35, delay: 0.4 }}
                  />
                </a>
              </div>
              <div className="overlay"></div>
            </div>
          )}
          <img src={typ} alt="typ app" />
        </motion.div>
        <motion.div
          className="description-card"
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          transition={{ type: "tween", duration: 1.2, delay: 0.2 }}
        >
          <div className="content">
            <div className="title">Typ</div>
            <p className="desc">
              A typing speed test web application with several test modes to
              choose from. Users can sign up for an account to track their
              personal records and compete with others on the leaderboard. Text
              prompts and user account credentials/stats are stored in a
              PostgreSQL database.
            </p>
            <div className="stack">
              <div> React Typescript Node.js PostgreSQL </div>
              <div className="links">
                <a
                  href="https://github.com/brandonlam4237/Typ"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={github} alt="github" />
                </a>
                <a
                  href="https://typtest.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={link} alt="external link" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="noto project-left">
        <motion.div
          className="description-card"
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          transition={{ type: "tween", duration: 1.2, delay: 0.4 }}
        >
          <div className="content">
            <div className="title">Noto</div>
            <p className="desc">
              A minimalistic note taking app. Noto is a full-stack CRUD
              application built using React for the front-end, and an
              express/node.js back-end REST API. User notes, and credentials are
              stored using MongoDB.
            </p>
            <div className="stack">
              <div>MongoDB Express React Node.js </div>
              <div className="links">
                <a
                  href="https://github.com/brandonlam4237/noto"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={github} alt="github" />
                </a>
                <a
                  href="https://noto-notes.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={link} alt="external link" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="image-card"
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          transition={{ type: "tween", duration: 1.2, delay: 0.4 }}
          onMouseEnter={() => {
            setCard1Hover(true);
          }}
          onMouseLeave={() => {
            setCard1Hover(false);
          }}
        >
          {card1Hover && (
            <div className="hover">
              <div className="overlay-links">
                <a
                  href="https://github.com/brandonlam4237/noto"
                  target="_blank"
                  rel="noreferrer"
                >
                  <motion.img
                    src={githubWhite}
                    alt="github"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.35 }}
                  />
                </a>
                <a
                  href="https://noto-notes.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <motion.img
                    src={linkWhite}
                    alt="external link"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.35, delay: 0.4 }}
                  />
                </a>
              </div>
              <div className="overlay"></div>
            </div>
          )}
          <img src={noto} alt="noto-logo" />
        </motion.div>
      </div>
      <div className="wordle project-right">
        <motion.div
          className="image-card"
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          transition={{ type: "tween", duration: 1.2, delay: 0.6 }}
          onMouseEnter={() => {
            setCard2Hover(true);
          }}
          onMouseLeave={() => {
            setCard2Hover(false);
          }}
        >
          {card2Hover && (
            <div className="hover">
              <div className="overlay-links">
                <a
                  href="https://github.com/brandonlam4237/wordle-plus-plus"
                  target="_blank"
                  rel="noreferrer"
                >
                  <motion.img
                    src={githubWhite}
                    alt="github"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.35 }}
                  />
                </a>
                <a
                  href="https://wordlepp.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <motion.img
                    src={linkWhite}
                    alt="external link"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.35, delay: 0.4 }}
                  />
                </a>
              </div>
              <div className="overlay"></div>
            </div>
          )}
          <img src={wordle} alt="noto-logo" />
        </motion.div>
        <motion.div
          className="description-card"
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          transition={{ type: "tween", duration: 1.2, delay: 0.6 }}
        >
          <div className="content">
            <div className="title">Wordle++</div>
            <p className="desc">
              All the fun of the original game, now with 20% more letters. Built
              in React and styled with Sass. Featuring visual settings, hard
              mode, and game stats tracked in local storage.
            </p>
            <div className="stack">
              <div> React Sass </div>
              <div className="links">
                <a
                  href="https://github.com/brandonlam4237/wordle-plus-plus"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={github} alt="github" />
                </a>
                <a
                  href="https://wordlepp.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={link} alt="external link" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="budgeting project-left">
        <motion.div
          className="description-card"
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          transition={{ type: "tween", duration: 1.2, delay: 0.8 }}
        >
          <div className="content">
            <div className="title">Budgeting Mobile</div>
            <p className="desc">
              A budgeting android mobile app, written in Java, using Android
              Studio. Various spending categories are tracked and displayed with
              graphs to visualize spending habits. Data for the application is
              stored using a SQLite database.
            </p>
            <div className="stack">
              <div>Java AndroidStudio SQLite </div>
              <div className="links">
                <a
                  href="https://github.com/brandonlam4237/Budgeting-Mobile"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={github} alt="github" />
                </a>
                <a
                  href="https://github.com/brandonlam4237/Budgeting-Mobile"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={link} alt="external link" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="image-card"
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          transition={{ type: "tween", duration: 1.2, delay: 0.8 }}
          onMouseEnter={() => {
            setCard3Hover(true);
          }}
          onMouseLeave={() => {
            setCard3Hover(false);
          }}
        >
          {card3Hover && (
            <div className="hover">
              <div className="overlay-links">
                <a
                  href="https://github.com/brandonlam4237/Budgeting-Mobile"
                  target="_blank"
                  rel="noreferrer"
                >
                  <motion.img
                    src={githubWhite}
                    alt="github"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.35 }}
                  />
                </a>
                <a
                  href="https://github.com/brandonlam4237/Budgeting-Mobile"
                  target="_blank"
                  rel="noreferrer"
                >
                  <motion.img
                    src={linkWhite}
                    alt="external link"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.35, delay: 0.4 }}
                  />
                </a>
              </div>
              <div className="overlay"></div>
            </div>
          )}
          <img src={budgeting} alt="budgeting-app" />
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
