import "./assets/scss/app.scss";
import { useState, useRef } from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Toast from "../src/components/Toast";

function App() {
  const [page, setPage] = useState("home");
  const toastRef = useRef(null);

  const toastShow = () => {
    toastRef.current.showToast();
  };

  return (
    <div className="App">
      <div className="nav">
        <div className="menu">
          <input
            type="radio"
            id="radio-1"
            name="menu"
            value="home"
            onChange={(e) => setPage(e.target.value)}
            defaultChecked
          />
          <label className="opt" htmlFor="radio-1">
            Home
          </label>

          <input
            type="radio"
            id="radio-2"
            name="menu"
            value="projects"
            onChange={(e) => setPage(e.target.value)}
          />
          <label className="opt" htmlFor="radio-2">
            Projects
          </label>

          <input
            type="radio"
            id="radio-3"
            name="menu"
            value="contact"
            onChange={(e) => setPage(e.target.value)}
          />
          <label className="opt" htmlFor="radio-3">
            Contact
          </label>

          <span className="glider"></span>
        </div>
      </div>
      <div className="pages">
        {page === "home" && (
          <Home
            toContact={() => {
              setPage("contact");
              document.getElementById("radio-3").checked = true;
              document.getElementById("radio-1").checked = false;
            }}
          />
        )}
        {page === "projects" && <Projects />}
        {page === "contact" && <Contact toastShow={toastShow} />}
      </div>
      <Toast ref={toastRef} message="Message sent!" />
    </div>
  );
}

export default App;
