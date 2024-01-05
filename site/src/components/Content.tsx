// import { useState } from "react";
import projectsJson from "../../projects.json";
import Card from "./Card";

function Content() {
  const initialProjects = projectsJson.projects;
  //   const [projects, setProjects] = useState(initialProjects);

  return (
    <div className="flex flex-wrap lg:gap-[20px]">
      {initialProjects.map((project) => (
        <Card project={project} />
      ))}
    </div>
  );
}

export default Content;
