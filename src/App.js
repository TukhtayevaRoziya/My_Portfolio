import { Route, Routes } from "react-router-dom"

import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Resume from "./components/Resume/Resume"
import Skills from "./components/Skills/Skills"
import Switch from "./components/Switch/Switch"
import Project from "./components/Project/Project"
import Language from "./components/Language/Language"

import "./App.css"

const App = () => {
  return (
    <div className="App">
      <h2 className="counter">
        <Language />
        <Switch />
      </h2>

      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
