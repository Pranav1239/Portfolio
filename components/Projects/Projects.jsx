import React from "react";
import ProjectsCard from "./ProjectsCard";
import ProjectsCardM from "./ProjectsCardM";

const Projects = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <div className="hidden xl:block">
          <ProjectsCard />
        </div>
        <div className="xl:hidden">
          <ProjectsCardM />
        </div>
      </div>
      {/* <div>
        <ProjectsCard />
      </div> */}
    </>
  );
};

export default Projects;
