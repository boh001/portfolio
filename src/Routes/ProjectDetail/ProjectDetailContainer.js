import ProjectDetailPresenter from "./ProjectDetailPresenter";
import React from "react";
import { projects } from "project";

export default ({ match }) => {
  const {
    params: { id }
  } = match;
  const project = projects.filter(p => p.id === id);

  return <ProjectDetailPresenter project={project} />;
};
