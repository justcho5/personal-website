// import { useState } from "react";
import projectsJson from "../../projects.json";
import Card from "./Card";
function Content() {
  const initialProjects = projectsJson.projects;
  //   const [projects, setProjects] = useState(initialProjects);

  return (
    <div className="flex flex-wrap lg:gap-x-[20px] lg:gap-y-[50px] lg:mt-[100px]">
      {initialProjects.map((project) => (
        <Card key={project.id} project={project} />
      ))}
    </div>
  );
}

export default Content;
