import ProjectPresenter from "./ProjectPresenter";
import React from "react";

export default ({ match }) => {
  console.log(match);

  return <ProjectPresenter />;
};
