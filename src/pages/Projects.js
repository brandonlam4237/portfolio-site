import "../assets/scss/projects.scss";
import noto from "../assets/icons/noto.png";
import wordle from "../assets/icons/wordle.png";
import github from "../assets/icons/github2.png";
import link from "../assets/icons/link-icon.png";

function Projects() {
  return (
    <div className="projects">
      <div className="noto project-left">
        <div className="description-card">
          <div className="content">
            <div className="title">Noto</div>
            <p className="desc">
              A minimalistic note taking app. Noto is a full-stack CRUD
              application built using React for the front-end, and
              express/node.js back-end. User notes, and credentials are stored
              using MongoDB.
            </p>
            <div className="stack">
              <div>MongoDB Express React Node.js </div>
              <div className="links">
                <img src={github} alt="github" />
                <img src={link} alt="external link" />
              </div>
            </div>
          </div>
        </div>
        <div className="image-card">
          <img src={noto} alt="noto-logo" />
        </div>
      </div>
      <div className="wordle project-right">
        <div className="image-card">
          <img src={wordle} alt="noto-logo" />
        </div>
        <div className="description-card">
          <div className="content">
            <div className="title">Wordle++</div>
            <p className="desc">
              All the fun of the original game, now with 20% more letters. Built
              in React and styled with SASS. The game logic fetches its 6 letter
              word banks from local JSON files.
            </p>
            <div className="stack">
              <div> React Sass </div>
              <div className="links">
                <img src={github} alt="github" />
                <img src={link} alt="external link" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
