import React from "react";
import { NavFrame, NavLink, LinkFrame } from "./Nav.style";

export default () => {
  return (
    <NavFrame>
      <LinkFrame>
        <NavLink to="#">home</NavLink>
        <NavLink to="#">about</NavLink>
        <NavLink to="#">project</NavLink>
        <NavLink to="#">contact</NavLink>
      </LinkFrame>
    </NavFrame>
  );
};
