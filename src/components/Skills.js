import { useState } from "react";
import "../assets/scss/skills.scss";

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
            value="other"
            onChange={(e) => setOption(e.target.value)}
          />
          <label class="opt" for="opt-3">
            Other
          </label>

          <span className="glider"></span>
        </div>
      </div>
      <div className="content">
        {option === "front-end" && <div>front</div>}
        {option === "back-end" && <div>back</div>}
        {option === "other" && <div>other</div>}
      </div>
    </div>
  );
}

export default Skills;
