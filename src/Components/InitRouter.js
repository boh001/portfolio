import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import React, { useState } from "react";
import Home from "Routes/Home";
import About from "Routes/About";
import Projects from "./Routers/Projects";
import Contact from "Routes/Contact";
import Nav from "Components/Nav/Nav";
import { Page } from "store";
import Bg from "./Bg/Bg";
import Logo from "./Logo/Logo";

export default () => {
  console.log("router");
  const [page, setPage] = useState("");
  const [active, setActive] = useState(false);
  return (
    <Router basename={window.location.pathname || ""}>
      <Bg active={active}>
        <Logo page={page} active={active} setActive={setActive} />
        <Page>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/project" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Redirect to="/" />
          </Switch>
        </Page>
      </Bg>
      <Nav />
    </Router>
  );
};
