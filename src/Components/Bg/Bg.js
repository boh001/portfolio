import React from "react";
import { Bg } from "./Bg.style";
export default ({ active, children }) => {
  console.log("bg");
  return <Bg active={active}>{children}</Bg>;
};
