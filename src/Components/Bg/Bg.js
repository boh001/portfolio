import React from "react";
import { Bg } from "./Bg.style";
export default ({ active, children }) => {
  return <Bg active={active}>{children}</Bg>;
};
