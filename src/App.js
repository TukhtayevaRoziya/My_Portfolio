import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Switch from "./components/switch/Switch";
import Language from "./components/language/Language";

import "./App.css";
import { Preloader } from "./components/preloader/Preloader";

const Header = lazy(() => import("./components/header/Header"));
const Resume = lazy(() => import("./components/resume/Resume"));
const Skills = lazy(() => import("./components/skills/Skills"));
const Project = lazy(() => import("./components/project/Project"));

const App = () => {
  return (
    <div className="App">
      <h2 className="counter">
        <Language />
        <Switch />
      </h2>

      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Preloader />}>
              <Header />
            </Suspense>
          }
        />
        <Route
          path="/resume"
          element={
            <Suspense fallback={<Preloader />}>
              <Resume />
            </Suspense>
          }
        />
        <Route
          path="/skills"
          element={
            <Suspense fallback={<Preloader />}>
              <Skills />
            </Suspense>
          }
        />
        <Route
          path="/project"
          element={
            <Suspense fallback={<Preloader />}>
              <Project />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
