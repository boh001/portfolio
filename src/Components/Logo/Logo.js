import React, { useCallback, useState } from "react";
import { LogoFrame, ToggleUp, ToggleDown, Toggle } from "./Logo.style";

export default ({ active, setActive }) => {
  console.log("logo");
  const showSlide = useCallback(e => {
    e.preventDefault();
    setActive(!active);
  });
  return (
    <>
      <LogoFrame>Logo</LogoFrame>
      <Toggle onClick={e => showSlide(e)} active={active}>
        <ToggleUp active={active}></ToggleUp>
        <ToggleDown active={active}></ToggleDown>
      </Toggle>
    </>
  );
};
