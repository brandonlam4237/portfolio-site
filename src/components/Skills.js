import { useState } from "react";
import { motion } from "framer-motion";
import "../assets/scss/skills.scss";

// icons
import html from "../assets/icons/html-icon.png";
import css from "../assets/icons/css-icon.png";
import react from "../assets/icons/react-icon.png";
import sass from "../assets/icons/sass-icon.png";

import js from "../assets/icons/js-icon.png";
import python from "../assets/icons/python-icon.png";
import java from "../assets/icons/java-icon.png";
import c from "../assets/icons/c-icon.png";

import express from "../assets/icons/express-icon.png";
import mongo from "../assets/icons/mongo-icon.png";
import node from "../assets/icons/node-icon.png";
import sql from "../assets/icons/sql-icon.png";

import git from "../assets/icons/git-icon.png";
import ae from "../assets/icons/ae-icon.png";
import ai from "../assets/icons/ai-icon.png";
import ps from "../assets/icons/ps-icon.png";

function Skills() {
  const [option, setOption] = useState("front-end");

  return (
    <div className="skills" id="skills">
      <div className="title">Skills</div>
      <div className="mini-nav">
        <div className="options">
          <input
            type="radio"
            id="opt-1"
            name="options"
            value="front-end"
            onChange={(e) => setOption(e.target.value)}
            defaultChecked
          />
          <label className="opt" htmlFor="opt-1">
            Front End
          </label>

          <input
            type="radio"
            id="opt-2"
            name="options"
            value="back-end"
            onChange={(e) => setOption(e.target.value)}
          />
          <label className="opt" htmlFor="opt-2">
            Back End
          </label>

          <input
            type="radio"
            id="opt-3"
            name="options"
            value="languages"
            onChange={(e) => setOption(e.target.value)}
          />
          <label className="opt" htmlFor="opt-3">
            Languages
          </label>

          <input
            type="radio"
            id="opt-4"
            name="options"
            value="other"
            onChange={(e) => setOption(e.target.value)}
          />
          <label className="opt" htmlFor="opt-4">
            Other
          </label>

          <span className="glider"></span>
        </div>
      </div>
      <div className="content">
        {option === "front-end" && (
          <div className="skill-page">
            <div className="skill-badge">
              <motion.img
                whileHover={{ y: -6 }}
                className="icon"
                src={html}
                alt="html"
              />
              <div>HTML</div>
            </div>

            <div className="skill-badge">
              <motion.img
                whileHover={{ y: -6 }}
                className="icon"
                src={css}
                alt="css"
              />
              <div>CSS</div>
            </div>

            <div className="skill-badge">
              <motion.img
                whileHover={{ y: -6 }}
                className="icon"
                src={react}
                alt="react"
              />
              <div>React</div>
            </div>
            <div className="skill-badge">
              <motion.img
                whileHover={{ y: -6 }}
                className="icon"
                src={sass}
                alt="sass"
              />
              <div>Sass</div>
            </div>
          </div>
        )}
        {option === "back-end" && (
          <div className="skill-page">
            <div className="skill-badge">
              <motion.img
                whileHover={{ y: -6 }}
                className="icon"
                src={node}
                alt="nodeJS"
              />
              <div>nodeJS</div>
            </div>
            <div className="skill-badge">
              <motion.img
                whileHover={{ y: -6 }}
                className="icon"
                src={express}
                alt="express"
              />
              <div>express</div>
            </div>
            <div className="skill-badge">
              <motion.img
                whileHover={{ y: -6 }}
                className="icon"
                src={sql}
                alt="sql"
              />
              <div>SQL</div>
            </div>
            <div className="skill-badge">
              <motion.img
                whileHover={{ y: -6 }}
                className="icon"
                src={mongo}
                alt="mongo"
              />
              <div>mongoDB</div>
            </div>
          </div>
        )}
        {option === "languages" && (
          <div className="skill-page">
            <div className="skill-badge">
              <motion.img
                whileHover={{ y: -6 }}
                className="icon"
                src={js}
                alt="javascript"
              />
              <div>Javascript</div>
            </div>
            <div className="skill-badge">
              <motion.img
                whileHover={{ y: -6 }}
                className="icon"
                src={python}
                alt="python"
              />
              <div>Python</div>
            </div>
            <div className="skill-badge">
              <motion.img
                whileHover={{ y: -6 }}
                className="icon"
                src={java}
                alt="java"
              />
              <div>Java</div>
            </div>
            <div className="skill-badge">
              <motion.img
                whileHover={{ y: -6 }}
                className="icon"
                src={c}
                alt="c++"
              />
              <div>C++</div>
            </div>
          </div>
        )}
        {option === "other" && (
          <div className="skill-page">
            <div className="skill-badge">
              <motion.img
                whileHover={{ y: -6 }}
                className="icon"
                src={git}
                alt="git"
              />
              <div>git</div>
            </div>
            <div className="skill-badge">
              <motion.img
                whileHover={{ y: -6 }}
                className="icon"
                src={ps}
                alt="photoshop"
              />
              <div>Photoshop</div>
            </div>
            <div className="skill-badge">
              <motion.img
                whileHover={{ y: -6 }}
                className="icon"
                src={ae}
                alt="after effects"
              />
              <div>After Effects</div>
            </div>
            <div className="skill-badge">
              <motion.img
                whileHover={{ y: -6 }}
                className="icon"
                src={ai}
                alt="illustrator"
              />
              <div>Illustrator</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Skills;
