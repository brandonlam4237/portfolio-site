import { useState } from "react";
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
    <div className="skills">
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
          <label class="opt" for="opt-1">
            Front End
          </label>

          <input
            type="radio"
            id="opt-2"
            name="options"
            value="back-end"
            onChange={(e) => setOption(e.target.value)}
          />
          <label class="opt" for="opt-2">
            Back End
          </label>

          <input
            type="radio"
            id="opt-3"
            name="options"
            value="languages"
            onChange={(e) => setOption(e.target.value)}
          />
          <label class="opt" for="opt-3">
            Languages
          </label>

          <input
            type="radio"
            id="opt-4"
            name="options"
            value="other"
            onChange={(e) => setOption(e.target.value)}
          />
          <label class="opt" for="opt-4">
            Other
          </label>

          <span className="glider"></span>
        </div>
      </div>
      <div className="content">
        {option === "front-end" && (
          <div className="skill-page">
            <div className="skill-badge">
              <img className="icon" src={html} />
              <div>HTML</div>
            </div>

            <div className="skill-badge">
              <img className="icon" src={css} />
              <div>CSS</div>
            </div>

            <div className="skill-badge">
              <img className="icon" src={react} />
              <div>React</div>
            </div>
            <div className="skill-badge">
              <img className="icon" src={sass} />
              <div>Sass</div>
            </div>
          </div>
        )}
        {option === "back-end" && (
          <div className="skill-page">
            <div className="skill-badge">
              <img className="icon" src={node} />
              <div>nodeJS</div>
            </div>
            <div className="skill-badge">
              <img className="icon" src={express} />
              <div>express</div>
            </div>
            <div className="skill-badge">
              <img className="icon" src={sql} />
              <div>SQL</div>
            </div>
            <div className="skill-badge">
              <img className="icon" src={mongo} />
              <div>mongoDB</div>
            </div>
          </div>
        )}
        {option === "languages" && (
          <div className="skill-page">
            <div className="skill-badge">
              <img className="icon" src={js} />
              <div>Javascript</div>
            </div>
            <div className="skill-badge">
              <img className="icon" src={python} />
              <div>Python</div>
            </div>
            <div className="skill-badge">
              <img className="icon" src={java} />
              <div>Java</div>
            </div>
            <div className="skill-badge">
              <img className="icon" src={c} />
              <div>C++</div>
            </div>
          </div>
        )}
        {option === "other" && (
          <div className="skill-page">
            <div className="skill-badge">
              <img className="icon" src={git} />
              <div>git</div>
            </div>
            <div className="skill-badge">
              <img className="icon" src={ps} />
              <div>Photoshop</div>
            </div>
            <div className="skill-badge">
              <img className="icon" src={ae} />
              <div>After Effects</div>
            </div>
            <div className="skill-badge">
              <img className="icon" src={ai} />
              <div>Illustrator</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Skills;
