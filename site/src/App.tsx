import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import CurriculumVitae from "./pages/CurriculumVitae";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Project from "./pages/Project";
import projectsJson from "../projects.json";
export default function App() {
  return (
    <div className="max-w-[1500px] m-auto">
      <div className="flex flex-col flex-nowrap min-h-[100vh]">
        <BrowserRouter>
          <Navbar />
          <div className="flex-1">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<About />} />
              <Route path="/cv" element={<CurriculumVitae />} />
              <Route path="/" element={<Home />} />
              {projectsJson.projects.map((project) => {
                return (
                  <Route
                    path={`/${project.name.replace(/\s/g, "")}`}
                    element={<Project project={project.name} />}
                  />
                );
              })}
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}
