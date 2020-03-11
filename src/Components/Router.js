import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import React from "react";
import Home from "Routes/Home";
import Nav from "Components/Nav/Nav";

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <Nav />
    </Router>
  );
};
