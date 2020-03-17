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
        I majored in industrial engineering and studied deep learning. But I'm
        interested in web development and I'm currently studying for front-end
        developers.
      </Main>
    </ContentFrame>
  );
};
