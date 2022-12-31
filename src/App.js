import "./assets/scss/app.scss";
import { useState } from "react";
import Home from "./pages/Home";

function App() {
  const [page, setPage] = useState("home");
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
          <label class="opt" for="radio-1">
            Home
          </label>

          <input
            type="radio"
            id="radio-2"
            name="menu"
            value="projects"
            onChange={(e) => setPage(e.target.value)}
          />
          <label class="opt" for="radio-2">
            Projects
          </label>

          <input
            type="radio"
            id="radio-3"
            name="menu"
            value="contact"
            onChange={(e) => setPage(e.target.value)}
          />
          <label class="opt" for="radio-3">
            Contact
          </label>

          <span className="glider"></span>
        </div>
      </div>
      <div className="pages">
        {page === "home" && <Home />}
        {page === "projects" && <div>Projects</div>}
        {page === "contact" && <div>Contact</div>}
      </div>
    </div>
  );
}

export default App;
