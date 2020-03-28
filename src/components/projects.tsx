import React from "react";
import projectDescriptionsYML from "../data/projectDescriptions.yml";
import projectsYML from "../data/projects.yml";
import Project from "./project";

const typedProjectList: string[] = projectsYML;
const typedProjectDescriptions: Record<
  string,
  ProjectProp
> = projectDescriptionsYML;

export default () => {
  const projects = typedProjectList.map((item) => {
    const currentProject = typedProjectDescriptions[item];
    return <Project {...currentProject} key={currentProject.name} />;
  });
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">{projects}</div>
    </div>
  );
};
