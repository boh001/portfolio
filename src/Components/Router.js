import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import React, { useState } from "react";
import Home from "Routes/Home";
import About from "Routes/About";
import Project from "Routes/Project";
import Contact from "Routes/Contact";
import Nav from "Components/Nav/Nav";
import { Page } from "store";
import Bg from "./Bg/Bg";
import Logo from "./Logo/Logo";

export default () => {
  const [page, setPage] = useState("");
  const [active, setActive] = useState(false);
  return (
    <Router>
      <Bg active={active}>
        <Logo page={page} active={active} setActive={setActive} />
        <Page>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/project" exact component={Project} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </Page>
      </Bg>
      <Nav />
    </Router>
  );
};
