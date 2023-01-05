import "../assets/scss/projects.scss";
import noto from "../assets/icons/noto.png";

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
            </div>
          </div>
        </div>
        <div className="image-card">
          <img src={noto} alt="noto-logo" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
