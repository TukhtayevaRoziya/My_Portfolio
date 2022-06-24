import { Route, Routes } from "react-router-dom";
// import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Resume } from "./components/resume/Resume";
import { Skills } from "./components/skills/Skills";
import { Switch } from "./components/switch/Switch";
import { Project } from "./components/project/Project";
import { Language } from "./components/language/Language";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h2 className="counter">
        <Language />
        <Switch />
      </h2>

      <Routes>
        <Route path="/My_Portfolio" element={<Header />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
