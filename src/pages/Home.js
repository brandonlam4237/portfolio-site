import "../assets/scss/home.scss";
import github from "../assets/icons/github.png";
import linkedin from "../assets/icons/linkedin.png";
import resume from "../assets/icons/resume.png";
import pdf from "../assets/icons/pdf.pdf";
import Skills from "../components/Skills";

function Home() {
  return (
    <div className="home">
      <div className="about-me">About me</div>
      <a
        href="https://github.com/brandonlam4237"
        target="_blank"
        rel="noreferrer"
        className="github"
      >
        <img src={github} alt="github icon" />
      </a>
      <Skills />
      <a
        href="https://www.linkedin.com/in/brandon-lam-b30819165/"
        target="_blank"
        rel="noreferrer"
        className="linkedin"
      >
        <img src={linkedin} alt="linkedin icon" />
      </a>
      <a href={pdf} target="_blank" rel="noreferrer" className="resume">
        <img src={resume} alt="resume icon" />
      </a>
    </div>
  );
}

export default Home;
