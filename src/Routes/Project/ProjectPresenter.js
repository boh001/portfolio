import React from "react";
import Content from "Components/Content/Content";
import { projects } from "project";
import Project from "Components/Project/Project";

export default () => {
  return (
    <Content repeat={"6,50%"}>
      {projects.map((p, key) => {
        return (
          <>
            <Project
              key={key}
              name={p.id}
              des={p.des}
              detail={p.detail}
              img={p.img}
              ctg={p.ctg}
              github={p.github}
              member={p.member}
              period={p.period}
            />
          </>
        );
      })}
    </Content>
  );
};
