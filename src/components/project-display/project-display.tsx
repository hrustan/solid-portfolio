import type { Component } from "solid-js";
import "./project-display.scss";

type ProjectInterface = {
  projectTitle: string;
  projectLink: string;
  projectDescription: string;
  projectImage: string;
};

type ProjectDisplayInterface = {
  project: ProjectInterface;
};

export const ProjectDisplay: Component<ProjectDisplayInterface> = (props) => {
  return (
    <div class="project-display">
      <h3>{props.project.projectTitle}</h3>
      <p>{props.project.projectDescription}</p>
      <p>{props.project.projectLink}</p>
      <p>{props.project.projectImage}</p>
    </div>
  );
};
