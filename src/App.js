import React from "react";
import AboutMe from "./components/AboutMe";
import EducationAndJobs from "./components/EducationAndJobs";
import Home from "./components/Home";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="font-[Poppins] bg-slate-800">
      <Home />
      <AboutMe />
      <EducationAndJobs />
      <Projects />
    </div>
  );
}

export default App;
