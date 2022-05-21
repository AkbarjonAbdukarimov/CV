//dependensies
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

//styles
import "./App.css";
import "animate.css";
//components
import Nav from "./components/Nav";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";
function App() {
  return (
    //can be used <BrowserRouter></BrowserRouter>
    <HashRouter>
      <div className="cnt">
        <Nav />
        <Routes>
          <Route path="/" element={<Resume />} />
          <Route path="/resume" element={<Resume />} />

          <Route path="/skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
