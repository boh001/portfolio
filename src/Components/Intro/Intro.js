import React from "react";
import { ContentFrame, Name, Theme, Main } from "./Intro.style";

export default () => {
  console.log("intro");
  return (
    <ContentFrame>
      <Theme>
        Hello World,
        <br />
        <br /> I'm <Name>Kim Sang Hyeon</Name>
      </Theme>
      <Main>
        kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
      </Main>
    </ContentFrame>
  );
};
