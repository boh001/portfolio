import React from "react";
import { Route } from "react-router-dom";
import Project from "Routes/Project";
import ProjectDetail from "Routes/ProjectDetail";

export default ({ match }) => {
  return (
    <>
      <Route exact path={match.path} component={Project} />
      <Route path={`${match.path}/:id`} component={ProjectDetail} />
    </>
  );
};
