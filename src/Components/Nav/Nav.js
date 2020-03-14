import React from "react";
import { NavFrame, NavLink, LinkFrame } from "./Nav.style";

export default React.memo(() => {
  console.log("nav");
  return (
    <NavFrame>
      <LinkFrame>
        <NavLink to="/">home</NavLink>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/project">project</NavLink>
        <NavLink to="/contact">contact</NavLink>
      </LinkFrame>
    </NavFrame>
  );
});
